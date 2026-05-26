import { Eye, Lock, UserCheck, PenLine, Lightbulb, Globe, Mail, Calendar } from "lucide-react";

const reasons = [
  {
    icon: Eye,
    title: "Strong Attention to Detail",
    desc: "Every invoice, report, and record is reviewed for accuracy before submission — errors are caught before they become problems.",
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: Lock,
    title: "Handles Confidential Information Professionally",
    desc: "Years of experience managing sensitive financial data, payroll records, and contracts with full discretion.",
    color: "text-teal-600 bg-teal-50",
  },
  {
    icon: UserCheck,
    title: "Works Independently with Minimal Supervision",
    desc: "Fully remote-capable with a track record of self-managing workloads, meeting deadlines, and proactively communicating progress.",
    color: "text-amber-600 bg-amber-50",
  },
  {
    icon: PenLine,
    title: "Strong Written Communication Skills",
    desc: "Clear and professional in all written correspondence — from client emails to internal reports and contract documents.",
    color: "text-rose-600 bg-rose-50",
  },
  {
    icon: Lightbulb,
    title: "Fast Learner and Adaptable",
    desc: "Quickly adopted multiple ERP systems (Zoho Books, Exact Online, Productive) and adapted to different team structures and regions.",
    color: "text-purple-600 bg-purple-50",
  },
  {
    icon: Globe,
    title: "Experienced in Remote International Support",
    desc: "Supported operations across the Philippines, Netherlands, and Middle East — comfortable with time zone differences and cross-cultural teams.",
    color: "text-indigo-600 bg-indigo-50",
  },
];

export default function WhyMe() {
  return (
    <section id="whyme" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-8 h-1 bg-indigo-500 rounded-full inline-block" />
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-widest">Why Work With Me</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f4a] mb-4">
              The Value I<br /><span className="text-teal-500">Bring to Your Team</span>
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Beyond the job description — here's why hiring managers and international clients choose to work with me.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3">
              <a
                href="mailto:kimberlyamurao60@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-[#0f1f4a] hover:bg-[#1d4ed8] text-white text-sm font-semibold px-6 py-3 rounded-full transition-all shadow-lg w-full md:w-auto"
              >
                <Mail size={15} /> Get In Touch
              </a>
              <a
                href="https://calendly.com/kimberlyamurao60"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-white text-sm font-semibold px-6 py-3 rounded-full transition-all shadow-lg shadow-teal-500/20 w-full md:w-auto"
              >
                <Calendar size={15} /> Book a Meeting
              </a>
            </div>

            {/* Calendly inline hint */}
            <div className="mt-4 p-4 bg-teal-50 border border-teal-100 rounded-2xl">
              <p className="text-teal-700 text-xs font-medium flex items-center gap-2">
                <Calendar size={13} />
                Schedule a free 30-min intro call via Calendly
              </p>
              <p className="text-teal-500 text-xs mt-1">Available for timezone-friendly slots (PH / EU / ME)</p>
            </div>
          </div>

          <div className="grid gap-4">
            {reasons.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="flex gap-4 p-4 bg-white rounded-2xl border border-slate-100 hover:shadow-sm transition-all">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${color}`}>
                  <Icon size={18} />
                </div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm mb-0.5">{title}</p>
                  <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}