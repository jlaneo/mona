
import React, { useState } from 'react';
import Button from './Button';
import ScrollReveal from './ScrollReveal';

interface FormErrors {
  name?: string;
  email?: string;
}

const CtaSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!name.trim()) {
      newErrors.name = 'El nombre es obligatorio.';
    }
    if (!email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'El formato del correo electrónico no es válido.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Form Submitted:', { name, email });
      // Here you would typically send data to a backend
      setIsSubmitted(true);
      setName('');
      setEmail('');
      setErrors({});
      // Optionally, reset isSubmitted after some time
      // setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <section id="cta-final" className="py-20 sm:py-32 bg-mona-pearl text-center">
      <div className="container mx-auto px-6 max-w-lg">
        <ScrollReveal delay={0}>
          <h2 className="font-serif text-3xl sm:text-4xl text-mona-soft-black mb-4">
            Reserva Tu Experiencia MONAFANTE
          </h2>
          <p className="font-sans text-base sm:text-lg text-mona-soft-black opacity-80 mb-10">
            Únete a nuestra lista exclusiva. Serás de los primeros en saber cuándo están disponibles las próximas tartas.
          </p>
        </ScrollReveal>

        {isSubmitted ? (
          <ScrollReveal delay={100}>
            <div className="bg-mona-ivory p-8 rounded-sm shadow-lg text-center">
              <h3 className="font-serif text-2xl text-mona-gold mb-3">¡Gracias por tu interés!</h3>
              <p className="font-sans text-mona-soft-black">
                Has sido añadido a nuestra lista. Nos pondremos en contacto pronto.
              </p>
            </div>
          </ScrollReveal>
        ) : (
          <ScrollReveal delay={100}>
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className="block font-sans text-sm font-medium text-mona-soft-black text-left mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full px-4 py-3 font-sans bg-white border rounded-sm text-mona-soft-black placeholder-gray-400 focus:outline-none focus:ring-2  transition-colors duration-300 ${
                    errors.name ? 'border-red-500 focus:ring-red-400' : 'border-mona-gold focus:ring-mona-gold focus:border-mona-gold'
                  }`}
                  placeholder="Tu nombre completo"
                  aria-describedby={errors.name ? "name-error" : undefined}
                  aria-invalid={!!errors.name}
                />
                {errors.name && <p id="name-error" className="mt-1 text-xs text-red-600 text-left">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block font-sans text-sm font-medium text-mona-soft-black text-left mb-1">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-4 py-3 font-sans bg-white border rounded-sm text-mona-soft-black placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors duration-300 ${
                    errors.email ? 'border-red-500 focus:ring-red-400' : 'border-mona-gold focus:ring-mona-gold focus:border-mona-gold'
                  }`}
                  placeholder="tu.email@ejemplo.com"
                  aria-describedby={errors.email ? "email-error" : undefined}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p id="email-error" className="mt-1 text-xs text-red-600 text-left">{errors.email}</p>}
              </div>

              <Button type="submit" variant="primary" className="w-full text-base sm:text-lg px-10 py-3.5">
                UNIRME A LA LISTA
              </Button>
            </form>
          </ScrollReveal>
        )}

        <ScrollReveal delay={isSubmitted ? 100 : 300}>
          <p className="mt-12 font-serif text-lg sm:text-xl text-mona-soft-black opacity-90">
            No siempre está disponible.<br />Pero siempre merece la espera.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CtaSection;
