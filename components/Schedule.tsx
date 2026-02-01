
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SCHEDULE, getIcon } from '../constants';
import { Calendar, Clock, MapPin, Sparkles, ArrowRight } from 'lucide-react';

const Schedule: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Force ScrollTrigger to refresh after a short delay to account for dynamic content height
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(".schedule-header", 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".schedule-header",
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );

      // Card Stagger Animation
      gsap.fromTo(".schedule-card", 
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".schedule-grid",
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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 30;
    const rotateY = (centerX - x) / 30;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.4,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.4,
      ease: "power2.out"
    });
  };

  return (
    <section id="schedule" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/5 blur-[150px] rounded-full -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="schedule-header text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <Sparkles size={14} /> Available Slots
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Class <span className="gradient-text">Schedule</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Structured learning environments tailored for different academic levels. Choose the batch that fits your journey.
          </p>
        </div>

        <div className="schedule-grid grid md:grid-cols-2 gap-10 max-w-6xl mx-auto perspective-1000">
          {SCHEDULE.map((item) => (
            <div 
              key={item.id} 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="schedule-card group relative p-10 glass rounded-[3rem] border border-white/10 overflow-hidden transition-all duration-300 hover:border-blue-500/30"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Radial glow effect */}
              <div 
                className="pointer-events-none absolute -inset-px rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.15), transparent 40%)`
                }}
              ></div>

              <div className="flex items-start justify-between mb-10 relative z-10">
                <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 text-blue-400 group-hover:from-blue-600 group-hover:to-blue-500 group-hover:text-white transition-all duration-500 shadow-2xl">
                  {getIcon(item.icon, "w-10 h-10")}
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="px-5 py-2 rounded-full glass border border-white/10 text-[10px] uppercase font-black tracking-widest text-blue-400">
                    2025 Admissions
                  </span>
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-8 group-hover:text-blue-400 transition-colors tracking-tight">
                  {item.grade}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-5 p-5 rounded-[2rem] bg-white/5 border border-white/5 group-hover:bg-white/10 transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                      <Calendar size={22} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-0.5">Primary Day</p>
                      <p className="text-xl font-semibold text-white">{item.day}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 p-5 rounded-[2rem] bg-white/5 border border-white/5 group-hover:bg-white/10 transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                      <Clock size={22} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-0.5">Time Period</p>
                      <p className="text-xl font-semibold text-white">{item.time}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 p-5 rounded-[2rem] bg-white/5 border border-white/5 group-hover:bg-white/10 transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-0.5">Mode</p>
                      <p className="text-xl font-semibold text-white">Hybrid Coaching</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 relative z-10">
                <a href="/#/apply" className="group/btn flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg transition-all shadow-xl shadow-blue-600/20 active:scale-95">
                  Reserve a Seat <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed">
            * Session timings are strictly followed. Early registration is recommended as batch sizes are limited to ensure individual attention.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
