import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  className = '',
}) => {
  // Base classes for all buttons
  const baseClasses = 'font-pixel inline-block text-center cursor-pointer border-4 shadow-pixel transform transition-all duration-200 ease-in-out hover:translate-y-0.5 active:translate-y-1';
  
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-pixel-blue text-pixel-white border-pixel-darkBlue hover:bg-pixel-darkBlue hover:shadow-pixel-lg',
    secondary: 'bg-pixel-gray text-pixel-white border-pixel-darkGray hover:bg-pixel-darkGray hover:shadow-pixel-lg',
    danger: 'bg-pixel-red text-pixel-white border-pixel-darkRed hover:bg-pixel-darkRed hover:shadow-pixel-lg',
    success: 'bg-pixel-green text-pixel-black border-pixel-darkGreen hover:bg-pixel-darkGreen hover:shadow-pixel-lg',
  };
  
  // Disabled state
  const disabledClasses = disabled ? 'opacity-60 cursor-not-allowed transform-none hover:translate-y-0' : ''
  
  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;