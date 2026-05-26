import { Briefcase, MapPin, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    role: "Senior Business Support",
    subtitle: "International Operations",
    company: "Private Company",
    location: "Netherlands",
    period: "Dec 2025 – Present",
    color: "from-[#0f1f4a] to-[#1d4ed8]",
    badge: "Current",
    badgeColor: "bg-teal-400 text-slate-900",
    points: [
      "End-to-end business, finance, and administrative support including office operations and contract drafting",
      "ERP-based accounting, financial analysis, and reporting with actionable insights for management",
      "Project cost processing, import sheets, and financial tracking for budgeting and operational efficiency",
      "Timesheet validation for payroll, billing, and financial reporting accuracy",
      "Drafted and coordinated client contracts ensuring alignment with business and financial terms",
      "Continuously improved financial and operational processes to enhance efficiency and control",
    ],
  },
  {
    role: "Remote Finance Analyst",
    subtitle: "International Operations",
    company: "Private Company",
    location: "Netherlands & Middle East",
    period: "Jul 2024 – Dec 2025",
    color: "from-teal-600 to-teal-500",
    badge: null,
    points: [
      "Full-cycle finance and administrative operations for multi-entity companies (NL & ME)",
      "Invoice processing, expense management, and revenue tracking with accuracy in financial documentation",
      "Cash flow monitoring and monthly financial reporting supporting management decisions",
      "Led accounts receivable processes — client coordination, collections, and balance resolution",
      "Budgeting and project financial tracking using ERP tools (Productive), improving cost control",
      "Administered payroll, contracts, and accounting systems (Zoho Books, Exact Online)",
    ],
  },
  {
    role: "Administrative Assistant",
    subtitle: "",
    company: "Emapta Philippines Inc.",
    location: "Makati, Philippines",
    period: "Aug 2023 – Jun 2024",
    color: "from-blue-500 to-blue-600",
    badge: null,
    points: [
      "Accounts payable and receivable management (end-to-end process)",
      "Payroll processing, BIR compliance reports (monthly, quarterly, annual)",
      "Reconciled credit card expenses and prepared monthly summary reports",
      "Petty cash fund management and weekly audits of supplies and vouchers",
    ],
  },
  {
    role: "Admin & Accounts Payable Staff",
    subtitle: "",
    company: "Polyfame Industries Inc.",
    location: "Calamba, Laguna",
    period: "Feb 2021 – Aug 2023",
    color: "from-amber-500 to-amber-400",
    badge: null,
    points: [
      "Expense payment control, supplier document validation, and 3-way PO matching",
      "Payroll processing including manual cheque encashment and employee payments",
      "Supplier payment scheduling and discrepancy communication",
      "Generating monthly reports of expenses and collections",
    ],
  },
  {
    role: "Accounting Clerk",
    subtitle: "",
    company: "Groundscape Management Inc.",
    location: "Laguna, Philippines",
    period: "Oct 2020 – Feb 2021",
    color: "from-slate-500 to-slate-600",
    badge: null,
    points: [
      "Processed check and cash voucher transactions",
      "Data entry in QuickBooks ensuring accuracy of records",
      "Assisted in month-end reports and payroll verification",
    ],
  },
  {
    role: "Administration Support",
    subtitle: "",
    company: "AOBS (Mead Johnson)",
    location: "Makati, Philippines",
    period: "Mar 2019 – Feb 2020",
    color: "from-rose-500 to-rose-400",
    badge: null,
    points: [
      "Day-to-day account balance monitoring and order processing",
      "Floater analysis reconciliation and payment allocation",
      "Supported month-end accounts receivable reports",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-8 h-1 bg-blue-600 rounded-full inline-block" />
          <span className="text-blue-700 font-semibold text-sm uppercase tracking-widest">Experience</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f4a] mb-12">
          Professional Journey
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-100 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative md:pl-16">
                {/* Timeline dot */}
                <div className={`absolute left-3.5 top-6 w-5 h-5 rounded-full bg-gradient-to-br ${exp.color} shadow-md hidden md:flex items-center justify-center`}>
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 hover:shadow-md transition-shadow border border-slate-100">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-[#0f1f4a] text-lg">{exp.role}</h3>
                        {exp.badge && (
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${exp.badgeColor}`}>
                            {exp.badge}
                          </span>
                        )}
                      </div>
                      {exp.subtitle && (
                        <p className="text-teal-600 text-sm font-medium">{exp.subtitle}</p>
                      )}
                      <div className="flex items-center gap-4 mt-1 flex-wrap">
                        <span className="flex items-center gap-1 text-slate-500 text-xs">
                          <Briefcase size={11} /> {exp.company}
                        </span>
                        <span className="flex items-center gap-1 text-slate-500 text-xs">
                          <MapPin size={11} /> {exp.location}
                        </span>
                        <span className="flex items-center gap-1 text-slate-500 text-xs">
                          <Calendar size={11} /> {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-600 text-sm">
                        <ChevronRight size={13} className="text-teal-500 mt-0.5 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
