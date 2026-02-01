
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { TUTOR_INFO } from '../constants';
import { MessageCircle, ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(textRef.current?.children || [], 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, delay: 0.5 }
    );

    tl.fromTo(imageRef.current,
      { opacity: 0, scale: 0.8, rotate: -5 },
      { opacity: 1, scale: 1, rotate: 0, duration: 1.2 },
      "-=0.8"
    );

    // Floating animation for image
    gsap.to(imageRef.current, {
      y: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        <div ref={textRef} className="z-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6 tracking-wider uppercase">
            <Star size={14} className="fill-blue-400" />
            Elite Private Education
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
            Unlock Your <br />
            <span className="gradient-text">Academic Potential</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0">
            Professional guidance by <span className="text-white font-semibold">{TUTOR_INFO.name}</span>. 
            Empowering students with structured, modern learning techniques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link 
              to="/apply" 
              className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 font-bold flex items-center justify-center gap-2 transition-all hover:gap-4 shadow-xl shadow-blue-600/20 group"
            >
              Join My Class <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href={TUTOR_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full glass hover:bg-white/10 font-bold flex items-center justify-center gap-2 transition-all border border-white/10"
            >
              <MessageCircle size={20} className="text-green-400" />
              Contact Directly
            </a>
          </div>
          
          <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-60">
            <div className="text-center lg:text-left">
              <div className="text-2xl font-bold text-white">10+</div>
              <div className="text-xs text-gray-400 uppercase tracking-widest">Years Exp</div>
            </div>
            <div className="w-px h-8 bg-white/10"></div>
            <div className="text-center lg:text-left">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-xs text-gray-400 uppercase tracking-widest">Pass Rate</div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div ref={imageRef} className="relative w-full max-w-[450px]">
            {/* Background elements adjusted for video compatibility */}
            <div className="absolute -inset-4 bg-blue-600/20 blur-2xl -z-10 rounded-3xl"></div>
            
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden glass border border-white/10 p-2 group shadow-2xl">
              <img 
                src={TUTOR_INFO.photo} 
                alt={TUTOR_INFO.name} 
                className="w-full h-auto rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 glass-heavy rounded-2xl border border-white/10 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="font-bold text-lg">{TUTOR_INFO.name}</h3>
                <p className="text-sm text-blue-400">{TUTOR_INFO.role}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
