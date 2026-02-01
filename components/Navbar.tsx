
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { TUTOR_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Schedule', path: '/', hash: '#schedule' },
    { name: 'Certifications', path: '/', hash: '#certs' },
    { name: 'Join Class', path: '/apply' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-4 glass-heavy border-b border-white/5 shadow-2xl' : 'py-8 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-tighter flex items-center gap-3 group">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center group-hover:rotate-[15deg] transition-transform duration-300 shadow-lg shadow-blue-600/40">
            <span className="text-white font-black text-sm">AR</span>
          </div>
          <span className="hidden sm:inline-block font-bold">Akalanka Ranasinghe</span>
          <span className="sm:hidden font-bold">AR</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path + (link.hash || '')}
              className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-blue-400 ${
                location.pathname === link.path && !link.hash ? 'text-blue-400' : 'text-gray-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/apply" 
            className="px-8 py-3 rounded-full bg-white text-black hover:bg-blue-600 hover:text-white text-xs font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-white bg-white/5 rounded-lg border border-white/10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 glass-heavy border-b border-white/10 md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col p-8 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path + (link.hash || '')}
                className="text-xl font-bold tracking-tight border-b border-white/5 pb-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/apply" 
              className="mt-4 w-full py-5 text-center rounded-2xl bg-blue-600 text-white font-black text-lg shadow-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Enroll Today
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
