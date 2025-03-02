import React, { useState, useEffect, useCallback } from "react";

interface CarouselProps {
  /** Array of items to display in the carousel */
  items: React.ReactNode[];
  /** Duration in milliseconds between auto-sliding. Set to 0 to disable */
  autoPlayInterval?: number;
  /** Whether to show navigation arrows */
  showArrows?: boolean;
  /** Whether to show pagination dots */
  showDots?: boolean;
  /** Additional CSS classes */
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlayInterval = 0,
  showArrows = true,
  showDots = true,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 300);
    },
    [isTransitioning]
  );

  const nextSlide = useCallback(() => {
    const nextIndex = (currentIndex + 1) % items.length;
    goToSlide(nextIndex);
  }, [currentIndex, items.length, goToSlide]);

  const prevSlide = useCallback(() => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    goToSlide(prevIndex);
  }, [currentIndex, items.length, goToSlide]);

  useEffect(() => {
    if (autoPlayInterval > 0) {
      const interval = setInterval(nextSlide, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlayInterval, nextSlide]);

  return (
    <div
      className={`relative overflow-hidden border-2 border-pixel-darkGray ${className}`}
    >
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0"
            style={{ scrollSnapAlign: "start" }}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {showArrows && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 font-pixel text-pixel-black hover:text-pixel-blue px-4 py-2 bg-pixel-white/80 border-2 border-pixel-darkGray"
            disabled={isTransitioning}
          >
            ◄
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 font-pixel text-pixel-black hover:text-pixel-blue px-4 py-2 bg-pixel-white/80 border-2 border-pixel-darkGray"
            disabled={isTransitioning}
          >
            ►
          </button>
        </>
      )}

      {/* Pagination Dots */}
      {showDots && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 border-2 border-pixel-darkGray ${
                index === currentIndex
                  ? "bg-pixel-blue"
                  : "bg-pixel-white hover:bg-pixel-blue/10"
              }`}
              disabled={isTransitioning}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;