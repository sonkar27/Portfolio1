interface Project {
  title: string;
  description: string;
  techStack: string[];
  year: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Explore Uttarakhand",
      description: "Tourism Website with booking inquiries and dynamic content",
      techStack: ["HTML", "CSS", "JavaScript"],
      year: "2025",
    },
    {
      title: "Talk-to-Expert-Astrologers",
      description: "Full-stack application with user authentication and file uploads",
      techStack: [
        "React",
        "Vite",
        "React Router",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "SQLite",
        "JWT",
        "Multer",
      ],
      year: "2025",
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <h3 className="text-xl font-semibold text-primary mb-2 flex justify-between items-center">
                  <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    {project.title}
                  </span>
                  <span className="text-gray-500 text-sm">({project.year})</span>
                </h3>
                <p className="text-gray-600 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm border border-blue-100 
                        transition-all duration-300 hover:bg-blue-100 hover:border-blue-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="text-primary hover:text-blue-700 font-medium flex items-center gap-2 transition-colors duration-300">
                  View Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
