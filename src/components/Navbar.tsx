import React from 'react';
import { navigationLinks, contactInfo } from '../constants/navigation';
import { useDarkMode } from '../context/DarkModeContext';
import './Navbar.css';

interface NavbarProps {
  // Define any props if needed
}

const Navbar: React.FC<NavbarProps> = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  // React.useEffect(() => {
  //   const handleScroll = () => {
  //     const isScrolled = window.scrollY > 0;
  //     setScrolled(isScrolled);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);


  // Add click outside handler to close menu
  React.useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (menuOpen && !target.closest('.navbar-container')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, [menuOpen]);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${darkMode ? 'navbar-dark' : 'navbar-light'} ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          <ul className={`nav-menu ${menuOpen ? 'active' : 'inactive'}`}>
            {navigationLinks.map((link) => (
              <li key={link.id} className="nav-item">
                <a href={link.path} className="nav-link">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-right">
          <a href={`mailto:${contactInfo.email}`} className="nav-email">
            {contactInfo.email}
          </a>
          <button 
            className="dark-mode-toggle" 
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>

        {/* <div className="mobile-menu-toggle mobile-only" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'open' : ''}`} />
          <div className={`bar ${menuOpen ? 'open' : ''}`} />
          <div className={`bar ${menuOpen ? 'open' : ''}`} />
        </div> */}

        <button 
          className="hamburger-menu" 
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
