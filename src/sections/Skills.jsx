import { CalendarDays, Mail, FolderOpen, FileText, BookOpen, BarChart2, Receipt, Wallet, Monitor, Table2, Database, Users } from "lucide-react";

const categories = [
  {
    title: "Administrative",
    color: "bg-blue-50 text-blue-700 border-blue-100",
    accent: "bg-blue-600",
    titleColor: "text-blue-700",
    skills: [
      { icon: CalendarDays, label: "Calendar Management", yrs: "3 yrs" },
      { icon: Mail, label: "Email Management", yrs: "5 yrs" },
      { icon: FolderOpen, label: "Project Coordination", yrs: "2 yrs" },
      { icon: FileText, label: "Contract Creation", yrs: "2 yrs" },
      { icon: Users, label: "Customer & Supplier Interaction", yrs: "5 yrs" },
      { icon: Database, label: "Credit Card Expense Mgmt", yrs: "2 yrs" },
    ],
  },
  {
    title: "Finance",
    color: "bg-teal-50 text-teal-700 border-teal-100",
    accent: "bg-teal-500",
    titleColor: "text-teal-700",
    skills: [
      { icon: BookOpen, label: "Bookkeeping", yrs: "6 yrs" },
      { icon: Receipt, label: "Accounts Receivable", yrs: "4 yrs" },
      { icon: Wallet, label: "Accounts Payable", yrs: "4 yrs" },
      { icon: BarChart2, label: "Account Reconciliation", yrs: "5 yrs" },
      { icon: Users, label: "Payroll Processing", yrs: "2 yrs" },
      { icon: FileText, label: "Invoice Processing", yrs: "4 yrs" },
      { icon: BarChart2, label: "Cash Flow Management", yrs: "2 yrs" },
    ],
  },
  {
    title: "Systems & Tools",
    color: "bg-amber-50 text-amber-700 border-amber-100",
    accent: "bg-amber-500",
    titleColor: "text-amber-700",
    skills: [
      { icon: Monitor, label: "Google Suite Admin", yrs: "2 yrs" },
      { icon: Monitor, label: "Microsoft Office 365 Admin", yrs: "2 yrs" },
      { icon: Table2, label: "Finance Tools Owner & Admin", yrs: "2 yrs" },
      { icon: Table2, label: "JAMF Administrator", yrs: "1 yr" },
      { icon: Table2, label: "Slack / Teams / Zoom", yrs: "5 yrs" },
      { icon: Table2, label: "Project Management Tools", yrs: "2 yrs" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-8 h-1 bg-amber-400 rounded-full inline-block" />
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-widest">Core Skills</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f4a] mb-12">
          What I Bring to the Table
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className={`rounded-2xl border p-6 ${cat.color}`}>
              <div className="flex items-center gap-3 mb-5">
                <span className={`w-2 h-6 rounded-full ${cat.accent}`} />
                <h3 className={`font-bold text-lg ${cat.titleColor}`}>{cat.title}</h3>
              </div>
              <ul className="space-y-3">
                {cat.skills.map(({ icon: Icon, label, yrs }) => (
                  <li key={label} className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Icon size={14} className="opacity-60 flex-shrink-0" />
                      <span className="text-sm font-medium">{label}</span>
                    </div>
                    {yrs && (
                      <span className="text-xs bg-white/70 px-2 py-0.5 rounded-full font-medium opacity-70 flex-shrink-0">
                        {yrs}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}