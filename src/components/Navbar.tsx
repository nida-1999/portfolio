"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky black top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 backdrop-blur-md border-b border-rose/10"
          : "py-3 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="font-display text-2xl text-cream tracking-widest hover:text-rose transition-colors duration-300"
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontStyle: "italic",
          }}
        >
          NT
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative font-body text-sm tracking-widest text-cream/60 hover:text-cream uppercase transition-colors duration-300 group"
              style={{
                fontFamily: "DM Sans, sans-serif",
                letterSpacing: "0.15em",
              }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-rose transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          {/* <a
            href="mailto:nida.tarannum001@gmail.com"
            className="ml-4 px-5 py-2 border border-rose/50 text-rose text-sm tracking-widest uppercase hover:bg-rose hover:text-obsidian transition-all duration-300"
            style={{
              letterSpacing: "0.15em",
              fontFamily: "DM Sans, sans-serif",
            }}
          >
            Hire Me
          </a> */}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-px bg-cream transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-cream transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-cream transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 py-4 flex flex-col gap-4 bg-ink-light border-t border-rose/10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-cream/60 hover:text-rose text-sm tracking-widest uppercase transition-colors"
              style={{
                letterSpacing: "0.15em",
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
