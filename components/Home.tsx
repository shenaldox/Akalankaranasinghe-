
import React from 'react';
import Experience from '../components/Experience';
import Schedule from '../components/Schedule';
import { Link } from 'react-router-dom';
import { TUTOR_INFO } from '../constants';
import { ArrowRight, MessageCircle, Star } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="relative">
      {/* Centered Modern Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-4xl mx-auto z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-8 tracking-[0.3em] uppercase animate-pulse">
            <Star size={16} className="fill-blue-400" />
            Elite Education 2025
          </div>
          
          <h1 className="text-5xl md:text-8xl font-extrabold mb-8 tracking-tighter leading-tight">
            Master Your Future <br />
            <span className="gradient-text">With Confidence.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Professional guidance for Grade 10, 11, and Primary students by <span className="text-white font-semibold">{TUTOR_INFO.name}</span>. 
            A decade of excellence, now distilled into a modern learning journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/apply" 
              className="px-10 py-5 bg-blue-600 hover:bg-blue-700 rounded-full font-bold text-lg shadow-2xl shadow-blue-600/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 group"
            >
              Apply to Join <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href={TUTOR_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 glass hover:bg-white/10 rounded-full font-bold text-lg flex items-center gap-3 border border-white/10 transition-all"
            >
              <MessageCircle className="text-green-400" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Structured Content Sections */}
      <div className="relative z-10 bg-black/40 backdrop-blur-xl border-t border-white/5">
        <Experience />
        <Schedule />
        
        {/* Bottom CTA */}
        <div className="container mx-auto px-6 py-32 text-center">
          <div className="glass-heavy p-12 md:p-24 rounded-[3rem] md:rounded-[5rem] border border-white/10 relative overflow-hidden group">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter">Start Your Success Story</h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
                Join a community of high-achievers. Limited seats available for the upcoming intake.
              </p>
              <Link 
                to="/apply" 
                className="inline-block px-12 py-6 bg-white text-black hover:bg-blue-500 hover:text-white rounded-full font-black text-xl transition-all shadow-2xl hover:scale-105 active:scale-95"
              >
                Enroll Now
              </Link>
            </div>
            {/* Animated accent gradient */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full group-hover:bg-blue-600/30 transition-colors"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full group-hover:bg-purple-600/30 transition-colors"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
