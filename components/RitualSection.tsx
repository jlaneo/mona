import React from 'react';
import { RITUAL_STEPS } from '../constants';
import ScrollReveal from './ScrollReveal';
import { IconProps } from '../types';

const RitualSection: React.FC = () => {
  return (
    <section id="ritual" className="py-20 sm:py-32 bg-mona-pearl">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-mona-soft-black text-center mb-16 sm:mb-24">
            El Ritual MONAFANTE
          </h2>
        </ScrollReveal>
        <div className="max-w-3xl mx-auto relative">
          {/* Optional: Vertical line for timeline effect */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-mona-gold opacity-30 hidden md:block transform -translate-x-1/2"></div>

          {RITUAL_STEPS.map((step, index) => {
            const isEven = index % 2 === 0;
            const IconComponent = step.Icon as React.FC<IconProps>;
            return (
              <ScrollReveal key={step.id} delay={index * 150}>
                <div className={`flex md:items-center mb-12 md:mb-16 group ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Icon Container */}
                  <div className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full bg-mona-ivory border border-mona-gold border-opacity-50 flex items-center justify-center mb-4 md:mb-0 shadow-lg transition-all duration-300 group-hover:scale-105 ${isEven ? 'md:mr-8' : 'md:ml-8'}`}>
                    <IconComponent className="w-10 h-10 md:w-12 md:h-12 text-mona-gold" />
                  </div>
                  {/* Text Content */}
                  <div className={`relative bg-mona-ivory p-6 rounded-md shadow-lg flex-1 transition-all duration-300 group-hover:shadow-xl ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                    <div className={`absolute top-1/2 -mt-2 w-4 h-4 bg-mona-ivory transform rotate-45 hidden md:block ${isEven ? '-left-2' : '-right-2 shadow-none'}`}></div>
                    <h3 className="font-serif text-xl sm:text-2xl text-mona-soft-black mb-2">{step.title}</h3>
                    <p className="font-sans text-sm sm:text-base text-mona-soft-black opacity-80">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RitualSection;