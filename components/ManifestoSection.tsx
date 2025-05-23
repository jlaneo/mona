import React, { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

interface ManifestoItem {
  slogan: string;
  poeticLine: string;
}

const MANIFESTO_ITEMS: ManifestoItem[] = [
  { 
    slogan: "El lujo no se comparte. Se espera.", 
    poeticLine: "Anticipación que madura el deseo, el verdadero valor de lo exquisito." 
  },
  { 
    slogan: "Cada ingrediente es una promesa.", 
    poeticLine: "Un pacto con la tierra, la pureza convertida en sabor esencial." 
  },
  { 
    slogan: "MONAFANTE no entra por los ojos. Entra por la curiosidad.", 
    poeticLine: "Un misterio que invita a desvelar, capa por capa, su alma única." 
  },
  { 
    slogan: "No se compra. Se desea.", 
    poeticLine: "El anhelo tejido en la espera, un tesoro esquivo para el paladar." 
  }
];

const PHRASE_DISPLAY_DURATION = 10000; // ms - Changed from 4500 to 10000
const FADE_TRANSITION_DURATION = 1000; // ms

const ManifestoSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % MANIFESTO_ITEMS.length);
    }, PHRASE_DISPLAY_DURATION + FADE_TRANSITION_DURATION / 2); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section 
      id="manifesto" 
      className="min-h-screen flex flex-col justify-center p-6 sm:p-12 relative"
      style={{ 
        backgroundImage: "url('https://i.imgur.com/uuN9a8s.png')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
      aria-labelledby="manifesto-heading"
    >
      <div className="absolute inset-0 bg-mona-ivory opacity-70 z-0"></div> 
      
      <div className="w-full max-w-3xl mx-auto text-center relative z-10 pt-20">
        <h2 id="manifesto-heading" className="sr-only">Manifiesto</h2>
        <ScrollReveal delay={200} className="w-full">
          <div className="relative min-h-[150px] sm:min-h-[200px] md:min-h-[280px] flex items-center justify-center"> {/* Adjusted min-h slightly for md */}
            {MANIFESTO_ITEMS.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity ease-in-out px-4`}
                style={{
                  opacity: index === currentIndex ? 1 : 0,
                  transitionDuration: `${FADE_TRANSITION_DURATION}ms`,
                  pointerEvents: index === currentIndex ? 'auto' : 'none', 
                }}
                aria-hidden={index !== currentIndex}
              >
                <p className="font-serif text-3xl sm:text-4xl md:text-5xl text-mona-soft-black leading-snug sm:leading-normal">
                  {item.slogan}
                </p>
                <p className="font-sans text-base sm:text-lg text-mona-soft-black opacity-80 mt-3 sm:mt-4 leading-relaxed">
                  {item.poeticLine}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ManifestoSection;