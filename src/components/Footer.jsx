import { Mail, Phone, MapPin, Link } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f1f4a] text-white py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          <div>
            <p className="text-2xl font-extrabold mb-1">Kimberly<span className="text-teal-400"> Amurao</span></p>
            <p className="text-blue-300 text-sm">Administrative · Finance · Operations Support</p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <a href="mailto:kimberlyamurao60@gmail.com" className="flex items-center gap-2 text-blue-200 hover:text-teal-400 transition-colors">
              <Mail size={14} /> kimberlyamurao60@gmail.com
            </a>
            <a href="tel:+639618114584" className="flex items-center gap-2 text-blue-200 hover:text-teal-400 transition-colors">
              <Phone size={14} /> +63 961 811 4584
            </a>
            <span className="flex items-center gap-2 text-blue-200">
              <MapPin size={14} /> Calamba, Laguna, Philippines
            </span>
            <a
              href="https://www.linkedin.com/in/kimberly-amurao-b060581b4"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-blue-200 hover:text-teal-400 transition-colors">
              <Link size={14} /> LinkedIn Profile
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-blue-400">
          <p>© 2025 Kimberly Amurao. All rights reserved.</p>
          <p>Open to remote opportunities worldwide.</p>
        </div>
      </div>
    </footer>
  );
}