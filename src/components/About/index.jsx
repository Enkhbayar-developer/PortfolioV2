import { Code2, Sparkles, Clock, Mail, Star } from "lucide-react";
import { toast } from "sonner";

export function About() {
  const hobbies = [
    { name: "Э-Спорт", emoji: "🎮", color: "from-emerald-400 to-cyan-400" },
    { name: "Анимэ & манга", emoji: "🎥", color: "from-teal-400 to-cyan-400" },
    { name: "Фитнес", emoji: "🏋️", color: "from-green-400 to-emerald-400" },
    { name: "Унших", emoji: "📚", color: "from-teal-400 to-cyan-400" },
    { name: "Гүйлт & алхалт", emoji: "🏃", color: "from-teal-400 to-cyan-400" },
    { name: "Хөлбөмбөг", emoji: "⚽", color: "from-teal-400 to-cyan-400" },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white mb-16 font-semibold text-2xl">Миний тухай</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Introduction Card - spans 2 rows */}
          <div className="lg:row-span-2 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 relative overflow-hidden group hover:border-purple-500/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="mb-6 text-6xl">👨‍💻</div>
              <h3 className="text-white mb-4">Веб хөгжүүлэлт</h3>
              <p className="text-slate-400">
                Бүх төхөөрөмж дээр хурдтай, уян хатан ажиллах веб шийдэлийг
                бүтээхийг зорьдог. Би React js фрэймворк дээр үндэслэн шинэ
                технологиудыг сурсаар байна.
              </p>
            </div>
          </div>

          {/* Tech Stack Card */}
          <div
            id="skills"
            className="lg:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 relative overflow-hidden group hover:border-purple-500/50 transition-all duration-300"
          >
            <Code2 className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-white mb-6">Ашигладаг технологиуд</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-purple-400 mb-3">Front-End</p>
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
                <p className="text-purple-400 mb-3">Back-End & Database</p>
                <div className="flex flex-wrap gap-2">
                  {["C#", "ASP.NET Core", "MSSQL"].map((tech) => (
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
              Одоо судлаж байгаа: Node.js, Express.js, MongoDB with Mongoose,
              MySQL with Sequelize from 1234.mn
            </p>
          </div>

          {/* Design Principles Card */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute top-4 right-4 text-6xl opacity-20 rotate-12">
              ✨
            </div>
            <Sparkles className="w-12 h-12 text-white mb-4" />
            <h3 className="text-white mb-3">Дизайн зарчим</h3>
            <p className="text-purple-100">
              Дизайн яаж байгаа нь чухал ч гэлээ яаж ажиллаж байгаа нь илүү
              чухал.
            </p>
          </div>

          {/* Beyond the Code Card */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 relative overflow-hidden group hover:border-cyan-500/50 transition-all duration-300">
            <div className="flex items-center gap-2 mb-3">
              <Star className="w-6 h-6 text-cyan-400" />
              <h3 className="text-white">Кодчилолоос гадна</h3>
            </div>
            <p className="text-slate-400 mb-6 text-sm">
              Мэргэжлээс гадна миний сонирхолууд
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
