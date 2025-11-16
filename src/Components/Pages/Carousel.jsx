import React, { useState, useEffect, useCallback } from 'react';

// --- SLIDE DATA ---
// Using an array of objects for slide data for easy management.
// You can replace these with your own images and content.
const slides = [
  {
    image: '/assets/Untitleddesign5.png',
  },
  {
    image: '/assets/Untitleddesign3.png',
  },
  {
    image: 'https://images.goway.com/production/hero_image/AdobeStock_197282114.jpeg?VersionId=4hRP4p_4nfcCp9N1kKLynFZY5DYfmfc_',
  },
  {
    image: '/assets/Untitleddesign4.png',
  },
  {
    image: 'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2019/05/Balance-in-Bahrain-feature.jpg',
  },
  {
    image: '/assets/Untitleddesign2.png',
  },
];


// --- MAIN CAROUSEL COMPONENT ---
export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // --- NAVIGATION LOGIC ---
  const goToPrevious = useCallback(() => {
    // If on the first slide, loop to the last slide, otherwise go to the previous one.
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const goToNext = useCallback(() => {
    // If on the last slide, loop to the first slide, otherwise go to the next one.
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  // --- DOT NAVIGATION ---
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // --- AUTOPLAY FEATURE ---
  useEffect(() => {
    // Automatically advance to the next slide every 3 seconds.
    const autoplayInterval = setInterval(goToNext, 3000);
    // Clear the interval when the component unmounts or when currentIndex changes.
    return () => clearInterval(autoplayInterval);
  }, [goToNext]);


  // --- RENDER ---
  return (
    <div className="relative w-full max-w-8xl mx-auto rounded-2xl shadow-2xl font-sans">
      {/* Carousel container with a fixed aspect ratio for responsiveness */}
      <div className="relative overflow-hidden rounded-2xl aspect-[16/7]">
        {/* Map through slides data to create each slide */}
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              {/* Background Image */}
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
              
              {/* Text Content with Animation */}
              <div className={`absolute bottom-0 left-0 w-full p-6 md:p-12 text-white bg-gradient-to-t from-black/80 to-transparent transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                <h3 className={`text-2xl md:text-4xl font-bold mb-2 transform transition-all duration-500 delay-200 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  {slide.title}
                </h3>
                <p className={`text-md md:text-lg opacity-90 transform transition-all duration-500 delay-300 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  {slide.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition-all duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-white hover:scale-110"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition-all duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-white hover:scale-110"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Bottom Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`
              h-3 rounded-full bg-white/50
              transition-all duration-500 ease-in-out
              ${currentIndex === slideIndex ? 'w-8 bg-white' : 'w-3 hover:bg-white/80'}
            `}
            aria-label={`Go to slide ${slideIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
}