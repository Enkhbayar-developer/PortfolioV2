import { Github, Linkedin, Mail, MapPin, Facebook } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-12 text-center">
          <h2 className="text-white mb-6 text-2xl font-semibold">
            Хамтарч ажиллацгаая
          </h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
            Одоогоор ур чадвараа ахиулж, сонирхолтой төслүүдэд оролцож
            туршлагатай инженерүүдээс суралцах дадлагын боломж хайж байгаа.
            Доорх хаягуудаар холбогдоорой баярлалаа.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="mailto:enkhe.tech@gmail.com"
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition-colors"
            >
              <Mail className="w-5 h-5" />
              Мэйл бичих
            </a>
            <a
              href="https://www.facebook.com/enkhbayr.tuugii/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-full transition-colors"
            >
              <Facebook className="w-5 h-5" />
              Facebook
            </a>
            <a
              href="https://github.com/Enkhbayar-developer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-full transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/enkhbayar-togoldor-899450390/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-full transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-slate-500">
            <MapPin className="w-4 h-4" />
            <span>Налайх, Улаанбаатар</span>
          </div>
        </div>

        <footer className="mt-12 text-center text-slate-600">
          <p>
            &copy; 2025 Танилцуулга вебсайт. React & Tailwind CSS ашиглан
            бүтээв.
          </p>
        </footer>
      </div>
    </section>
  );
}
