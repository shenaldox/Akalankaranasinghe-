
import React from 'react';
import { TUTOR_INFO } from '../constants';
import { Github, Twitter, Linkedin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-20 pb-10 border-t border-white/5 bg-[#020617]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-sm font-bold">AR</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">{TUTOR_INFO.name}</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              Elite education tailored for excellence. Empowering the next generation of leaders through quality private tutoring.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 rounded-xl glass border border-white/5 hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="p-3 rounded-xl glass border border-white/5 hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="p-3 rounded-xl glass border border-white/5 hover:text-blue-400 transition-colors"><Github size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="/" className="hover:text-blue-400 transition-colors">About Me</a></li>
              <li><a href="/#schedule" className="hover:text-blue-400 transition-colors">Schedule</a></li>
              <li><a href="/#certs" className="hover:text-blue-400 transition-colors">Certifications</a></li>
              <li><a href="/apply" className="hover:text-blue-400 transition-colors">Application</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li>{TUTOR_INFO.whatsapp}</li>
              <li>{TUTOR_INFO.education}</li>
              <li>{TUTOR_INFO.school}</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {TUTOR_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Developer:</span>
            <a 
              href={TUTOR_INFO.developer.contact} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-bold text-blue-400 hover:text-blue-300 transition-colors"
            >
              {TUTOR_INFO.developer.name} <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
