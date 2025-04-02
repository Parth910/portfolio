import React from 'react';
import { experienceData } from '../../constants/sectionData';

const Experience: React.FC = () => {
  return (
    <div className="space-y-8 md:space-y-12">
      {experienceData.map((experience, index) => (
        <div 
          key={index} 
          className="relative pl-6 md:pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 
                     before:w-[2px] before:bg-gradient-to-b before:from-gray-200 before:to-gray-300 
                     dark:before:from-gray-700 dark:before:to-gray-600 
                     hover:before:bg-primary-500 transition-all duration-300"
        >
          <div className="absolute -left-[3px] top-0 h-2 w-2 rounded-full bg-gray-300 
                        dark:bg-gray-600 group-hover:bg-primary-500" />
          
          <div className="space-y-2 md:space-y-3">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
              <h3 className="text-lg md:text-xl font-medium">
                {experience.company}
              </h3>
              <span className="text-xs md:text-sm font-light italic">
                {experience.period}
              </span>
            </div>

            <p className="text-base md:text-lg text-left">
              {experience.position}
            </p>

            <ul className="space-y-1.5 md:space-y-2 ml-2 md:ml-4 text-left">
              {experience.responsibilities.map((item, i) => (
                <li key={i} 
                    className="text-sm md:text-base relative pl-4
                               before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 
                               before:bg-gray-400 dark:before:bg-gray-500 before:rounded-full text-left"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 md:gap-2 pt-2">
              {experience.technologies.map((tech, i) => (
                <span 
                  key={i} 
                  className="text-xs md:text-sm px-3 md:px-4 py-1 md:py-1.5 rounded-md 
                           border border-gray-200 dark:border-gray-700
                           bg-transparent
                           transition-all duration-300 ease-in-out"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience; 