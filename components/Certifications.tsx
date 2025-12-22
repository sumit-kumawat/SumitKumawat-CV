
import React from 'react';
import Section from './Section';
import { certifications } from '../constants';
import type { Certification } from '../types';

const CertificationCard: React.FC<{ cert: Certification }> = ({ cert }) => (
  <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
    <h3 className="font-semibold text-lg text-secondary">{cert.title}</h3>
    <p className="text-neutral-500">{cert.issuer}</p>
    <p className="text-sm text-primary font-medium mt-2">{cert.year}</p>
  </div>
);

const Certifications: React.FC = () => {
  return (
    <Section id="certifications" title="Certifications">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <CertificationCard key={index} cert={cert} />
        ))}
      </div>
    </Section>
  );
};

export default Certifications;
