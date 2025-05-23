import React, { useState, useEffect } from 'react';
import Button from './Button';
import ScrollReveal from './ScrollReveal';

const HERO_IMAGES = [
  'https://i.imgur.com/mACX2dh.png',
  'https://i.imgur.com/56sUHD5.png',
  'https://i.imgur.com/hpf9Dv3.png',
  'https://i.imgur.com/b7HDNLX.png',
];
const IMAGE_INTERVAL = 5000; // 5 seconds
const FADE_DURATION = 1000; // ms for image transition

const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, IMAGE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const handleReserveClick = () => {
    // Placeholder for reservation logic or scroll to a form/contact section if implemented
    console.log("Reservar mi experiencia clicked");
    const ctaSection = document.getElementById('cta-final');
    if (ctaSection) {
      const headerOffset = document.querySelector('header')?.offsetHeight || 80;
      const elementPosition = ctaSection.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero"
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://i.imgur.com/yD6afH7.png')" }}
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-mona-ivory opacity-75 z-0"></div>
      
      {/* Wrapper to control padding, max-width, and vertical centering of the content block */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 flex flex-col justify-center min-h-screen pt-28 pb-12 md:pt-24">
        
        {/* Two-column layout container */}
        <div className="flex flex-col md:flex-row md:items-start w-full md:space-x-8 lg:space-x-12 xl:space-x-16">
          
          {/* Text Content Area (Left Column) */}
          <div className="w-full md:w-1/2 lg:w-5/12 xl:w-[45%] text-left mb-10 md:mb-0">
            <ScrollReveal delay={200}>
              <h1 id="hero-heading" className="font-serif text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-mona-soft-black mb-6 sm:mb-8 leading-tight drop-shadow-md">
                MONAFANTE no quiere ser la mejor tarta de queso.<br />Quiere ser la elegida.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={500}>
              <p className="font-sans text-lg sm:text-xl md:text-xl lg:text-2xl text-mona-soft-black opacity-90 mb-10 sm:mb-12 drop-shadow-sm">
                No compite por precio ni ranking.<br />Compite por emoción.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={800}>
              <Button 
                onClick={handleReserveClick} 
                variant="outline"
              >
                Reservar mi experiencia
              </Button>
            </ScrollReveal>
          </div>

          {/* Image Carousel Area (Right Column) */}
          <div className="w-full md:w-1/2 lg:w-7/12 xl:w-[55%] flex justify-center md:justify-start">
            <ScrollReveal delay={400} className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Frame for the carousel */}
              <div className="bg-mona-ivory p-2 rounded-xl shadow-lg"> {/* Changed p-8 to p-2 */}
                <div className="relative aspect-square sm:aspect-[4/3] w-full overflow-hidden rounded-lg bg-mona-pearl/30">
                  {HERO_IMAGES.map((src, index) => (
                    <img
                      key={src}
                      src={src}
                      alt={`Monafante Cheesecake Image ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out`}
                      style={{
                        opacity: index === currentImageIndex ? 1 : 0,
                        transitionDuration: `${FADE_DURATION}ms`,
                      }}
                      aria-hidden={index !== currentImageIndex}
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;