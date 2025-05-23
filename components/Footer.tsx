
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-mona-soft-black text-mona-ivory">
      <div className="container mx-auto px-6 text-center">
        <p className="font-sans text-sm opacity-70">
          &copy; {currentYear} MONAFANTE. Todos los derechos reservados.
        </p>
        <p className="font-serif text-lg mt-2 opacity-90">
          MONAFANTE
        </p>
      </div>
    </footer>
  );
};

export default Footer;
