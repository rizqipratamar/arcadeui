import React from "react";

export interface AlertProps {
  children: React.ReactNode;
  variant?: "info" | "success" | "warning" | "error";
  title?: string;
  size?: "sm" | "md" | "lg";
  onClose?: () => void;
  className?: string;
}

const Alert: React.FC<AlertProps> = ({
  children,
  variant = "info",
  title,
  size = "md",
  onClose,
  className = "",
}) => {
  // Base classes for all alerts
  const baseClasses =
    "font-retro border-4 relative transition-all duration-200 ease-in-out transform hover:scale-[1.01] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]";

  // Size classes
  const sizeClasses = {
    sm: "p-2 text-xs",
    md: "p-4 text-sm",
    lg: "p-6 text-base",
  };

  // Variant classes with more vibrant retro colors
  const variantClasses = {
    info: "bg-pixel-blue/20 border-pixel-blue text-pixel-darkBlue after:border-pixel-blue/50 before:bg-pixel-blue/10",
    success:
      "bg-pixel-green/20 border-pixel-green text-pixel-darkGreen after:border-pixel-green/50 before:bg-pixel-green/10",
    warning:
      "bg-pixel-yellow/20 border-pixel-yellow text-pixel-orange after:border-pixel-yellow/50 before:bg-pixel-yellow/10",
    error:
      "bg-pixel-red/20 border-pixel-red text-pixel-darkRed after:border-pixel-red/50 before:bg-pixel-red/10",
  };

  return (
    <div
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className} 
        before:content-[""] before:absolute before:inset-0 before:border-2 before:border-transparent before:pointer-events-none
        after:content-[""] after:absolute after:inset-0 after:border-2 after:border-dashed after:pointer-events-none
      `}
    >
      <div className="flex items-start">
        <div className="flex-1">
          {title && (
            <h3 className="font-pixel mb-2 tracking-wide uppercase">{title}</h3>
          )}
          <div className="leading-relaxed">{children}</div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-4 flex-shrink-0 hover:scale-110 transition-transform duration-200 focus:outline-none"
            aria-label="Close alert"
          >
            <div className="w-5 h-5 relative">
              <div className="absolute inset-0 transform rotate-45">
                <div className="absolute inset-y-0 left-1/2 w-0.5 bg-current -translate-x-1/2" />
              </div>
              <div className="absolute inset-0 transform -rotate-45">
                <div className="absolute inset-y-0 left-1/2 w-0.5 bg-current -translate-x-1/2" />
              </div>
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert;
