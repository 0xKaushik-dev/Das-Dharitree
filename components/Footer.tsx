import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { PROFILE_IMAGE } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="max-w-4xl mx-auto px-4 sm:px-6 pb-8">
      <div className="bg-[#111111] rounded-[2.5rem] p-8 md:p-16 text-white overflow-hidden relative">
        
        {/* Call to Action Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-16 border-b border-white/10">
           <div className="text-center md:text-left">
               <h3 className="text-xl font-medium mb-1">Get in Touch</h3>
               <p className="text-gray-400 text-sm">Open to new opportunities.</p>
           </div>
           <a href="tel:7846841511" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors">
               Call Me <Phone size={16} />
           </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {/* Profile */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-white/20 bg-gray-800 flex items-center justify-center">
                    <img src={PROFILE_IMAGE} alt="Dharitree Das" className="w-full h-full object-cover" />
                </div>
                <div>
                    <h3 className="text-xl font-medium">Dharitree Das</h3>
                    <p className="text-gray-400 text-sm">M.A. Political Science</p>
                </div>
            </div>
            <div className="space-y-2 text-gray-400 text-sm">
                <div className="flex items-start gap-2">
                    <MapPin size={16} className="mt-1 flex-shrink-0" />
                    <p>C/O: Jagabandhu Das<br/>At: Odisan, P.O.: Routpada<br/>Dist.: Balasore, Pin: 756028</p>
                </div>
                <div className="flex items-center gap-2">
                    <Mail size={16} />
                    <a href="mailto:dasdharitree60@gmail.com" className="hover:text-white transition-colors">dasdharitree60@gmail.com</a>
                </div>
                <div className="flex items-center gap-2">
                    <Phone size={16} />
                    <a href="tel:7846841511" className="hover:text-white transition-colors">7846841511</a>
                </div>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
             <div>
                <h4 className="text-gray-500 text-sm mb-4 uppercase tracking-wider">Navigation</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                    <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                    <li><a href="#education" className="hover:text-white transition-colors">Education</a></li>
                    <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
                </ul>
             </div>
             <div>
                <h4 className="text-gray-500 text-sm mb-4 uppercase tracking-wider">Legal</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                    <li><span className="text-gray-500">Declaration: True & Verified</span></li>
                </ul>
             </div>
          </div>
        </div>

        <div className="mt-20 text-center md:text-left pt-8 border-t border-white/5 text-xs text-gray-500">
            © 2025 Dharitree Das
        </div>
      </div>
    </footer>
  );
};