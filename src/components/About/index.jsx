import { Code2, Sparkles, Clock, Mail, Star } from "lucide-react";
import { toast } from "sonner";

export function About() {
  const copyEmail = () => {
    navigator.clipboard.writeText("your.email@example.com");
    toast.success("Email copied to clipboard!");
  };

  const hobbies = [
    { name: "Painting", emoji: "🎨", color: "from-emerald-400 to-cyan-400" },
    { name: "Photography", emoji: "📷", color: "from-teal-400 to-blue-400" },
    { name: "Gaming", emoji: "🎮", color: "from-green-400 to-teal-400" },
    { name: "Hiking", emoji: "🥾", color: "from-emerald-400 to-teal-400" },
    { name: "Music", emoji: "🎵", color: "from-cyan-400 to-blue-400" },
    { name: "Fitness", emoji: "🏋️", color: "from-green-400 to-emerald-400" },
    { name: "Reading", emoji: "📚", color: "from-teal-400 to-cyan-400" },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white mb-16">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Introduction Card - spans 2 rows */}
          <div className="lg:row-span-2 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 relative overflow-hidden group hover:border-purple-500/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="mb-6 text-6xl">👨‍💻</div>
              <h3 className="text-white mb-4">Hi, I'm a Web Developer</h3>
              <p className="text-slate-400">
                Passionate about creating dynamic and responsive web
                applications. I specialize in modern web technologies and always
                eager to learn new skills. Currently focusing on full-stack
                development with React and Node.js.
              </p>
            </div>
          </div>

          {/* Tech Stack Card */}
          <div
            id="skills"
            className="lg:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 relative overflow-hidden group hover:border-purple-500/50 transition-all duration-300"
          >
            <Code2 className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-white mb-6">Tech Stack</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-purple-400 mb-3">Frontend</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "React JS",
                    "Tailwind CSS",
                    "Bootstrap",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-purple-400 mb-3">Backend & Database</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "C#",
                    "ASP.NET Core",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "MySQL",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-slate-500 mt-4 text-sm">
              Currently learning: Node.js, Express.js, MongoDB with Mongoose,
              MySQL with Sequelize
            </p>
          </div>

          {/* Design Principles Card */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute top-4 right-4 text-6xl opacity-20 rotate-12">
              ✨
            </div>
            <Sparkles className="w-12 h-12 text-white mb-4" />
            <h3 className="text-white mb-3">Design Principles</h3>
            <p className="text-purple-100">
              I believe great design is crafted through clean code, user-centric
              thinking, and attention to detail.
            </p>
          </div>

          {/* Beyond the Code Card */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 relative overflow-hidden group hover:border-cyan-500/50 transition-all duration-300">
            <div className="flex items-center gap-2 mb-3">
              <Star className="w-6 h-6 text-cyan-400" />
              <h3 className="text-white">Beyond the Code</h3>
            </div>
            <p className="text-slate-400 mb-6 text-sm">
              Explore my interests and hobbies beyond the digital realm.
            </p>

            <div className="flex flex-wrap gap-2">
              {hobbies.map((hobby) => (
                <span
                  key={hobby.name}
                  className={`px-4 py-2 bg-gradient-to-r ${hobby.color} text-slate-900 rounded-full text-sm inline-flex items-center gap-2 hover:scale-105 transition-transform duration-200`}
                >
                  <span>{hobby.emoji}</span>
                  <span>{hobby.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
