
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ACHIEVEMENTS, getIcon } from '../constants';

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Force a refresh after a small delay to handle any late layout shifts
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(".exp-header", 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".exp-header",
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );

      // Card staggered entrance
      gsap.fromTo(".exp-card", 
        { 
          opacity: 0, 
          scale: 0.85,
          y: 40 
        },
        {
          opacity: 1, 
          scale: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".exp-grid",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    }, sectionRef);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <section id="certs" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-600/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="exp-header text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            Professional Profile
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Credentials & <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A decade of professional teaching experience and academic certifications ensuring the highest standard of education for every student.
          </p>
        </div>

        <div className="exp-grid grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ACHIEVEMENTS.map((ach) => (
            <div 
              key={ach.id} 
              className="exp-card p-10 glass rounded-[2.5rem] border border-white/5 hover:bg-white/[0.08] transition-all duration-500 relative group overflow-hidden"
            >
              <div className="relative z-10">
                <div className="mb-8 inline-block p-5 rounded-[1.5rem] bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  {getIcon(ach.icon, "w-10 h-10")}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{ach.title}</h3>
                <p className="text-gray-400 leading-relaxed text-base">{ach.description}</p>
              </div>
              
              {/* Shine / Flare Effect on Hover */}
              <div className="absolute top-[-100%] left-[-100%] w-full h-[300%] bg-gradient-to-r from-transparent via-white/[0.03] to-transparent rotate-45 transform group-hover:animate-shine transition-all pointer-events-none"></div>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 blur-2xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
