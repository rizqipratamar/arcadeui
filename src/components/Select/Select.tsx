import React from "react";

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  label?: string;
  error?: string;
  variant?: "default" | "success" | "error";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  options: Array<{ value: string; label: string }>;
  className?: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  error,
  variant = "default",
  size = "md",
  fullWidth = false,
  options = [],
  className = "",
  ...props
}) => {
  // Base classes for all selects
  const baseClasses =
    "font-retro border-2 bg-pixel-white transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-pixel-blue/50 appearance-none cursor-pointer";

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
    <div className={`${fullWidth ? "w-full" : ""} relative`}>
      {label && (
        <label className="block font-pixel text-sm text-pixel-black mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClasses} ${className} pr-8`}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg
            className="w-4 h-4 text-pixel-darkGray"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      {error && (
        <p className="mt-1 font-retro text-xs text-pixel-red">{error}</p>
      )}
    </div>
  );
};

export default Select;
