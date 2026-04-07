"use client";

import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    category: "Frontend Core",
    color: "#C8737A",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "JavaScript (ES6+)", level: 92 },
    ],
  },
  {
    category: "Styling & Design",
    color: "#9B6B9B",
    skills: [
      { name: "Tailwind CSS", level: 92 },
      { name: "CSS3 / HTML5", level: 95 },
      { name: "Responsive Design", level: 93 },
      { name: "Accessibility (a11y)", level: 85 },
    ],
  },
  {
    category: "State & Performance",
    color: "#D4919A",
    skills: [
      { name: "Redux / Zustand", level: 88 },
      { name: "Web Performance", level: 85 },
      { name: "WebSockets", level: 80 },
      { name: "SQL", level: 60 },
    ],
  },
  {
    category: "Tools & Workflow",
    color: "#C8737A",
    skills: [
      { name: "Git", level: 90 },
      { name: "Figma", level: 78 },
      { name: "Webpack / Vite", level: 82 },
      { name: "Jira / Agile", level: 88 },
    ],
  },
];

const techBadges = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Redux",
  "WebSockets",
  "Git",
  "Figma",
  "Webpack",
  "REST APIs",
  "Postman",
  "SQL",
  "Jira",
];

function SkillBar({
  name,
  level,
  color,
  visible,
}: {
  name: string;
  level: number;
  color: string;
  visible: boolean;
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span
          className="text-sm text-cream/70"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          {name}
        </span>
        <span
          className="text-xs"
          style={{ fontFamily: "DM Mono, monospace", color, opacity: 0.8 }}
        >
          {level}%
        </span>
      </div>
      <div className="h-px bg-white/5 relative overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full transition-all duration-1000 ease-out"
          style={{
            width: visible ? `${level}%` : "0%",
            backgroundColor: color,
            transitionDelay: "200ms",
            boxShadow: `0 0 8px ${color}60`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(167,139,250,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section label */}
        <div
          className={`flex items-center gap-4 mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span
            className="text-xs text-rose tracking-widest uppercase"
            style={{ fontFamily: "DM Mono, monospace", letterSpacing: "0.3em" }}
          >
            Skills
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-rose/30 to-transparent" />
        </div>

        <div
          className={`mb-16 transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <h2 style={{ fontFamily: "Cormorant Garamond, serif" }}>
            <span
              className="text-cream"
              style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 600 }}
            >
              Technical{" "}
            </span>
            <span
              className="text-gradient-champagne"
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 300,
                fontStyle: "italic",
              }}
            >
              Arsenal
            </span>
          </h2>
        </div>

        {/* Skill bars grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${gi * 150 + 200}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: group.color }}
                />
                <h3
                  className="text-xs tracking-widest uppercase text-cream/50"
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    letterSpacing: "0.2em",
                    fontSize: "11px",
                  }}
                >
                  {group.category}
                </h3>
              </div>
              <div className="space-y-5">
                {group.skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={group.color}
                    visible={visible}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Marquee badges */}
        <div
          className={`transition-all duration-700 delay-700 ${visible ? "opacity-100" : "opacity-0"}`}
        >
          <div
            className="text-xs text-cream/30 tracking-widest uppercase text-center mb-6"
            style={{ fontFamily: "DM Mono, monospace", letterSpacing: "0.3em" }}
          >
            Tech I work with
          </div>
          <div className="relative overflow-hidden py-2">
            <div className="flex gap-4 animate-marquee whitespace-nowrap">
              {[...techBadges, ...techBadges].map((tech, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-white/5 text-xs text-cream/40 shrink-0"
                  style={{ fontFamily: "DM Mono, monospace" }}
                >
                  <span className="w-1 h-1 rounded-full bg-gold/50" />
                  {tech}
                </span>
              ))}
            </div>
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-ink to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-ink to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
