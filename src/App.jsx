import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import WorkSamples from "./sections/WorkSamples";
import Tools from "./sections/Tools";
import WhyMe from "./sections/WhyMe";
import Resume from "./sections/Resume";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <WorkSamples />
      <Tools />
      <WhyMe />
      <Resume />
      <Footer />
    </div>
  );
}
