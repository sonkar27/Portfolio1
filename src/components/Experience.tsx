const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
            <h3 className="text-xl font-semibold text-primary">AI Intern</h3>
            <div className="text-gray-500">
              <span>Anve AI, IIT Kanpur</span>
              <span className="mx-2">|</span>
              <span>Feb 2025 - July 2025</span>
            </div>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Built automation systems using Generative AI and n8n</li>
            <li>Created prompt-based workflows on Replit and open-source tools</li>
            <li>Developed productivity-enhancing AI integrations</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
