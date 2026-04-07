export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span
            className="text-2xl text-cream/30"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontStyle: "italic",
            }}
          >
            NT
          </span>
          <span
            className="text-xs text-cream/20"
            style={{ fontFamily: "DM Mono, monospace" }}
          >
            — Nida Tarannum
          </span>
        </div>

        <div
          className="text-xs text-cream/20"
          style={{ fontFamily: "DM Mono, monospace" }}
        >
          © 2026 Nida Tarannum. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
