import React, { createElement } from 'react';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';

export const getSectionComponent = (sectionId: string) => {
  const components: { [key: string]: React.FC } = {
    about: About,
    experience: Experience,
    projects: Projects,
  };
  
  return components[sectionId] || (() => createElement('div', null, 'Section not found'));
}; 