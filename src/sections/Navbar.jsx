import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "samples", label: "Work Samples" },
  { id: "tools", label: "Tools" },
  { id: "whyme", label: "Why Me" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = navItems.map((n) => document.getElementById(n.id));
      const current = sections.find((s) => {
        if (!s) return false;
        const rect = s.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom > 100;
      });
      if (current) setActive(current.id);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur shadow-md" : "bg-transparent"}`}>
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <button onClick={() => scrollTo("home")} className="text-sm font-extrabold text-[#0f1f4a] tracking-tight hover:text-teal-600 transition-colors">
          KA<span className="text-teal-500">.</span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((n) => (
            <li key={n.id}>
              <button
                onClick={() => scrollTo(n.id)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all ${
                  active === n.id
                    ? "bg-[#0f1f4a] text-white"
                    : `${scrolled ? "text-slate-600 hover:text-blue-700 hover:bg-blue-50" : "text-white/80 hover:text-white hover:bg-white/10"}`
                }`}
              >
                {n.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          className={`lg:hidden p-2 rounded-lg ${scrolled ? "text-slate-700" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg px-6 py-4">
          <ul className="space-y-1">
            {navItems.map((n) => (
              <li key={n.id}>
                <button
                  onClick={() => scrollTo(n.id)}
                  className={`w-full text-left text-sm font-medium px-3 py-2 rounded-lg transition-all ${
                    active === n.id ? "bg-[#0f1f4a] text-white" : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {n.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}