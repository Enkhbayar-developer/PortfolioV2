import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    period: "2023-2025",
    degree: "Мэргэшсэн диплом",
    institution: "М Смарт академи",
    description: [
      "C# хэл дээр алгоритм, desktop, console хөгжүүлэлтийн суурь",
      "ASP .NET CORE технологи дээр веб хөгжүүлэлт",
      "MSSQL, Entity Framework core(ORM) өгөгдлийн сангийн бүтэц,  өгөгдөлтэй ажиллах",
      "HTML, CSS, JS веб хөгжүүлэлтийн суурь",
    ],
  },
  {
    period: "2011-2023",
    degree: "Бүрэн дунд боловсрол",
    institution: "Голомт цогцолбор сургууль",
    description: [
      "Дүүрэг болон сургуулийн математик, физикийн олимпиадад жил бүр оролцдог байсан",
      "Дүүргийн математикийн олимпиад 5-р байр",
      "Сургуулийн математикийн олимпиад 3-р байр",
    ],
  },
];

const certificates = [
  {
    name: "NodeJS, ExpressJS, REST API Backend эхнээс нь дуустал!",
    issuer: "1234.mn",
    year: "Судлаж байгаа",
    skills: ["Node.js", "Express.js", "REST API", "MongoDB", "MySql", "JWT"],
  },
  {
    name: "React эхнээс нь дуустал",
    issuer: "1234.mn",
    year: "2025",
    skills: ["React", "Redux", "React Router", "Hooks"],
  },
  {
    name: "Javascript хэлийг эхнээс нь дуустал",
    issuer: "1234.mn",
    year: "2025",
    skills: ["JavaScript", "ES6", "Async/Await", "Promises"],
  },
  {
    name: "Bootstrap 5 - CSS Framework эхнээс нь дуустал",
    issuer: "1234.mn",
    year: "2025",
    skills: ["Bootstrap CSS", "Responsive design"],
  },
  {
    name: "Tailwind - Дэлхийн хамгийн шилдэг CSS фрэймворк",
    issuer: "1234.mn",
    year: "2025",
    skills: ["Tailwind CSS", "Responsive design"],
  },
  {
    name: "Ахисан төвшний HTML, CSS Front-end мастерын нууц",
    issuer: "1234.mn",
    year: "2025",
    skills: ["HTML", "CSS", "Responsive design", "git", "webpack", "npm"],
  },
  {
    name: "HTML, CSS эхнээс нь дуустал",
    issuer: "1234.mn",
    year: "2025",
    skills: ["HTML", "CSS", "SASS"],
  },
  {
    name: "Алгоритм ба Си хэл",
    issuer: "1234.mn",
    year: "2025",
    skills: ["Алгоритм", "C"],
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white mb-16">Боловсрол & сертификат</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-purple-400" />
              <h3 className="text-white">Боловсрол</h3>
            </div>

            <div className="space-y-8">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-slate-800 last:border-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-purple-500 border-4 border-slate-950" />

                  <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300">
                    <p className="text-purple-400 mb-2">{item.period}</p>
                    <h4 className="text-white mb-1">{item.degree}</h4>
                    <p className="text-slate-400 mb-4">{item.institution}</p>

                    <ul className="space-y-2">
                      {item.description.map((desc, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-slate-400 text-sm"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates Grid */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-purple-400" />
              <h3 className="text-white">Сертификат</h3>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:bg-slate-900/70 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-white mb-1 group-hover:text-purple-400 transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-slate-400 text-sm">{cert.issuer}</p>
                    </div>
                    <span className="px-3 py-1 bg-slate-800 text-purple-400 rounded-lg text-sm">
                      {cert.year}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-slate-800/50 text-slate-400 rounded text-xs border border-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
