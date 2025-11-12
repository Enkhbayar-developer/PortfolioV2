import { Navigation } from "../Navigation";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <Navigation />

      {/* Gradient orbs for background effect */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <p className="text-purple-400 uppercase tracking-wider mb-6">
          Junior Web Developer
        </p>

        <h1 className="mb-8">
          <span className="block text-white">Building Modern</span>
          <span className="block text-white">
            Web{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Experiences
            </span>
          </span>
        </h1>

        <p className="text-slate-300 mb-12 max-w-2xl mx-auto">
          Hi! I'm a passionate web developer based in Ulaanbaatar, Mongolia.
          Currently seeking internship opportunities to grow my skills and
          contribute to innovative projects.
        </p>

        <button
          onClick={scrollToProjects}
          className="group bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-purple-500 text-white px-8 py-4 rounded-full transition-all duration-300 inline-flex items-center gap-2"
        >
          Show my work
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-slate-500 rounded-full" />
        </div>
      </div>
    </section>
  );
}
