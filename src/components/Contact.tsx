"use client";

import { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";

export default function Contact() {
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
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center bottom, rgba(201,168,76,0.05) 0%, transparent 60%)",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section label */}
        <div
          className={`flex items-center gap-4 mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span
            className="text-xs text-rose tracking-widest uppercase"
            style={{ fontFamily: "DM Mono, monospace", letterSpacing: "0.3em" }}
          >
            Contact
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-rose/30 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div
            className={`transition-all duration-1000 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <h2
              className="mb-8"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              <span
                className="block text-cream"
                style={{
                  fontSize: "clamp(36px, 5vw, 64px)",
                  fontWeight: 600,
                  lineHeight: 1.1,
                }}
              >
                Let's build
              </span>
              <span
                className="block text-gradient-rose"
                style={{
                  fontSize: "clamp(36px, 5vw, 64px)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  lineHeight: 1.1,
                }}
              >
                something great.
              </span>
            </h2>

            <p
              className="text-cream/50 leading-relaxed mb-10 max-w-md"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              I'm open to new opportunities, interesting projects, and great
              conversations about frontend engineering, performance, and design
              systems. My inbox is always open.
            </p>

            {/* Contact links */}
            <div className="space-y-4">
              {[
                {
                  icon: "✉",
                  label: "Email",
                  value: "nida.tarannum001@gmail.com",
                  href: "mailto:nida.tarannum001@gmail.com",
                  color: "#C8737A",
                },
                {
                  icon: "☎",
                  label: "Phone",
                  value: "+91 9193461794",
                  href: "tel:+919193461794",
                  color: "#9B6B9B",
                },
                {
                  icon: "⌂",
                  label: "LinkedIn",
                  value: "linkedin.com/in/nida-tarannum",
                  href: "https://www.linkedin.com/in/nida-tarannum001/",
                  color: "#C8737A",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-5 p-4 border border-white/5 hover:border-white/10 transition-all duration-300 hover:bg-ink-light"
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center border text-lg shrink-0"
                    style={{
                      borderColor: `${item.color}40`,
                      color: item.color,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      className="text-xs text-cream/30 tracking-widest uppercase mb-0.5"
                      style={{
                        fontFamily: "DM Sans, sans-serif",
                        letterSpacing: "0.2em",
                        fontSize: "10px",
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="text-cream/70 text-sm group-hover:text-cream transition-colors"
                      style={{ fontFamily: "DM Mono, monospace" }}
                    >
                      {item.value}
                    </div>
                  </div>
                  <span className="ml-auto text-cream/20 group-hover:text-cream/50 transition-colors text-xl">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: CTA box */}
          <div
            className={`transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="border border-gold/20 bg-ink-light p-10 relative overflow-hidden">
              {/* Corner decoration */}
              <div
                className="absolute top-0 right-0 w-20 h-20"
                style={{
                  background:
                    "linear-gradient(225deg, rgba(201,168,76,0.1) 0%, transparent 60%)",
                }}
              />
              <div className="absolute top-0 right-0 w-px h-20 bg-gold/20" />
              <div className="absolute top-0 right-0 w-20 h-px bg-gold/20" />

              <div
                className="text-xs text-rose tracking-widest uppercase mb-6"
                style={{
                  fontFamily: "DM Mono, monospace",
                  letterSpacing: "0.3em",
                }}
              >
                Open to work
              </div>

              <h3
                className="text-cream mb-4"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "32px",
                  fontWeight: 600,
                }}
              >
                Currently exploring new opportunities
              </h3>

              <p
                className="text-cream/40 text-sm leading-relaxed mb-8"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Looking for a role where I can contribute to impactful products,
                collaborate with talented teams, and continue growing as an
                engineer.
              </p>

              {/* Availability */}
              <div className="flex items-center gap-3 mb-8 p-4 border border-mauve/20 bg-mauve/5">
                <div className="w-2 h-2 rounded-full bg-mauve animate-pulse" />
                <span
                  className="text-xs text-mauve tracking-widest"
                  style={{
                    fontFamily: "DM Mono, monospace",
                    letterSpacing: "0.15em",
                  }}
                >
                  Available for full-time roles
                </span>
              </div>

              <div className="flex gap-3 flex-wrap">
                <Button
                  href="mailto:nida.tarannum001@gmail.com"
                  variant="contained"
                  sx={{
                    bgcolor: "#C8737A",
                    color: "#0D0B0E",
                    fontFamily: "DM Sans, sans-serif",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontSize: "12px",
                    px: 4,
                    py: 1.5,
                    borderRadius: 0,
                    "&:hover": {
                      bgcolor: "#E8C97A",
                      boxShadow: "0 8px 24px rgba(201,168,76,0.3)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Send a Message
                </Button>
                <Button
                  href="https://linkedin.com"
                  target="_blank"
                  variant="outlined"
                  sx={{
                    borderColor: "rgba(245,240,232,0.2)",
                    color: "#F0E6D3",
                    fontFamily: "DM Sans, sans-serif",
                    fontWeight: 400,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontSize: "12px",
                    px: 4,
                    py: 1.5,
                    borderRadius: 0,
                    "&:hover": {
                      borderColor: "#C8737A",
                      color: "#C8737A",
                      backgroundColor: "transparent",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  LinkedIn
                </Button>
              </div>
            </div>

            {/* Fun facts */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { label: "Education", value: "B.Tech EE, ZHCET AMU" },
                { label: "CGPA", value: "9.0 / 10.0" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 border border-white/5 bg-ink-light/30"
                >
                  <div
                    className="text-xs text-cream/30 mb-1 tracking-widest uppercase"
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                      fontSize: "10px",
                      letterSpacing: "0.2em",
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    className="text-cream/70 text-sm"
                    style={{ fontFamily: "DM Mono, monospace" }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
