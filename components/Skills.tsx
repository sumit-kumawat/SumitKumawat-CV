
import React from 'react';
import Section from './Section';
import { skillCategories } from '../constants';

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Core Skills" className="bg-neutral-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-xl font-semibold text-secondary mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
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
