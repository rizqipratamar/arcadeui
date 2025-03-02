import React from 'react';

export interface AvatarProps {
  /** Source URL for the avatar image */
  src?: string;
  /** Alternative text for the avatar */
  alt?: string;
  /** Fallback text to display when image fails to load or no src provided */
  fallback?: string;
  /** Size of the avatar */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Shape of the avatar */
  shape?: 'square' | 'circle';
  /** Additional CSS classes */
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = '',
  fallback,
  size = 'md',
  shape = 'circle',
  className = '',
}) => {
  const [error, setError] = React.useState(false);

  // Size classes mapping
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg',
  };

  // Shape classes mapping
  const shapeClasses = {
    circle: 'rounded-full',
    square: 'rounded-none',
  };

  // Base classes for all avatars
  const baseClasses = 'inline-flex items-center justify-center border-2 border-pixel-darkGray bg-pixel-white overflow-hidden transition-all duration-200 hover:shadow-pixel';

  // Generate initials from fallback text
  const getInitials = (text: string) => {
    return text
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const handleError = () => {
    setError(true);
  };

  return (
    <div
      className={`${baseClasses} ${sizeClasses[size]} ${shapeClasses[shape]} ${className}`}
    >
      {src && !error ? (
        <img
          src={src}
          alt={alt}
          onError={handleError}
          className="w-full h-full object-cover"
        />
      ) : fallback ? (
        <span className="font-pixel text-pixel-black">
          {getInitials(fallback)}
        </span>
      ) : (
        <span className="font-pixel text-pixel-black">?</span>
      )}
    </div>
  );
};

export default Avatar;