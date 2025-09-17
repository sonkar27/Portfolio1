const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-70" />
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent inline-block">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8 transform origin-left animate-scale" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="relative w-full aspect-square max-w-md mx-auto overflow-hidden rounded-2xl shadow-xl transition-all duration-300 group-hover:shadow-2xl">
              <img
                src="/profile.jpg"
                alt="Ankur Sonkar"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">Ankur Sonkar</h3>
                  <p className="text-gray-200">MCA Student & Web Developer</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-4 text-primary">Career Objective</h3>
              <p className="text-gray-600 leading-relaxed">
                Motivated MCA student with hands-on experience in AI automation, low-code tools,
                and web development. Eager to contribute technical skills and grow in a dynamic
                work environment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-4 text-primary">My Journey</h3>
              <p className="text-gray-600 leading-relaxed">
              "I am an MCA graduate with a strong foundation in software development and AI technologies.
               Through diverse projects, I have strengthened my problem-solving skills and gained valuable technical expertise."
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-4 text-primary">What I Do</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Web Development with React & TypeScript
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  AI & Machine Learning Projects
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Low-Code Development & Automation
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-4 text-primary">Interests</h3>
              <div className="flex flex-wrap gap-3">
                {['AI/ML', 'Web Development', 'Cloud Computing', 'Problem Solving', 'Open Source'].map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 bg-blue-50 text-primary rounded-full text-sm font-medium hover:bg-blue-100 transition-colors duration-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
