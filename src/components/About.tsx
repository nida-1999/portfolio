"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(78,205,196,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span
            className="text-xs text-rose tracking-widest uppercase"
            style={{ fontFamily: "DM Mono, monospace", letterSpacing: "0.3em" }}
          >
            About
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-rose/30 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Text */}
          <div
            className={`transition-all duration-1000 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <h2
              className="mb-8 leading-tight"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              <span
                className="block text-cream/30 text-sm tracking-widest uppercase mb-2"
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  letterSpacing: "0.3em",
                  fontSize: "12px",
                }}
              >
                Who I Am
              </span>
              <span
                className="text-cream"
                style={{
                  fontSize: "clamp(40px, 5vw, 64px)",
                  fontWeight: 600,
                  lineHeight: 1.1,
                }}
              >
                Building the web,{" "}
              </span>
              <span
                className="text-gradient-rose"
                style={{
                  fontSize: "clamp(40px, 5vw, 64px)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  lineHeight: 1.1,
                }}
              >
                one pixel at a time.
              </span>
            </h2>

            <div
              className="space-y-5 text-cream/60 leading-relaxed"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              <p>
                I'm a Frontend Engineer with over 4 years of experience crafting
                responsive, accessible, and high-performance web applications.
              </p>
              <p>
                At <span className="text-rose font-medium">LeapScholar</span>,
                I've shipped impactful products — from real-time chat systems
                that saved $30K annually, to payment flows driving 80% of
                overall volume. I believe the best code is code that solves real
                problems elegantly.
              </p>
              <p>
                When I'm not writing TypeScript or obsessing over animation
                curves, I'm mentoring junior developers and advocating for
                clean, maintainable codebases in Agile teams.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: "Location", value: "Bengaluru, India" },
                { label: "Experience", value: "4+ Years" },
                { label: "Education", value: `B.Tech, ZHCET AMU` },
                { label: "CGPA", value: "9.0" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border-l-2 border-rose/20 pl-4"
                >
                  <div
                    className="text-xs text-cream/30 tracking-widest uppercase mb-1"
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                      letterSpacing: "0.2em",
                      fontSize: "10px",
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    className="text-cream/80 text-sm"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            {/* Abstract code block aesthetic */}
            <div className="relative">
              <div className="border border-rose/10 bg-ink-light p-8 relative overflow-hidden">
                {/* Top bar */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                  <span
                    className="ml-3 text-xs text-cream/20"
                    style={{ fontFamily: "DM Mono, monospace" }}
                  >
                    nida.profile.ts
                  </span>
                </div>

                <div
                  className="space-y-2 text-sm"
                  style={{ fontFamily: "DM Mono, monospace" }}
                >
                  <div>
                    <span className="text-mauve/80">const</span>{" "}
                    <span className="text-rose/80">profile</span>{" "}
                    <span className="text-cream/40">= {"{"}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-coral/80">name</span>
                    <span className="text-cream/40">:</span>{" "}
                    <span className="text-rose/60">"Nida Tarannum"</span>
                    <span className="text-cream/40">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-coral/80">role</span>
                    <span className="text-cream/40">:</span>{" "}
                    <span className="text-rose/60">"SDE II @ LeapScholar"</span>
                    <span className="text-cream/40">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-coral/80">yearsOfExp</span>
                    <span className="text-cream/40">:</span>{" "}
                    <span className="text-mauve/80">4</span>
                    <span className="text-cream/40">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-coral/80">passion</span>
                    <span className="text-cream/40">:</span>{" "}
                    <span className="text-rose/60">"crafting great UX"</span>
                    <span className="text-cream/40">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-coral/80">stack</span>
                    <span className="text-cream/40">: [</span>
                  </div>
                  <div className="pl-8">
                    <div className="">
                      <span className="text-rose/60">"Next.js"</span>
                      <span className="text-cream/40">,</span>{" "}
                      <span className="text-rose/60">"Tailwind"</span>
                    </div>
                    <span className="text-rose/60">"TypeScript"</span>
                    <span className="text-cream/40">,</span>{" "}
                    <span className="text-rose/60">"React"</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-cream/40">],</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-coral/80">mentors</span>
                    <span className="text-cream/40">:</span>{" "}
                    <span className="text-mauve/80">true</span>
                    <span className="text-cream/40">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-coral/80">openToWork</span>
                    <span className="text-cream/40">:</span>{" "}
                    <span className="text-mauve/80">true</span>
                  </div>
                  <div>
                    <span className="text-cream/40">{"}"}</span>
                  </div>
                </div>

                {/* Animated gradient border */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, transparent 40%, rgba(201,168,76,0.1) 100%)",
                  }}
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-mauve/10 border border-teal/30 px-4 py-3 backdrop-blur-sm">
                <div
                  className="text-xs text-mauve tracking-widest uppercase"
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    letterSpacing: "0.2em",
                    fontSize: "10px",
                  }}
                >
                  Currently at
                </div>
                <div
                  className="text-cream text-sm font-medium"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  LeapScholar
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
