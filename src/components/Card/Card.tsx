import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'outlined' | 'elevated';
  className?: string;
  title?: string;
  footer?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  title,
  footer,
}) => {
  // Base classes for all cards
  const baseClasses = 'font-retro overflow-hidden transition-all duration-200 ease-in-out hover:shadow-pixel-lg';
  
  // Variant classes
  const variantClasses = {
    default: 'bg-pixel-white border-4 border-pixel-darkGray shadow-pixel transform hover:-translate-y-1',
    outlined: 'bg-transparent border-4 border-pixel-darkGray hover:bg-pixel-white/5',
    elevated: 'bg-pixel-white border-4 border-pixel-darkGray shadow-pixel-lg transform hover:-translate-y-2',
  };
  
  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {title && (
        <div className="bg-pixel-darkGray text-pixel-white p-2 font-pixel text-sm border-b-4 border-pixel-black">
          {title}
        </div>
      )}
      <div className="p-4">
        {children}
      </div>
      {footer && (
        <div className="bg-pixel-lightGray p-2 border-t-4 border-pixel-darkGray">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;