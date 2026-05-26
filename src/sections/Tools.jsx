import { Calculator, MessageSquare, LayoutGrid, Zap } from "lucide-react";

const toolCategories = [
  {
    title: "Accounting & Finance",
    icon: Calculator,
    accent: "bg-blue-600",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
    tools: ["QuickBooks", "Zoho Books", "Exact Online", "ERP Systems", "Productive", "Simplicate"],
  },
  {
    title: "Communication",
    icon: MessageSquare,
    accent: "bg-teal-500",
    bg: "bg-teal-50",
    iconColor: "text-teal-600",
    tools: ["Slack", "Microsoft Teams", "Zoom", "Skype", "Email (Outlook / Gmail)"],
  },
  {
    title: "Administration",
    icon: LayoutGrid,
    accent: "bg-amber-500",
    bg: "bg-amber-50",
    iconColor: "text-amber-600",
    tools: ["Google Workspace", "Microsoft Office 365", "Excel / Sheets", "JAMF", "Google Drive"],
  },
  {
    title: "Productivity & PM",
    icon: Zap,
    accent: "bg-rose-500",
    bg: "bg-rose-50",
    iconColor: "text-rose-600",
    tools: ["ChatGPT / AI Tools", "Project Management Tools", "Trello / ClickUp", "SharePoint", "OneDrive"],
  },
];

export default function Tools() {
  return (
    <section id="tools" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-8 h-1 bg-purple-500 rounded-full inline-block" />
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-widest">Tools & Platforms</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f4a] mb-12">
          Tech Stack & Software
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {toolCategories.map((cat) => (
            <div key={cat.title} className={`rounded-2xl p-6 ${cat.bg} border border-transparent hover:shadow-md transition-all`}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <cat.icon size={20} className={cat.iconColor} />
                </div>
                <h3 className="font-bold text-slate-800">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.tools.map((tool) => (
                  <span
                    key={tool}
                    className="bg-white text-slate-700 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm border border-white/80"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
