"use client";

import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    id: 1,
    role: "Software Development Engineer II",
    company: "LeapScholar",
    location: "Bengaluru, India",
    period: "Nov 2025 – Present",
    tag: "Current",
    color: "#C8737A",
    points: [
      {
        metric: "~40%",
        label: "Issue Reporting Platform",
        description:
          "Built an issue reporting platform from scratch, replacing scattered WhatsApp and email workflows. Counselors can now create structured tickets to flag course misinformation — resulting in more accurate data, faster resolution, and a ~40% reduction in average ticket turnaround time.",
      },
      {
        metric: "$30K",
        label: "Real-time Internal Chat",
        description:
          "Engineered a full real-time internal chat system using WebSockets, replacing the paid Sendbird integration. Supports group messaging and media sharing — saving $30K annually while meaningfully improving team coordination and response speed.",
      },
      {
        metric: "~15%",
        label: "Student–University Connection Platform",
        description:
          "Designed and built a platform enabling students to connect directly with university representatives during the discovery stage. Reduced early-funnel drop-off and contributed to a ~15% increase in onboarding conversion.",
      },
      {
        metric: null,
        label: "Mentorship & Platform Stability",
        description:
          "Mentored interns across coding standards, best practices, and complex troubleshooting. Actively contributed to platform reliability through on-call management, cross-team code reviews, and targeted bug fixes.",
      },
    ],
  },
  {
    id: 2,
    role: "Software Development Engineer I",
    company: "LeapScholar",
    location: "Bengaluru, India",
    period: "Mar 2023 – Oct 2025",
    tag: "SDE I",
    color: "#9B6B9B",
    points: [
      {
        metric: "~80%",
        label: "Self-serve Payment Flow",
        description:
          "Developed a self-serve payment flow that lets users complete university partner payments independently, without any manual intervention. This became the primary payment channel and now drives approximately 80% of overall payment volume across the platform.",
      },
      {
        metric: "4/5",
        label: "Q&A Sidebar with Real-time Lookup",
        description:
          "Built a real-time Q&A sidebar that resolves ~85% of common counselor queries within 4–5 seconds. The feature was so effective it achieved a counselor satisfaction score of 4/5 within just two weeks of going live.",
      },
      {
        metric: "~50%",
        label: "Course Search & Filter System",
        description:
          "Built the course search and filter system from scratch with both basic and advanced filters — college, state, city, and more. Helped counselors find exactly what they needed, cutting average search time by ~50%.",
      },
      {
        metric: "2.5L+",
        label: "Internal CMS to Replace Strapi",
        description:
          "Replaced the third-party Strapi CMS with a purpose-built internal content management system, giving the team full control over 2.5 Lakh+ courses with better flexibility, faster updates, and zero external dependency.",
      },
    ],
  },
  {
    id: 3,
    role: "Software Engineer",
    company: "MountBlue Technologies",
    location: "Bengaluru, India",
    period: "Jan 2022 – Feb 2023",
    tag: "First Role",
    color: "#D4919A",
    points: [
      {
        metric: null,
        label: "Secure Authentication",
        description:
          "Implemented secure user authentication using JSON Web Tokens (JWT) and OAuth2 — following modern authorization best practices to ensure reliable and safe access control across the application.",
      },
      {
        metric: null,
        label: "Cross-functional Collaboration",
        description:
          "Worked closely with Product Managers, Designers, and engineers across teams to translate product requirements into well-crafted, functional features — learning to bridge technical execution with broader business goals.",
      },
      {
        metric: null,
        label: "DOM Manipulation & Production Debugging",
        description:
          "Developed strong proficiency in DOM manipulation and debugging complex issues in live production environments, building the troubleshooting instincts that underpin reliable frontend engineering.",
      },
    ],
  },
];

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
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
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="group relative border border-white/5 hover:border-white/8 bg-ink-light/40 hover:bg-ink-light/70 transition-all duration-500 overflow-hidden">
        <div
          className="absolute top-0 left-0 w-0.5 h-full transition-all duration-300 group-hover:w-1"
          style={{ backgroundColor: exp.color }}
        />

        {/* Subtle hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at top left, ${exp.color}06 0%, transparent 55%)`,
          }}
        />

        <div className="pl-8 pr-7 py-8">
          {/* Card header */}
          <div className="flex flex-wrap items-start justify-between gap-3 mb-8">
            <div>
              <h3
                className="text-cream mb-1"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontWeight: 600,
                  fontSize: "clamp(20px, 2.5vw, 26px)",
                }}
              >
                {exp.role}
              </h3>
              <p
                className="text-cream/35 text-sm"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                {exp.company} &nbsp;·&nbsp; {exp.location}
              </p>
            </div>
            <span
              className="text-xs text-cream/20 shrink-0 mt-1"
              style={{
                fontFamily: "DM Mono, monospace",
                letterSpacing: "0.08em",
              }}
            >
              {exp.period}
            </span>
          </div>

          {/* Separator */}
          <div
            className="w-full h-px mb-8"
            style={{
              background: `linear-gradient(to right, ${exp.color}25, transparent)`,
            }}
          />

          <div className="space-y-7">
            {exp.points.map((pt, i) => (
              <div key={i} className="flex gap-5 items-start">
                <div
                  className="shrink-0 w-px self-stretch mt-1"
                  style={{ backgroundColor: `${exp.color}18` }}
                />

                <div>
                  <p
                    className="text-sm font-medium mb-1.5"
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                      color: exp.color,
                      opacity: 0.9,
                      letterSpacing: "0.01em",
                    }}
                  >
                    {pt.label}
                  </p>
                  <p
                    className="text-sm text-cream/45 leading-relaxed"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    {pt.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
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
    <section id="experience" className="py-32 px-6 relative overflow-hidden">
      <div
        className="absolute left-0 top-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(200,115,122,0.03) 0%, transparent 70%)",
          transform: "translateY(-50%)",
        }}
      />

      <div className="max-w-5xl mx-auto" ref={ref}>
        <div
          className={`flex items-center gap-4 mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span
            className="text-xs text-rose tracking-widest uppercase"
            style={{ fontFamily: "DM Mono, monospace", letterSpacing: "0.3em" }}
          >
            Experience
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-rose/25 to-transparent" />
        </div>

        <div
          className={`mb-14 transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <h2 style={{ fontFamily: "Cormorant Garamond, serif" }}>
            <span
              className="text-cream"
              style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 600 }}
            >
              Where I've{" "}
            </span>
            <span
              className="text-gradient-rose"
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 300,
                fontStyle: "italic",
              }}
            >
              Made Impact
            </span>
          </h2>
        </div>

        <div className="space-y-5">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
