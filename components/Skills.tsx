
import React from 'react';
import Section from './Section';
import { skillCategories } from '../constants';

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Core Skills" className="bg-neutral-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
            <category.icon className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-secondary mb-4 h-14 flex items-center">{category.title}</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {category.skills.map((skill) => (
                <span key={skill.name} className="bg-primary/10 text-primary-dark text-sm font-medium px-3 py-1 rounded-full">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
