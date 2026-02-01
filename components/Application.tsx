
import React, { useState, useEffect } from 'react';
import { Send, ChevronLeft, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TUTOR_INFO } from '../constants';
import { ApplicationFormData } from '../types';
import gsap from 'gsap';

const Application: React.FC = () => {
  const [formData, setFormData] = useState<ApplicationFormData>({
    name: '',
    grade: '',
    school: '',
    contact: '',
    reason: ''
  });

  useEffect(() => {
    gsap.from(".form-container", {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out"
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format WhatsApp message
    const message = `Hello Sir, I would like to apply for classes.
Name: ${formData.name}
Grade: ${formData.grade}
School: ${formData.school}
Contact: ${formData.contact}
Reason: ${formData.reason}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${TUTOR_INFO.whatsapp.replace('+', '')}?text=${encodedMessage}`;
    
    // Open in new tab and redirect locally
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen pt-32 pb-20 relative px-6">
      <div className="container mx-auto max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 group">
          <ChevronLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

        <div className="form-container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join <span className="gradient-text">My Class</span></h1>
            <p className="text-gray-400">Fill out the form below to apply for upcoming batches.</p>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6 mb-10 flex items-start gap-4">
            <Info className="text-blue-400 shrink-0 mt-1" />
            <div className="text-sm text-blue-200/70">
              <span className="font-bold text-blue-400">Privacy Notice:</span> Your data is not stored on our servers. Clicking submit will format a secure message and redirect you directly to the tutor's WhatsApp chat.
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300 ml-1">Student Name</label>
                <input 
                  required
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all placeholder:text-gray-600"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300 ml-1">Current Grade</label>
                <input 
                  required
                  type="text" 
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  placeholder="e.g. Grade 11"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all placeholder:text-gray-600"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300 ml-1">Current School</label>
                <input 
                  required
                  type="text" 
                  name="school"
                  value={formData.school}
                  onChange={handleChange}
                  placeholder="e.g. Royal College"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all placeholder:text-gray-600"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300 ml-1">Parent / Student Contact</label>
                <input 
                  required
                  type="tel" 
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="e.g. +94 7X XXX XXXX"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all placeholder:text-gray-600"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-300 ml-1">Message / Reason for Joining</label>
              <textarea 
                required
                name="reason"
                rows={4}
                value={formData.reason}
                onChange={handleChange}
                placeholder="Briefly explain your academic goals..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all placeholder:text-gray-600 resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full py-5 rounded-xl bg-blue-600 hover:bg-blue-700 font-bold text-lg flex items-center justify-center gap-3 shadow-2xl shadow-blue-600/20 active:scale-[0.98] transition-all group"
            >
              Submit via WhatsApp <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Application;
