import { Mail, Phone, MapPin, Download, ChevronDown } from "lucide-react";

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

// Your base64 image string variable
const KIM_PHOTO = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAJ9AssDASIAAhEBAxEB/8QAH...";

export default function Hero() {
  const handleDownload = () => {
    // Logic for resume download
    console.log("Downloading resume...");
  };

  return (
    <section className="relative min-h-screen bg-slate-900 text-white flex items-center justify-center py-20 px-4 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-teal-500 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-600 blur-[120px]"></div>
      </div>

      <div className="container mx-auto max-w-6xl z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Profile Image Container */}
          <div className="col-span-14 md:col-span-5 flex justify-center order-first md:order-last">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-teal-500 to-blue-500 shadow-2xl shadow-teal-500/20 animate-fade-in">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-800 border-4 border-slate-900">
                <img 
                  src={KIM_PHOTO} 
                  alt="Kimberly Amurao" 
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="col-span-1 md:col-span-7 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-teal-400">Kimberly Amurao</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-lg">
              A passionate professional dedicated to delivering high-quality digital solutions and driving impactful user experiences.
            </p>

            {/* Meta Tags / Badges */}
            <div className="flex flex-wrap gap-2.5 justify-center md:justify-start">
              <span className="flex items-center gap-1.5 bg-white/10 text-white text-xs px-3 py-2 rounded-full border border-white/10">
                <MapPin size={12} /> Calamba, Laguna, Philippines
              </span>
              <a href="https://www.linkedin.com/in/kimberly-amurao-b060581b4"
                target="_blank" rel="noreferrer"
                className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs px-3 py-2 rounded-full transition-all border border-white/10">
                <LinkedinIcon /> LinkedIn
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white text-sm font-semibold px-7 py-3 rounded-full transition-all shadow-lg shadow-teal-500/30 cursor-pointer">
                <Download size={15} /> Download Resume
              </button>
              <a href="#about"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-7 py-3 rounded-full transition-all border border-white/20">
                Learn More <ChevronDown size={15} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 animate-bounce hidden md:block">
        <ChevronDown size={24} />
      </div>
    </section>
  );
}