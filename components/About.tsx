
import React from 'react';
import Section from './Section';
import { personalInfo, Icons } from '../constants';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
        <p className="text-lg text-neutral-600 leading-relaxed">
          {personalInfo.summary}
        </p>
        <div className="mt-8">
            <Icons.Signature />
        </div>
      </div>
    </Section>
  );
};

export default About;
