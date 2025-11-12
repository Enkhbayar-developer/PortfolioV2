import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const menuItems = [
    { id: "about", label: "Тухай" },
    { id: "projects", label: "Төслүүд" },
    // { id: "skills", label: "Skills" },
    { id: "education", label: "Боловсрол" },
    { id: "contact", label: "Холбоо барих" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-8 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-slate-900/80 backdrop-blur-md px-8 py-4 rounded-full border border-slate-800">
          <ul className="flex gap-8 items-center">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation - Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-6 right-6 z-50 bg-slate-900/80 backdrop-blur-md p-3 rounded-full border border-slate-800 hover:border-purple-500 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Mobile Navigation - Full Screen Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-lg transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="h-full flex items-center justify-center">
          <ul className="space-y-8 text-center">
            {menuItems.map((item, index) => (
              <li
                key={item.id}
                className={`transform transition-all duration-300 delay-${
                  index * 100
                } ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 75}ms` : "0ms",
                }}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-slate-300 hover:text-white transition-colors text-2xl"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
