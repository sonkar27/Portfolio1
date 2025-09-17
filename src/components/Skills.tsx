interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: string;
  }[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      category: "Programming",
      skills: [
        { name: "C", level: "Intermediate" },
        { name: "DSA", level: "Intermediate" },
      ],
    },
    {
      category: "Web Development",
      skills: [
        { name: "HTML", level: "Basic" },
        { name: "CSS", level: "Basic" },
        { name: "SQL", level: "Basic" },
      ],
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "n8n", level: "Intermediate" },
        { name: "Replit", level: "Intermediate" },
        { name: "Lovable", level: "Intermediate" },
        { name: "Firebase", level: "Intermediate" },
        { name: "Canva", level: "Intermediate" },
        { name: "Generative AI", level: "Intermediate" },
      ],
    },
    {
      category: "Office Tools",
      skills: [
        { name: "MS Word", level: "Advanced" },
        { name: "MS Excel", level: "Advanced" },
        { name: "MS PowerPoint", level: "Advanced" },
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Communication", level: "Advanced" },
        { name: "Problem-Solving", level: "Advanced" },
        { name: "Teamwork", level: "Advanced" },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex justify-between items-center">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
