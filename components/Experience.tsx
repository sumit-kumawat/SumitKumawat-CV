
import React from 'react';
import Section from './Section';
import { experience, Icons } from '../constants';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Professional Experience">
      <div className="relative container mx-auto px-6">
        <div className="absolute w-1 bg-neutral-200 h-full left-6 transform -translate-x-1/2"></div>
        <div className="space-y-12">
          {experience.map((item, index) => (
            <div key={index} className="relative flex items-start">
              <div className="z-10 w-12 h-12 bg-primary rounded-full flex-shrink-0 flex items-center justify-center text-white mr-6">
                <Icons.Briefcase className="w-6 h-6" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full">
                <h3 className="mb-1 font-bold text-secondary text-lg">{item.role}</h3>
                <p className="text-sm font-semibold text-primary-dark">{item.company} | {item.location}</p>
                <p className="text-sm text-neutral-500 mb-4">{item.period}</p>
                <ul className="space-y-2">
                  {item.points.map((point, pIndex) => (
                    <li key={pIndex} className="flex items-start text-sm text-neutral-600">
                      <Icons.Check className="flex-shrink-0 mr-2 mt-1 h-4 w-4" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
