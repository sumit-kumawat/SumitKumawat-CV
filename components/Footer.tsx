
import React from 'react';
import { personalInfo, Icons } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-secondary text-neutral-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold text-white">{personalInfo.name}</h3>
            <p className="text-neutral-400 mt-2">{personalInfo.title}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Icons.Email />
                <a href={`mailto:${personalInfo.email}`} className="text-neutral-300 hover:text-primary transition-colors">{personalInfo.email}</a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Icons.Phone />
                <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} className="text-neutral-300 hover:text-primary transition-colors">{personalInfo.phone}</a>
              </div>
               <div className="flex items-center justify-center md:justify-start gap-3">
                <Icons.Location />
                <span className="text-neutral-300">{personalInfo.location}</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-primary transition-transform duration-300 hover:scale-110">
                <Icons.LinkedIn />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-primary transition-transform duration-300 hover:scale-110">
                <Icons.GitHub />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-neutral-700 pt-6 text-center text-neutral-400 text-sm">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
