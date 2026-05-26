import { Briefcase, Globe, CheckCircle } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "6+", label: "Years Experience" },
  { icon: Globe, value: "3+", label: "Countries Supported" },
  { icon: CheckCircle, value: "100%", label: "Remote-Ready" },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
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
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-5 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-teal-200 hover:shadow-sm transition-all">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                  <Icon size={22} className="text-teal-600" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-[#0f1f4a]">{value}</p>
                  <p className="text-slate-500 text-sm">{label}</p>
                </div>
              </div>
            ))}
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
