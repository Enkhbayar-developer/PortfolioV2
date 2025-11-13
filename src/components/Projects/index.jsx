import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { ProjectModal } from "../ProjectModal";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured online shopping platform with product management, shopping cart, and checkout system.",
    technologies: ["React JS", "Tailwind CSS", "Node.js", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMHdlYnNpdGV8ZW58MXx8fHwxNzYyNjczOTQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "User authentication and authorization with JWT tokens",
      "Product catalog with advanced filtering and search functionality",
      "Shopping cart with real-time price calculations",
      "Secure payment integration with Stripe",
      "Order tracking and management system",
      "Admin dashboard for inventory management",
    ],
    details: [
      "Built responsive UI with React and Tailwind CSS for seamless mobile experience",
      "Implemented RESTful API using Node.js and Express",
      "Designed MongoDB schema for efficient data storage and retrieval",
      "Integrated real-time notifications using WebSocket",
      "Optimized performance with lazy loading and code splitting",
    ],
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates and team features.",
    technologies: ["React JS", "Express.js", "MySQL", "Bootstrap"],
    image:
      "https://images.unsplash.com/photo-1758521961744-939de61d5cb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjI3MTY2MzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Drag-and-drop task organization with priority levels",
      "Team collaboration with role-based permissions",
      "Real-time updates across all connected clients",
      "Project timeline visualization and Gantt charts",
      "Custom labels and categories for task organization",
      "Email notifications for task assignments and updates",
    ],
    details: [
      "Developed interactive drag-and-drop interface using React Beautiful DnD",
      "Implemented WebSocket connections for real-time collaboration",
      "Created normalized database schema with MySQL and Sequelize",
      "Built comprehensive REST API with Express.js",
      "Added unit and integration tests with Jest",
    ],
  },
  {
    title: "Weather Dashboard",
    description:
      "Real-time weather application with forecasts, multiple location support, and beautiful UI.",
    technologies: ["React JS", "Tailwind CSS", "Weather API"],
    image:
      "https://images.unsplash.com/photo-1759488820765-5cf0755965ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MjcwNzM1OXww&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Current weather conditions with detailed metrics",
      "7-day weather forecast with hourly breakdown",
      "Multiple location support with geolocation",
      "Interactive weather maps and radar",
      "Weather alerts and severe weather warnings",
      "Historical weather data visualization",
    ],
    details: [
      "Integrated OpenWeather API for accurate weather data",
      "Implemented geolocation API for automatic location detection",
      "Created responsive design with Tailwind CSS animations",
      "Added local storage for saving favorite locations",
      "Optimized API calls with caching and debouncing",
    ],
  },
  {
    title: "Portfolio CMS",
    description:
      "Content management system for portfolio websites with customizable themes.",
    technologies: ["ASP.NET Core", "C#", "SQL Server", "Bootstrap"],
    image:
      "https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2MjY3Mzk0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Drag-and-drop page builder for easy customization",
      "Multiple pre-built themes and templates",
      "Media library with image optimization",
      "SEO optimization tools and meta tag management",
      "Analytics dashboard for tracking visitor metrics",
      "Contact form builder with spam protection",
    ],
    details: [
      "Built with ASP.NET Core MVC architecture",
      "Implemented Entity Framework Core for data access",
      "Created custom middleware for request handling",
      "Added role-based authentication and authorization",
      "Optimized database queries with LINQ and stored procedures",
    ],
  },
  {
    title: "Recipe Finder",
    description:
      "Discover and save your favorite recipes with search, filtering, and meal planning features.",
    technologies: ["React JS", "Tailwind CSS", "Recipe API"],
    image:
      "https://images.unsplash.com/photo-1758874960056-07aa3d0afa3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNpcGUlMjBmb29kJTIwYXBwfGVufDF8fHx8MTc2Mjc0Nzc5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Search recipes by ingredients, cuisine, or dietary restrictions",
      "Step-by-step cooking instructions with timers",
      "Nutrition information and calorie tracking",
      "Save favorite recipes and create custom collections",
      "Weekly meal planner with shopping list generation",
      "Recipe sharing with social media integration",
    ],
    details: [
      "Integrated Spoonacular API for extensive recipe database",
      "Implemented advanced search with multiple filter options",
      "Created responsive card-based UI with Tailwind CSS",
      "Added local storage for offline recipe access",
      "Built shopping list feature with ingredient grouping",
    ],
  },
  {
    title: "Blog Platform",
    description:
      "Modern blogging platform with markdown support, comments, and user authentication.",
    technologies: ["Node.js", "Express.js", "MongoDB", "React JS"],
    image:
      "https://images.unsplash.com/photo-1638342863994-ae4eee256688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwd3JpdGluZyUyMHBsYXRmb3JtfGVufDF8fHx8MTc2Mjc0Nzc5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Rich text editor with markdown support",
      "User authentication with social login options",
      "Comment system with nested replies",
      "Tag-based content organization",
      "Reading time estimation and bookmarking",
      "RSS feed generation for subscribers",
    ],
    details: [
      "Developed RESTful API with Node.js and Express",
      "Implemented JWT authentication with refresh tokens",
      "Created MongoDB schema with Mongoose ODM",
      "Built rich text editor using React Quill",
      "Added server-side rendering for SEO optimization",
    ],
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white mb-16 font-semibold text-2xl">
          Миний төслүүд
        </h2>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-slate-900/30 backdrop-blur-sm border border-slate-800 hover:border-purple-500/50 rounded-2xl p-8 transition-all duration-300 hover:bg-slate-900/50"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-800/50 text-purple-400 rounded-lg text-sm border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group-hover:translate-x-2 transform duration-300 whitespace-nowrap"
                >
                  Read More
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Hover Preview Image */}
              {hoveredIndex === index && (
                <div className="absolute right-1/2 translate-x-1/2 -top-4 hidden xl:block pointer-events-none z-10">
                  <div className="w-96 h-64 rounded-xl overflow-hidden shadow-2xl border-4 border-purple-500/50 transform -translate-y-full transition-all duration-300">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </section>
  );
}
