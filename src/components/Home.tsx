import React from 'react';
import Navbar from './Navbar';
import { useDarkMode } from '../context/DarkModeContext';
import { navigationLinks } from '../constants/navigation';
import './Navbar.css';
import './Home.css';
import { getSectionComponent } from '../utils/sectionHelpers';

const Home: React.FC = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={`home-container ${darkMode ? 'home-dark' : 'home-light'}`}>
      <Navbar />
      <header className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-7xl">
          <div className="space-y-4 md:space-y-8 w-full">
            <div className="flex justify-start w-full">
              <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-bold tracking-tighter">PARTH</h1>
            </div>
            <div className="flex justify-end w-full">
              <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-bold tracking-tighter">PATEL</h1>
            </div>
          </div>
          <div className="flex items-center justify-center mt-8 md:mt-16 text-center">
            <p className="text-base sm:text-lg md:text-lg lg:text-xl text-center max-w-2xl">
              Passionate about building efficient, high-performance software. With 4+ years of experience, I specialize in backend development, database optimization, and system scalability.
            </p>
          </div>
        </div>
      </header>
      
      {navigationLinks.map((section) => {
        const SectionComponent = getSectionComponent(section.id);
        return (
          <section
            key={section.id}
            id={section.id}
            className="content-section min-h-screen mt-10 mb-10"
          >
            <div className="max-w-7xl">
              <div className="flex justify-start mb-12 border-b-1 border-bottom-white">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter p-2">{section.label}</h2>
              </div>
              <div className="section-content">
                <SectionComponent />
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Home;