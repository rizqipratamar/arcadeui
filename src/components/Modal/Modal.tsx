import React, { useEffect } from 'react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  showCloseButton?: boolean;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  showCloseButton = true,
  className = '',
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Size classes
  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-pixel-black/50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          className={`relative w-full ${sizeClasses[size]} transform overflow-hidden bg-pixel-white border-4 border-pixel-darkGray shadow-pixel transition-all ${className}`}
        >
          {/* Header */}
          {(title || showCloseButton) && (
            <div className="bg-pixel-darkGray text-pixel-white p-3 flex items-center justify-between border-b-4 border-pixel-black">
              {title && <h3 className="font-pixel text-lg">{title}</h3>}
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className="font-pixel text-pixel-white hover:text-pixel-red transition-colors"
                >
                  ×
                </button>
              )}
            </div>
          )}

          {/* Content */}
          <div className="p-6 font-retro">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;