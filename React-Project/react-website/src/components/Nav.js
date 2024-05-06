import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '11vh',
    fontFamily: 'Poppins, sans-serif',
    backgroundColor: '#3a1a1f',
  },
  navLinks: {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
    fontSize: '1.5rem',
  },
  a: {
    color: 'grey',
    textDecoration: 'none',
    textDecorationColor: 'white',
    transition: 'all 300ms ease',
  },
  aHover: {
    color: '#ce951c',
    textDecoration: 'underline',
    textUnderlineOffset: '1rem',
  },
  logo: {
    fontSize: '2rem',
    color: 'grey',
    cursor: 'default',
  },
  hamburgerNav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
  },
  hamburgerMenu: {
    position: 'relative',
    display: 'inline-block',
  },
  hamburgerIcon: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '24px',
    width: '30px',
    cursor: 'pointer',
  },
  hamburgerIconBar: {
    width: '100%',
    height: '3px',
    backgroundColor: 'white',
  },
  menuLinks: {
    display: 'block',
    position: 'absolute',
    top: '100%',
    right: 0,
    backgroundColor: '#3a1a1f',
    padding: '1rem',
    textAlign: 'right',
  },
};

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {!isMobile ? (
        <nav id="desktop-nav" style={styles.nav}>
          <div className="logo" style={styles.logo}>
            Nathaniel Von Hartlefen
          </div>
          <div>
            <ul className="nav-links" style={styles.navLinks}>
              <li>
                <Link to="/about" style={styles.a}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/experience" style={styles.a}>
                  Experience
                </Link>
              </li>
              <li>
                <Link to="/projects" style={styles.a}>
                  Project
                </Link>
              </li>
              <li>
                <Link to="/contact" style={styles.a}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        <nav id="hamburger-nav" style={styles.hamburgerNav}>
          <div className="logo" style={styles.logo}>
            Nathaniel Von Hartlefen
          </div>
          <div className="hamburger-menu" style={styles.hamburgerMenu}>
            <div
              className="hamburger-icon"
              style={styles.hamburgerIcon}
              onClick={toggleMenu}
            >
              <span style={styles.hamburgerIconBar}></span>
              <span style={styles.hamburgerIconBar}></span>
              <span style={styles.hamburgerIconBar}></span>
            </div>
            {isMenuOpen && (
              <div className="menu-links" style={styles.menuLinks}>
                <li>
                  <Link to="/about" onClick={toggleMenu}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/experience" onClick={toggleMenu}>
                    Experience
                  </Link>
                </li>
                <li>
                  <Link to="/projects" onClick={toggleMenu}>
                    Project
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={toggleMenu}>
                    Contact
                  </Link>
                </li>
              </div>
            )}
          </div>
        </nav>
      )}
    </>
  );
}

export default Nav;