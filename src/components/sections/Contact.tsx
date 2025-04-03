import React from 'react';
import { contactData } from '../../constants/sectionData';

const Contact: React.FC = () => {
  return (
    <section className="flex flex-col justify-between w-full min-h-[35vh] p-4 sm:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 md:mb-10 space-y-6 md:space-y-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal">
          {contactData.title}
        </h2>
        <a 
          href={`mailto:${contactData.email}`}
          className="text-lg sm:text-xl md:text-2xl underline underline-offset-8 hover:opacity-70 transition-opacity"
        >
          {contactData.email}
        </a>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
        <p className="text-xs sm:text-sm">© {contactData.copyright} {new Date().getFullYear()}</p>
        
        <div className="flex flex-wrap gap-4 sm:gap-6">
          {contactData.socialLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link text-sm sm:text-base"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
