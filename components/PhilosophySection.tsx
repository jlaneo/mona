
import React from 'react';
import ScrollReveal from './ScrollReveal';

const PHILOSOPHY_STATEMENTS = [
  {
    id: 1,
    text: "No competimos. Dejamos huella.",
    image: "https://i.imgur.com/XXmimG6.png" 
  },
  {
    id: 2,
    text: "El cliente MONAFANTE no compra...\n...adopta!.", // Updated text
    image: "https://i.imgur.com/1e14QM9.png"
  },
  {
    id: 3,
    text: "El lujo es un capricho sin justificación.\nY eso está bien.", 
    image: "https://i.imgur.com/sKS66Rg.png"
  }
];

const PhilosophySection: React.FC = () => {
  return (
    <section id="filosofia" className="py-20 sm:py-32 bg-mona-ivory">
      <div className="container mx-auto px-6">
        <ScrollReveal>
           <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-mona-soft-black text-center mb-16 sm:mb-24">
            Nuestra Filosofía
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {PHILOSOPHY_STATEMENTS.map((statement, index) => (
            <ScrollReveal key={statement.id} delay={index * 200}>
              <div className="group bg-mona-pearl p-8 rounded-sm shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
                <div className="aspect-[4/3] mb-6 overflow-hidden rounded-sm">
                  <img src={statement.image} alt={statement.text.split('\n')[0]} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <p className="font-serif text-xl sm:text-2xl text-mona-soft-black leading-relaxed flex-grow text-center whitespace-pre-line">
                  “{statement.text}”
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;