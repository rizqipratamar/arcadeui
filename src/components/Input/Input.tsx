import React from "react";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  variant?: "default" | "success" | "error";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  variant = "default",
  size = "md",
  fullWidth = false,
  className = "",
  ...props
}) => {
  // Base classes for all inputs
  const baseClasses =
    "font-retro border-2 bg-pixel-white transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-pixel-blue/50";

  // Size classes
  const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  };

  // Variant classes
  const variantClasses = {
    default: "border-pixel-darkGray hover:border-pixel-blue",
    success: "border-pixel-darkGreen hover:border-pixel-green",
    error: "border-pixel-darkRed hover:border-pixel-red",
  };

  // Width classes
  const widthClasses = fullWidth ? "w-full" : "";

  return (
    <div className={`${fullWidth ? "w-full" : ""}`}>
      {label && (
        <label className="block font-pixel text-sm text-pixel-black mb-1">
          {label}
        </label>
      )}
      <input
        className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClasses} ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 font-retro text-xs text-pixel-red">{error}</p>
      )}
    </div>
  );
};

export default Input;
