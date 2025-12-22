
import React from 'react';
import Section from './Section';
import { projects } from '../constants';
import type { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
    <h3 className="text-xl font-semibold text-secondary mb-2">{project.title}</h3>
    <p className="text-neutral-600 flex-grow">{project.description}</p>
  </div>
);

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Key Projects & Achievements" className="bg-neutral-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
