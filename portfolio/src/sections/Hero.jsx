import { Mail, Phone, MapPin, Link, Download, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-[#0f1f4a] via-[#1e3a8a] to-[#1d4ed8]"
    >
      {/* Decorative circles */}
      <div className="absolute top-[-80px] right-[-80px] w-72 h-72 rounded-full bg-white/5" />
      <div className="absolute bottom-[-60px] left-[-60px] w-56 h-56 rounded-full bg-teal-400/10" />
      <div className="absolute top-1/2 right-10 w-4 h-4 rounded-full bg-amber-400/50" />
      <div className="absolute top-1/3 left-16 w-2 h-2 rounded-full bg-teal-400/60" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center shadow-2xl ring-4 ring-white/20">
            <span className="text-5xl md:text-6xl font-bold text-white select-none">KA</span>
          </div>
        </div>

        {/* Content */}
        <div className="text-center md:text-left">
          <div className="inline-block bg-teal-400/20 text-teal-300 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Open to Remote Opportunities
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2 leading-tight tracking-tight">
            Kimberly<br />
            <span className="text-teal-400">Amurao</span>
          </h1>
          <p className="text-blue-200 font-medium text-lg mb-4">
            Administrative · Finance · Operations Support Specialist
          </p>
          <p className="text-blue-100/80 text-sm max-w-xl leading-relaxed mb-8">
            Detail-oriented Administrative and Finance Professional with{" "}
            <span className="text-amber-400 font-semibold">6+ years of experience</span> supporting
            business operations, bookkeeping, accounts management, reporting, and remote
            administrative workflows for local and international teams.
          </p>

          {/* Contact chips */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
            <a href="mailto:kimberlyamurao60@gmail.com" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs px-3 py-2 rounded-full transition-all">
              <Mail size={13} /> kimberlyamurao60@gmail.com
            </a>
            <a href="tel:+639618114584" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs px-3 py-2 rounded-full transition-all">
              <Phone size={13} /> +63 961 811 4584
            </a>
            <span className="flex items-center gap-2 bg-white/10 text-white text-xs px-3 py-2 rounded-full">
              <MapPin size={13} /> Calamba, Laguna, Philippines
            </span>
            <a href="#" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs px-3 py-2 rounded-full transition-all">
              <Link size={13} /> LinkedIn
            </a>
          </div>

          {/* CTA */}
          <div className="flex gap-3 justify-center md:justify-start">
            <a
              href="#resume"
              onClick={(e) => { e.preventDefault(); document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" }); }}
              className="bg-teal-400 hover:bg-teal-300 text-slate-900 text-sm font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-all shadow-lg shadow-teal-400/30"
            >
              <Download size={15} /> View Resume
            </a>
            <a
              href="#about"
              onClick={(e) => { e.preventDefault(); document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }); }}
              className="border border-white/30 text-white hover:bg-white/10 text-sm font-medium px-6 py-3 rounded-full flex items-center gap-2 transition-all"
            >
              Learn More <ArrowDown size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <ArrowDown size={18} className="text-white/40" />
      </div>
    </section>
  );
}
