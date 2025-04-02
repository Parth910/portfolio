import React from 'react';
import { aboutData } from '../../constants/sectionData';

const About: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
        {/* Description Section */}
        <div className="w-full lg:w-1/2 shrink-0">
          <p className="text-base sm:text-lg leading-relaxed text-left mb-5">
            {aboutData.description}
          </p>

          {aboutData.description1 &&  <p className="text-base sm:text-lg leading-relaxed text-left mb-5">
            {aboutData.description1}
          </p>}

          {aboutData.description2 &&  <p className="text-base sm:text-lg leading-relaxed text-left">
            {aboutData.description2}
          </p>}
        </div>

        {/* Skills Section */}
        <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8 text-center lg:text-left">
          <div className="space-y-4 sm:space-y-6">
            {aboutData.skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-sm uppercase tracking-wider font-medium">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {skill.items.map((item, i) => (
                    <span 
                      key={i} 
                      className="text-sm px-4 py-1.5 rounded-md border border-gray-200 dark:border-gray-700
                        bg-transparent
                        
                        transition-all duration-300 ease-in-out"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 