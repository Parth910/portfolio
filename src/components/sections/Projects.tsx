import React from 'react';
import { projectsData } from '../../constants/sectionData';

const Projects: React.FC = () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectsData.map((project, index) => (
        <div 
          key={index} 
          className="rounded-lg overflow-hidden
                     border border-gray-200 dark:border-gray-700
                     shadow-sm hover:shadow-md transition-shadow duration-300 p-1" 
        >
          <div className="relative">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-52 object-cover rounded-lg"
            />
          </div>
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-bold ">{project.title}</h3>
            <p className="text-sm">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 rounded-full text-xs font-medium
                           bg-gray-100 dark:bg-gray-800 
                           text-gray-800 dark:text-gray-200
                           border border-gray-200 dark:border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
            {/* <div className="flex gap-4 pt-2">
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors 
                           text-sm flex items-center gap-1"
                >
                  {link.type}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects; 