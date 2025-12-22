
import React from 'react';
import Section from './Section';
import { education } from '../constants';

const Education: React.FC = () => {
  const edu = education[0]; // Assuming one education entry for simplicity based on CV

  return (
    <Section id="education" title="Education" className="bg-neutral-100">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold text-secondary">{edu.institution}</h3>
        <p className="text-lg font-medium text-neutral-700 mt-2">{edu.degree}</p>
        <div className="mt-4 flex flex-col md:flex-row justify-center items-center gap-x-6 gap-y-2 text-neutral-500">
            <span>{edu.location}</span>
            <span className="hidden md:inline">|</span>
            <span>{edu.period}</span>
            <span className="hidden md:inline">|</span>
            <span>CGPA: {edu.cgpa}</span>
        </div>
      </div>
    </Section>
  );
};

export default Education;
