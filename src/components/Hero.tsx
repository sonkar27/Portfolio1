import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const roles = ['MCA Student', 'AI Intern', 'Web Developer'];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="section-padding min-h-screen flex items-center relative overflow-hidden bg-gray-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 opacity-70" />
        
        {/* Animated circles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className={`flex flex-col-reverse md:flex-row items-center justify-between gap-8 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left md:max-w-xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Hi, I'm Ankur Sonkar 👋
            </h1>
            <div className="h-16 mb-8">
              <h2 className="text-xl sm:text-2xl text-gray-600 transition-all duration-500 transform">
                {roles[currentRole]}
              </h2>
            </div>
            
            {/* Bitmoji Avatar (Mobile) */}
            <div className="relative w-[240px] h-[240px] mx-auto mb-8 md:hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 rounded-2xl animate-spin-slow"></div>
              <div className="absolute inset-1 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl overflow-hidden">
                {/* Bitmoji Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[200px] h-[200px] transform hover:scale-105 transition-transform duration-300">
                    <img
                      src="/bitmoji.png"
                      alt="Ankur's Bitmoji"
                      className="w-full h-full object-contain rounded-[40%] shadow-lg"
                    />
                    
                    {/* Animated Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-600/10 mix-blend-overlay animate-pulse"></div>
                  </div>
                </div>

                {/* Tech Icons/Elements */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-4 left-4 text-xl animate-float">⚛️</div>
                  <div className="absolute top-8 right-6 text-xl animate-float animation-delay-2000">💻</div>
                  <div className="absolute bottom-8 left-8 text-xl animate-float animation-delay-4000">🚀</div>
                </div>

                {/* Decorative Code Pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                  <div className="h-full w-full" style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                    backgroundSize: '24px 24px'
                  }} />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <button
                onClick={() => {
                  const projectsSection = document.getElementById('projects');
                  projectsSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary group relative overflow-hidden px-8 py-3 w-full sm:w-auto"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </button>

              <a
                href="mailto:ankursonkar222@gmail.com"
                className="btn-secondary group relative overflow-hidden px-8 py-3 border-2 border-primary text-primary hover:text-white transition-colors duration-300 w-full sm:w-auto"
              >
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </a>
            </div>
          </div>

          {/* Bitmoji Avatar (Desktop) */}
          <div className="hidden md:block relative">
            <div className="relative w-[400px] h-[400px] bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Bitmoji Image */}
                <div className="relative w-[350px] h-[350px] transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="/bitmoji.png"
                    alt="Ankur's Bitmoji"
                    className="w-full h-full object-contain rounded-[40%] shadow-lg"
                  />
                  
                  {/* Animated Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-600/10 mix-blend-overlay animate-pulse"></div>
                </div>
              </div>

              {/* Tech Icons/Elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-12 left-12 text-2xl animate-float">⚛️</div>
                <div className="absolute top-20 right-16 text-2xl animate-float animation-delay-2000">💻</div>
                <div className="absolute bottom-20 left-20 text-2xl animate-float animation-delay-4000">🚀</div>
              </div>

              {/* Decorative Code Pattern */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="h-full w-full" style={{
                  backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                  backgroundSize: '30px 30px'
                }} />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 inset-0 transform translate-x-4 translate-y-4">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 rounded-2xl opacity-20 blur-sm"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
