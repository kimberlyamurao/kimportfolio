import { useState } from "react";
import { Briefcase, Globe, Monitor } from "lucide-react";

const countries = [
  { flag: "🇳🇱", name: "Netherlands", desc: "Finance & business operations support" },
  { flag: "🇦🇪", name: "Middle East", desc: "Remote finance analyst role" },
  { flag: "🇵🇭", name: "Philippines", desc: "Local & remote admin support" },
];

const workstationItems = [
  { icon: "💻", label: "Desktop", desc: "Primary work device" },
  { icon: "🖥️", label: "Dual Monitor", desc: "Extended display setup" },
  { icon: "🎧", label: "Headset", desc: "For calls & meetings" },
  { icon: "📶", label: "Stable Internet", desc: "Reliable remote connection" },
  { icon: "🔒", label: "Secure VPN", desc: "Data privacy & compliance" },
  { icon: "☁️", label: "Cloud Tools", desc: "Google Drive, OneDrive" },
];

export default function About() {
  const [hoveredStat, setHoveredStat] = useState(null);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-8 h-1 bg-teal-500 rounded-full inline-block" />
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest">About Me</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f4a] mb-6 leading-snug">
              Finance & Operations<br />
              <span className="text-teal-500">Professional</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-base mb-6">
              I specialize in <strong className="text-[#1e3a8a]">administrative support</strong>, finance operations, bookkeeping,
              reporting, and process coordination. I have experience supporting{" "}
              <strong className="text-[#1e3a8a]">international operations</strong> across the Netherlands and the Middle East,
              managing multiple responsibilities while maintaining accuracy and organization.
            </p>
            <p className="text-slate-600 leading-relaxed text-base">
              I enjoy improving workflows, keeping systems organized, and ensuring day-to-day operations run
              efficiently — whether working with a local team or supporting a fully remote international setup.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {/* Years Experience */}
            <div className="flex items-center gap-5 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-teal-200 hover:shadow-sm transition-all">
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                <Briefcase size={22} className="text-teal-600" />
              </div>
              <div>
                <p className="text-2xl font-extrabold text-[#0f1f4a]">6+</p>
                <p className="text-slate-500 text-sm">Years Experience</p>
              </div>
            </div>

            {/* Countries Supported - with hover tooltip */}
            <div
              className="relative flex items-center gap-5 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-teal-200 hover:shadow-sm transition-all cursor-pointer group"
              onMouseEnter={() => setHoveredStat("countries")}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                <Globe size={22} className="text-teal-600" />
              </div>
              <div>
                <p className="text-2xl font-extrabold text-[#0f1f4a]">3+</p>
                <p className="text-slate-500 text-sm">Countries Supported <span className="text-teal-500 text-xs">(hover)</span></p>
              </div>

              {/* Tooltip */}
              {hoveredStat === "countries" && (
                <div className="absolute left-0 top-full mt-2 z-20 w-full bg-white rounded-2xl shadow-xl border border-slate-100 p-4 animate-fade-in">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Countries Supported</p>
                  <div className="flex flex-col gap-2">
                    {countries.map((c) => (
                      <div key={c.name} className="flex items-center gap-3 p-2 rounded-xl bg-slate-50">
                        <span className="text-2xl">{c.flag}</span>
                        <div>
                          <p className="font-semibold text-slate-800 text-sm">{c.name}</p>
                          <p className="text-slate-400 text-xs">{c.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Remote Ready - with hover workstation */}
            <div
              className="relative flex items-center gap-5 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-teal-200 hover:shadow-sm transition-all cursor-pointer group"
              onMouseEnter={() => setHoveredStat("remote")}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                <Monitor size={22} className="text-teal-600" />
              </div>
              <div>
                <p className="text-2xl font-extrabold text-[#0f1f4a]">100%</p>
                <p className="text-slate-500 text-sm">Remote-Ready <span className="text-teal-500 text-xs">(hover)</span></p>
              </div>

              {/* Workstation tooltip */}
              {hoveredStat === "remote" && (
                <div className="absolute left-0 top-full mt-2 z-20 w-full bg-white rounded-2xl shadow-xl border border-slate-100 p-4">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">My Workstation</p>
                  <div className="grid grid-cols-2 gap-2">
                    {workstationItems.map((item) => (
                      <div key={item.label} className="flex items-center gap-2 p-2 rounded-xl bg-slate-50">
                        <span className="text-xl">{item.icon}</span>
                        <div>
                          <p className="font-semibold text-slate-800 text-xs">{item.label}</p>
                          <p className="text-slate-400 text-xs">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0f1f4a] to-[#1d4ed8] text-white">
              <p className="text-sm font-medium text-blue-200 mb-1">Currently working as</p>
              <p className="font-bold text-base">Senior Business Support</p>
              <p className="text-blue-300 text-sm">International Operations · Netherlands</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}