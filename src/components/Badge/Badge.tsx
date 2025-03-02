import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}) => {
  // Base classes for all badges
  const baseClasses = 'font-pixel inline-flex items-center justify-center border-2 transition-all duration-200 ease-in-out transform hover:scale-105';
  
  // Size classes
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-xs',
    lg: 'px-4 py-1.5 text-sm',
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-pixel-blue text-pixel-white border-pixel-darkBlue shadow-pixel-sm hover:shadow-pixel',
    secondary: 'bg-pixel-gray text-pixel-white border-pixel-darkGray shadow-pixel-sm hover:shadow-pixel',
    success: 'bg-pixel-green text-pixel-black border-pixel-darkGreen shadow-pixel-sm hover:shadow-pixel',
    danger: 'bg-pixel-red text-pixel-white border-pixel-darkRed shadow-pixel-sm hover:shadow-pixel',
    warning: 'bg-pixel-yellow text-pixel-black border-pixel-orange shadow-pixel-sm hover:shadow-pixel',
    info: 'bg-pixel-purple text-pixel-white border-pixel-pink shadow-pixel-sm hover:shadow-pixel',
  };
  
  return (
    <span
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;