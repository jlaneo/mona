import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '#manifesto', label: 'MANIFESTO' },
  { href: '#ritual', label: 'RITUAL' },
  { href: '#filosofia', label: 'FILOSOFÍA' },
  { href: '#cta-final', label: 'RESERVAR' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    setIsMenuOpen(false); // Close menu on link click
    const id = sectionId.substring(1); // Remove #
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = document.querySelector('header')?.offsetHeight || 80; // h-20 from Tailwind
      const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-12 h-20 transition-all duration-300 ease-in-out bg-mona-ivory shadow-lg`}
      aria-label="Main Navigation"
    >
      <a href="#root" onClick={scrollToTop} className="block z-10" aria-label="MONAFANTE Home">
        <img 
          src="https://i.imgur.com/0IWN4sC.png" 
          alt="MONAFANTE Logo" 
          className="h-14 sm:h-16 object-contain"
        />
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex ml-auto">
        <ul className="flex space-x-6 lg:space-x-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`font-sans text-sm uppercase tracking-wider transition-colors hover:text-mona-gold text-mona-soft-black`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden z-10">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`focus:outline-none transition-colors duration-300 text-mona-soft-black`}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
            className="md:hidden fixed inset-0 bg-mona-ivory pt-20 flex flex-col items-center"
            onClick={() => setIsMenuOpen(false)} // Close menu when clicking overlay
        >
          <nav className="mt-8">
            <ul className="flex flex-col space-y-6 items-center">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="font-sans text-xl uppercase tracking-wider text-mona-soft-black hover:text-mona-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;