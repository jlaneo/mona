
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'outline', className = '', ...props }) => {
  const baseStyle = "font-sans tracking-wider uppercase text-sm sm:text-base px-8 py-3 rounded-sm transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-mona-gold focus:ring-opacity-50";
  
  let variantStyle = '';
  if (variant === 'primary') {
    variantStyle = "bg-mona-soft-black text-mona-ivory hover:bg-opacity-80";
  } else { // outline
    variantStyle = "border border-mona-soft-black text-mona-soft-black hover:bg-mona-soft-black hover:text-mona-ivory";
  }

  return (
    <button className={`${baseStyle} ${variantStyle} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
