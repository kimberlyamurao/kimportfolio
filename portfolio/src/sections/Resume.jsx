import { Download, Mail, Phone, MapPin, GraduationCap, Briefcase, Star } from "lucide-react";

const jobHistory = [
  {
    role: "Senior Business Support (International Operations)",
    company: "Private Company — Netherlands",
    period: "Dec 2025 – Present",
    points: [
      "End-to-end business, finance, and administrative support including office operations and contract drafting",
      "ERP-based accounting, financial analysis, and reporting",
      "Project cost processing, import sheets, and financial tracking",
      "Timesheet validation for payroll, billing, and financial reporting",
      "Drafted and coordinated client contracts for internal review and approval",
    ],
  },
  {
    role: "Remote Finance Analyst (International Operations)",
    company: "Private Company — Netherlands & Middle East",
    period: "Jul 2024 – Dec 2025",
    points: [
      "Full-cycle finance and admin operations for multi-entity companies (NL & ME)",
      "Invoice processing, expense management, and revenue tracking",
      "Cash flow monitoring and monthly financial reporting",
      "Led accounts receivable — client coordination and collections",
      "Administered Zoho Books, Exact Online, and payroll systems",
    ],
  },
  {
    role: "Administrative Assistant",
    company: "Emapta Philippines Inc. — Makati",
    period: "Aug 2023 – Jun 2024",
    points: [
      "Accounts payable and receivable management (end-to-end)",
      "Payroll processing and BIR compliance (monthly, quarterly, annual)",
      "Credit card expense reconciliation and monthly summary reports",
      "Petty cash fund management and weekly audits",
    ],
  },
  {
    role: "Admin & Accounts Payable Staff",
    company: "Polyfame Industries Inc. — Calamba, Laguna",
    period: "Feb 2021 – Aug 2023",
    points: [
      "Expense control, 3-way PO matching, supplier document validation",
      "Payroll processing and manual cheque encashment",
      "Statement of account creation and BIR reports",
    ],
  },
  {
    role: "Accounting Clerk",
    company: "Groundscape Management Inc. — Laguna",
    period: "Oct 2020 – Feb 2021",
    points: [
      "QuickBooks data entry and check/cash voucher processing",
      "Month-end report assistance and payroll record verification",
    ],
  },
  {
    role: "Administration Support",
    company: "AOBS (Mead Johnson) — Makati",
    period: "Mar 2019 – Feb 2020",
    points: [
      "Day-to-day account balance monitoring and order processing",
      "Monthly AR report support and payment allocation",
    ],
  },
];

const skills = [
  "Bookkeeping (6 yrs)", "Accounts Payable (4 yrs)", "Accounts Receivable (4 yrs)",
  "Invoice Processing (4 yrs)", "Financial Reporting", "Payroll Processing (2 yrs)",
  "Cash Flow Management", "Calendar Management", "Contract Creation (2 yrs)",
  "Google Workspace Admin (2 yrs)", "MS Office 365 Admin (2 yrs)", "QuickBooks",
  "Zoho Books", "Exact Online", "Slack / Teams / Zoom (5 yrs)",
  "Account Reconciliation (5 yrs)", "Credit Card Expense Mgmt", "ERP Tools",
];

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-8 h-1 bg-slate-600 rounded-full inline-block" />
          <span className="text-slate-600 font-semibold text-sm uppercase tracking-widest">Resume</span>
        </div>

        <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f4a]">Full Resume</h2>
          <a
            href="mailto:kimberlyamurao60@gmail.com?subject=Resume Request"
            className="flex items-center gap-2 bg-[#0f1f4a] hover:bg-[#1d4ed8] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all"
          >
            <Download size={14} /> Request CV
          </a>
        </div>

        {/* Resume Card */}
        <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          {/* Header */}
          <div className="bg-gradient-to-br from-[#0f1f4a] to-[#1d4ed8] px-8 py-8">
            <h1 className="text-3xl font-extrabold text-white mb-1">Kimberly Amurao</h1>
            <p className="text-blue-200 font-medium mb-4">Administrative · Finance · Operations Support Specialist</p>
            <div className="flex flex-wrap gap-4 text-xs text-blue-200">
              <span className="flex items-center gap-1"><Mail size={11} /> kimberlyamurao60@gmail.com</span>
              <span className="flex items-center gap-1"><Phone size={11} /> +63 961 811 4584</span>
              <span className="flex items-center gap-1"><MapPin size={11} /> Calamba, Laguna, Philippines</span>
            </div>
          </div>

          <div className="p-8 space-y-8">
            {/* Profile */}
            <div>
              <h3 className="flex items-center gap-2 text-sm font-bold text-[#0f1f4a] uppercase tracking-widest mb-3 border-b border-slate-100 pb-2">
                <Star size={14} className="text-amber-500" /> Profile
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Analytical Finance Operations Specialist with a strong background in invoice management, receivables oversight,
                payroll administration, and monthly financial reporting. Experienced in supporting multi-entity operations across
                the UAE and Netherlands, ensuring compliance, timely payments, and clear financial communication. Proficient in
                Zoho Books, Exact Online, Productive and Simplicate with a proven ability to optimize workflows and maintain
                financial integrity.
              </p>
            </div>

            {/* Experience */}
            <div>
              <h3 className="flex items-center gap-2 text-sm font-bold text-[#0f1f4a] uppercase tracking-widest mb-4 border-b border-slate-100 pb-2">
                <Briefcase size={14} className="text-blue-600" /> Experience
              </h3>
              <div className="space-y-6">
                {jobHistory.map((job, i) => (
                  <div key={i}>
                    <div className="flex flex-wrap justify-between gap-1 mb-1">
                      <span className="font-semibold text-slate-800 text-sm">{job.role}</span>
                      <span className="text-xs text-slate-400 font-medium">{job.period}</span>
                    </div>
                    <p className="text-teal-700 text-xs font-medium mb-2">{job.company}</p>
                    <ul className="space-y-1">
                      {job.points.map((p, j) => (
                        <li key={j} className="text-slate-500 text-xs flex items-start gap-2">
                          <span className="text-teal-400 mt-1">•</span> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="flex items-center gap-2 text-sm font-bold text-[#0f1f4a] uppercase tracking-widest mb-3 border-b border-slate-100 pb-2">
                <GraduationCap size={14} className="text-teal-600" /> Education
              </h3>
              <div className="flex justify-between flex-wrap gap-1">
                <div>
                  <p className="font-semibold text-slate-800 text-sm">Bachelor of Science in Accountancy</p>
                  <p className="text-slate-500 text-xs">St. John Colleges</p>
                </div>
                <span className="text-xs text-slate-400 font-medium">2014 – 2018</span>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="flex items-center gap-2 text-sm font-bold text-[#0f1f4a] uppercase tracking-widest mb-3 border-b border-slate-100 pb-2">
                <Star size={14} className="text-amber-500" /> Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full font-medium">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
