import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { FileSpreadsheet, BarChart2, CalendarDays, FileText, GitBranch, CheckCircle2, Clock, AlertCircle } from "lucide-react";

const arData = [
  { invoice: "INV-2025-001", client: "TechCorp NL", due: "Jan 15", amount: "€4,200", status: "Paid" },
  { invoice: "INV-2025-002", client: "BuildEx UAE", due: "Jan 22", amount: "€7,800", status: "Overdue" },
  { invoice: "INV-2025-003", client: "LogiPro BV", due: "Feb 01", amount: "€2,500", status: "Pending" },
  { invoice: "INV-2025-004", client: "Delta ME LLC", due: "Feb 10", amount: "€5,100", status: "Paid" },
  { invoice: "INV-2025-005", client: "Vertex NL", due: "Feb 18", amount: "€3,350", status: "Pending" },
];

const statusStyle = {
  Paid: "bg-teal-100 text-teal-700",
  Overdue: "bg-red-100 text-red-700",
  Pending: "bg-amber-100 text-amber-700",
};

const expenseData = [
  { month: "Aug", total: 12400 },
  { month: "Sep", total: 9800 },
  { month: "Oct", total: 14200 },
  { month: "Nov", total: 11600 },
  { month: "Dec", total: 8900 },
  { month: "Jan", total: 13700 },
];

const pieData = [
  { name: "Salaries", value: 42 },
  { name: "Operations", value: 23 },
  { name: "Software", value: 15 },
  { name: "Travel", value: 12 },
  { name: "Other", value: 8 },
];
const PIE_COLORS = ["#1d4ed8", "#14b8a6", "#f59e0b", "#f43f5e", "#94a3b8"];

const calendarTasks = [
  { time: "8:00 AM", task: "Review overnight emails & flag urgent items", priority: "High", done: true },
  { time: "9:00 AM", task: "Invoice reconciliation — Netherlands entities", priority: "High", done: true },
  { time: "10:30 AM", task: "Catch-up call with finance lead", priority: "Medium", done: false },
  { time: "12:00 PM", task: "AR follow-ups — 3 outstanding invoices", priority: "High", done: false },
  { time: "2:00 PM", task: "Update expense tracker & upload receipts", priority: "Medium", done: false },
  { time: "3:30 PM", task: "Draft contract amendments for review", priority: "Low", done: false },
  { time: "5:00 PM", task: "EOD report to stakeholders", priority: "Medium", done: false },
];

const priorityStyle = {
  High: "bg-red-100 text-red-700",
  Medium: "bg-amber-100 text-amber-700",
  Low: "bg-blue-100 text-blue-700",
};

const weeklyReport = {
  revenue: 47800,
  collected: 38200,
  outstanding: 9600,
  budget: 52000,
  spent: 44300,
  variance: 7700,
};

const sopSteps = [
  {
    num: "01",
    title: "Receive Invoice",
    desc: "Vendor submits invoice via email or client portal. Log receipt date and assign reference number.",
    icon: FileText,
    color: "bg-blue-100 text-blue-700",
  },
  {
    num: "02",
    title: "Verify Details",
    desc: "Check PO match (3-way), validate vendor details, amounts, tax, and due dates.",
    icon: CheckCircle2,
    color: "bg-teal-100 text-teal-700",
  },
  {
    num: "03",
    title: "Enter into System",
    desc: "Record into Zoho Books / Exact Online. Attach supporting documents. Tag cost center.",
    icon: FileSpreadsheet,
    color: "bg-amber-100 text-amber-700",
  },
  {
    num: "04",
    title: "Approval Process",
    desc: "Route to department head for approval. Escalate exceptions. Confirm within 48 hrs.",
    icon: Clock,
    color: "bg-purple-100 text-purple-700",
  },
  {
    num: "05",
    title: "Payment Monitoring",
    desc: "Schedule payment per terms. Execute bank transfer. Mark as paid in system.",
    icon: BarChart2,
    color: "bg-rose-100 text-rose-700",
  },
  {
    num: "06",
    title: "Follow-Up",
    desc: "Confirm vendor receipt. File documentation. Flag any discrepancies for review.",
    icon: AlertCircle,
    color: "bg-slate-100 text-slate-700",
  },
];

const samples = [
  { id: "ar", icon: FileSpreadsheet, label: "AR Tracker", color: "text-blue-600 bg-blue-50" },
  { id: "expense", icon: BarChart2, label: "Expense Dashboard", color: "text-teal-600 bg-teal-50" },
  { id: "calendar", icon: CalendarDays, label: "Calendar & Tasks", color: "text-amber-600 bg-amber-50" },
  { id: "report", icon: FileText, label: "Weekly Report", color: "text-rose-600 bg-rose-50" },
  { id: "sop", icon: GitBranch, label: "Invoice SOP", color: "text-purple-600 bg-purple-50" },
];

export default function WorkSamples() {
  const [active, setActive] = useState("ar");

  return (
    <section id="samples" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-8 h-1 bg-rose-400 rounded-full inline-block" />
          <span className="text-rose-600 font-semibold text-sm uppercase tracking-widest">Work Samples</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f4a] mb-4">
          Proof of Work
        </h2>
        <p className="text-slate-500 text-sm mb-10">Interactive sample templates demonstrating real workflows and deliverables.</p>

        {/* Tab nav */}
        <div className="flex flex-wrap gap-2 mb-8">
          {samples.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                active === s.id
                  ? `${s.color} ring-2 ring-offset-1 ring-current shadow-sm`
                  : "bg-white text-slate-500 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <s.icon size={15} />
              {s.label}
            </button>
          ))}
        </div>

        {/* Panels */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 min-h-[400px]">

          {/* AR Tracker */}
          {active === "ar" && (
            <div>
              <h3 className="font-bold text-[#0f1f4a] text-lg mb-4 flex items-center gap-2">
                <FileSpreadsheet size={18} className="text-blue-600" /> Accounts Receivable Tracker
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      {["Invoice #", "Client", "Due Date", "Amount", "Status"].map((h) => (
                        <th key={h} className="text-left px-3 py-2.5 font-semibold text-slate-600 text-xs uppercase tracking-wide">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {arData.map((row, i) => (
                      <tr key={i} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                        <td className="px-3 py-3 font-mono text-xs text-blue-700 font-medium">{row.invoice}</td>
                        <td className="px-3 py-3 font-medium text-slate-700">{row.client}</td>
                        <td className="px-3 py-3 text-slate-500">{row.due}</td>
                        <td className="px-3 py-3 font-semibold text-slate-800">{row.amount}</td>
                        <td className="px-3 py-3">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${statusStyle[row.status]}`}>
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 flex gap-4 text-xs text-slate-500 flex-wrap">
                <span className="flex items-center gap-1"><span className="w-2 h-2 bg-teal-400 rounded-full" /> 2 Paid</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 bg-amber-400 rounded-full" /> 2 Pending</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 bg-red-400 rounded-full" /> 1 Overdue</span>
              </div>
            </div>
          )}

          {/* Expense Dashboard */}
          {active === "expense" && (
            <div>
              <h3 className="font-bold text-[#0f1f4a] text-lg mb-4 flex items-center gap-2">
                <BarChart2 size={18} className="text-teal-600" /> Expense Monitoring Dashboard
              </h3>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  { label: "Total (Last 6 Mo)", value: "€70,600", color: "bg-blue-50 text-blue-700" },
                  { label: "Highest Month", value: "€14,200", color: "bg-amber-50 text-amber-700" },
                  { label: "Avg Monthly", value: "€11,767", color: "bg-teal-50 text-teal-700" },
                ].map((s) => (
                  <div key={s.label} className={`rounded-xl p-4 ${s.color}`}>
                    <p className="text-xs font-medium opacity-70 mb-1">{s.label}</p>
                    <p className="text-2xl font-extrabold">{s.value}</p>
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase mb-3">Monthly Expenses (€)</p>
                  <ResponsiveContainer width="100%" height={180}>
                    <BarChart data={expenseData} barSize={24}>
                      <XAxis dataKey="month" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={(v) => `€${(v/1000).toFixed(0)}k`} />
                      <Tooltip formatter={(v) => `€${v.toLocaleString()}`} />
                      <Bar dataKey="total" fill="#14b8a6" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase mb-3">By Category</p>
                  <ResponsiveContainer width="100%" height={180}>
                    <PieChart>
                      <Pie data={pieData} cx="50%" cy="50%" innerRadius={45} outerRadius={70} dataKey="value" paddingAngle={3}>
                        {pieData.map((_, index) => (
                          <Cell key={index} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                        ))}
                      </Pie>
                      <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 11 }} />
                      <Tooltip formatter={(v) => `${v}%`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}

          {/* Calendar & Tasks */}
          {active === "calendar" && (
            <div>
              <h3 className="font-bold text-[#0f1f4a] text-lg mb-2 flex items-center gap-2">
                <CalendarDays size={18} className="text-amber-600" /> Daily Schedule & Task Management
              </h3>
              <p className="text-slate-500 text-xs mb-5">Tuesday, January 14 — Remote Finance Operations</p>
              <div className="space-y-2">
                {calendarTasks.map((t, i) => (
                  <div key={i} className={`flex items-start gap-4 p-3 rounded-xl border transition-all ${t.done ? "bg-slate-50 opacity-60 border-slate-100" : "bg-white border-slate-200 hover:border-amber-200"}`}>
                    <div className="text-xs font-mono text-slate-400 w-16 flex-shrink-0 pt-0.5">{t.time}</div>
                    <div className={`w-4 h-4 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center ${t.done ? "bg-teal-500" : "border-2 border-slate-300"}`}>
                      {t.done && <CheckCircle2 size={12} className="text-white" />}
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${t.done ? "line-through text-slate-400" : "text-slate-700"}`}>{t.task}</p>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-semibold flex-shrink-0 ${priorityStyle[t.priority]}`}>
                      {t.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Weekly Report */}
          {active === "report" && (
            <div>
              <h3 className="font-bold text-[#0f1f4a] text-lg mb-4 flex items-center gap-2">
                <FileText size={18} className="text-rose-600" /> Weekly Financial Report — Week 3, Jan 2025
              </h3>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  { label: "Revenue Invoiced", value: `€${weeklyReport.revenue.toLocaleString()}`, sub: "This week", color: "border-l-blue-500 bg-blue-50" },
                  { label: "Amount Collected", value: `€${weeklyReport.collected.toLocaleString()}`, sub: `${Math.round(weeklyReport.collected/weeklyReport.revenue*100)}% collection rate`, color: "border-l-teal-500 bg-teal-50" },
                  { label: "Outstanding", value: `€${weeklyReport.outstanding.toLocaleString()}`, sub: "Pending follow-up", color: "border-l-amber-500 bg-amber-50" },
                ].map((s) => (
                  <div key={s.label} className={`rounded-xl p-4 border-l-4 ${s.color}`}>
                    <p className="text-xs text-slate-500 font-medium mb-1">{s.label}</p>
                    <p className="text-2xl font-extrabold text-slate-800">{s.value}</p>
                    <p className="text-xs text-slate-400 mt-1">{s.sub}</p>
                  </div>
                ))}
              </div>
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                <p className="font-semibold text-slate-700 mb-4 text-sm">Budget Status</p>
                <div className="space-y-3">
                  {[
                    { label: "Budget Allocated", val: weeklyReport.budget, max: weeklyReport.budget, color: "bg-blue-200" },
                    { label: "Amount Spent", val: weeklyReport.spent, max: weeklyReport.budget, color: "bg-rose-400" },
                    { label: "Variance (Under Budget)", val: weeklyReport.variance, max: weeklyReport.budget, color: "bg-teal-400" },
                  ].map((b) => (
                    <div key={b.label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-600 font-medium">{b.label}</span>
                        <span className="text-slate-700 font-semibold">€{b.val.toLocaleString()}</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className={`h-full ${b.color} rounded-full`} style={{ width: `${(b.val / b.max) * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* SOP */}
          {active === "sop" && (
            <div>
              <h3 className="font-bold text-[#0f1f4a] text-lg mb-2 flex items-center gap-2">
                <GitBranch size={18} className="text-purple-600" /> SOP: Invoice Processing Workflow
              </h3>
              <p className="text-slate-500 text-xs mb-6">Standard Operating Procedure — Finance Operations</p>
              <div className="grid md:grid-cols-2 gap-4">
                {sopSteps.map((step, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl border border-slate-100 hover:border-purple-200 transition-all bg-slate-50 hover:bg-white">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${step.color}`}>
                      <step.icon size={18} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-slate-400">{step.num}</span>
                        <span className="font-semibold text-slate-800 text-sm">{step.title}</span>
                      </div>
                      <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
