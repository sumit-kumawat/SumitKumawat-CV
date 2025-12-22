
import React from 'react';
import { personalInfo, Icons } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="py-20 md:py-32 bg-neutral-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight">
              Hi, I'm <span className="text-primary">{personalInfo.name}</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-neutral-600 mt-2">{personalInfo.title}</h2>
            <div className="mt-6 flex flex-wrap justify-center md:justify-start items-center gap-x-6 gap-y-2 text-neutral-500">
                <div className="flex items-center gap-2">
                    <Icons.Location />
                    <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Icons.Email />
                    <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">{personalInfo.email}</a>
                </div>
            </div>
            <div className="mt-8 flex justify-center md:justify-start space-x-4">
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary transition-transform duration-300 hover:scale-110">
                    <Icons.LinkedIn />
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary transition-transform duration-300 hover:scale-110">
                    <Icons.GitHub />
                </a>
            </div>
          </div>
          <div className="md:w-1/3">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-full transform rotate-12 transition duration-500 hover:rotate-0 hover:scale-105"></div>
              <div className="absolute inset-2 bg-primary/40 rounded-full transform -rotate-12 transition duration-500 hover:rotate-0 hover:scale-105"></div>
              <img 
                src={personalInfo.imageUrl} 
                alt={personalInfo.name} 
                className="absolute inset-0 w-full h-full object-cover rounded-full shadow-lg border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
