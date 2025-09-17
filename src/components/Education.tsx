interface Education {
  degree: string;
  institution: string;
  year: string;
}

const Education = () => {
  const education: Education[] = [
    {
      degree: "MCA",
      institution: "ITS Mohan Nagar, Ghaziabad (AKTU)",
      year: "2023-2025",
    },
    {
      degree: "B.Sc",
      institution: "SW Narendra Singh Maha Vidyalaya (CSJMU)",
      year: "2020-2023",
    },
    {
      degree: "12th",
      institution: "Laxmi Vidya Mandir Inter College (UP Board)",
      year: "2020",
    },
    {
      degree: "10th",
      institution: "Kendriya Vidyalaya, IIT Kanpur (CBSE)",
      year: "2018",
    },
  ];

  return (
    <section id="education" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div>
                <h3 className="text-xl font-semibold text-primary">{edu.degree}</h3>
                <p className="text-gray-600">{edu.institution}</p>
              </div>
              <span className="mt-2 sm:mt-0 text-gray-500">{edu.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
