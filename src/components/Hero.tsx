"use client";

import { useEffect, useState, useRef } from "react";
import Button from "@mui/material/Button";

const roles = [
  "Frontend Engineer",
  "React Specialist",
  "TypeScript Expert",
  "UI/UX Craftsperson",
  "Performance Optimizer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [visible, setVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;
    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        80,
      );
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }[] = [];
    for (let i = 0; i < 55; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.4,
        opacity: Math.random() * 0.35 + 0.08,
      });
    }
    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,115,122,${p.opacity})`;
        ctx.fill();
      });
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach((q) => {
          const dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(200,115,122,${0.05 * (1 - dist / 110)})`;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(animate);
    };
    animate();
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(200,115,122,0.07) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(155,107,155,0.05) 0%, transparent 70%)",
          }}
        />
      </div>
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-rose/15 to-transparent hidden lg:block" />
      <div className="absolute right-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-rose/15 to-transparent hidden lg:block" />

      <div
        className={`relative z-10 text-center px-6 max-w-5xl mx-auto transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* <div
          className="text-cream/20 tracking-[0.5em] uppercase mb-3"
          style={{ fontFamily: "DM Sans, sans-serif", fontSize: "12px" }}
        >
          Nida Tarannum
        </div> */}
        <h1
          style={{ fontFamily: "Cormorant Garamond, serif" }}
          className="mb-3 leading-none"
        >
          <span
            className="block text-cream"
            style={{
              fontSize: "clamp(60px, 12vw, 130px)",
              lineHeight: 0.9,
              fontWeight: 600,
            }}
          >
            Frontend
          </span>
          <span
            className="block text-gradient-rose"
            style={{
              fontSize: "clamp(60px, 12vw, 130px)",
              lineHeight: 0.95,
              fontWeight: 300,
              fontStyle: "italic",
            }}
          >
            Engineer
          </span>
        </h1>
        <div className="mt-8 mb-10 h-10 flex items-center justify-center">
          <span
            className="text-rose-light text-lg md:text-xl"
            style={{ fontFamily: "DM Mono, monospace" }}
          >
            &gt; {displayed}
            <span className="animate-blink text-rose ml-0.5">_</span>
          </span>
        </div>
        <p
          className="text-cream/45 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          4+ years crafting responsive, accessible, high-performance web
          experiences. Turning product visions into pixel-perfect reality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            href="#experience"
            variant="contained"
            sx={{
              bgcolor: "#C8737A",
              color: "#0D0B0E",
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontSize: "12px",
              px: 4,
              py: 1.5,
              borderRadius: 0,
              "&:hover": {
                bgcolor: "#E8A0A6",
                transform: "translateY(-2px)",
                boxShadow: "0 10px 30px rgba(200,115,122,0.35)",
              },
              transition: "all 0.3s ease",
            }}
          >
            View My Work
          </Button>
          <Button
            href="#contact"
            variant="outlined"
            sx={{
              borderColor: "rgba(240,230,211,0.25)",
              color: "#F0E6D3",
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 400,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontSize: "12px",
              px: 4,
              py: 1.5,
              borderRadius: 0,
              "&:hover": {
                borderColor: "#C8737A",
                color: "#C8737A",
                backgroundColor: "transparent",
                transform: "translateY(-2px)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Get In Touch
          </Button>
        </div>
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto border-t border-rose/10 pt-10">
          {[
            { num: "4+", label: "Years Experience" },
            { num: "$30K", label: "Annual Savings" },
            { num: "80%", label: "Payment Volume" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl md:text-4xl text-gradient-rose mb-1"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontWeight: 600,
                }}
              >
                {stat.num}
              </div>
              <div
                className="text-xs text-cream/25 tracking-widest uppercase"
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  letterSpacing: "0.15em",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span
          className="text-cream uppercase"
          style={{
            letterSpacing: "0.2em",
            fontSize: "10px",
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-rose to-transparent animate-pulse" />
      </div>
    </section>
  );
}
