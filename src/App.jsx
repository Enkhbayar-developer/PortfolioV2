import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Toaster } from "sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-purple-950 to-slate-950">
      <Toaster position="bottom-right" theme="dark" />
      <Hero />
      <About />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}
