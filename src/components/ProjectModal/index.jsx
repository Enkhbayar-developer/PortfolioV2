import { X } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function ProjectModal({ isOpen, onClose, project }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Project image */}
        <div className="relative h-64 md:h-96 rounded-t-3xl overflow-hidden bg-slate-800">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project details */}
        <div className="p-8 md:p-12">
          <h2 className="text-white mb-4">{project.title}</h2>

          <p className="text-slate-300 mb-6">{project.description}</p>

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="text-white mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-slate-800 text-purple-400 rounded-lg border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <h3 className="text-white mb-4">Key Features</h3>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                  <span className="text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Implementation Details */}
          <div>
            <h3 className="text-white mb-4">Implementation Details</h3>
            <ul className="space-y-3">
              {project.details.map((detail, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                  <span className="text-slate-300">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* View Project Button */}
          <div className="mt-8 pt-6 border-t border-slate-800">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-colors">
              View Project →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
