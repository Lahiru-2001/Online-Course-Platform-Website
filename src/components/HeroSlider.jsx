import React, { useState, useEffect, useRef } from 'react';

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);
  const slides = [
    { id: 1, src: 'Asseset/3.png', alt: 'Limited Time Offer: Last chance, save 50%! Sale ends tonight.' },
    { id: 2, src: 'Asseset/4.png', alt: 'Bundle & Save: Combo discount, 2 courses for $99!' },
    { id: 3, src: 'Asseset/5.png', alt: 'Unlock Your Potential: Annual pass sale, unlock all access!' },
  ];
  
  const gap = 24; // Gap in pixels matching CSS

  const updateSlidePosition = () => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const slidesElements = track.children;
    if (slidesElements.length === 0) return;
    
    const slideWidth = slidesElements[0].getBoundingClientRect().width;
    const offset = currentIndex * (slideWidth + gap);
    
    const containerWidth = track.parentElement.getBoundingClientRect().width;
    const totalTrackWidth = slides.length * slideWidth + (slides.length - 1) * gap;
    
    if (offset + containerWidth > totalTrackWidth && totalTrackWidth > containerWidth) {
      const maxOffset = totalTrackWidth - containerWidth;
      track.style.transform = `translateX(-${maxOffset}px)`;
    } else {
      track.style.transform = `translateX(-${offset}px)`;
    }
  };

  useEffect(() => {
    updateSlidePosition();
    
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        updateSlidePosition();
      }, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="carousel-section" id="hero-slider" aria-label="Special Offers Carousel">
      <div className="carousel-viewport">
        <div className="carousel-track" ref={trackRef}>
          {slides.map((slide) => (
            <div className="carousel-slide" key={slide.id} id={`slide-${slide.id}`}>
              <img src={slide.src} alt={slide.alt} />
            </div>
          ))}
        </div>

        <button className="carousel-nav-btn" id="next-slide-btn" onClick={handleNext} aria-label="Next slide">
          <svg viewBox="0 0 24 24">
            <path d="M5.5 5.5L11.5 11.5L5.5 17.5M12.5 5.5L18.5 11.5L12.5 17.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </button>
      </div>

      <div className="carousel-indicators" id="slider-indicators">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
            role="button"
            aria-label={`Go to slide ${index + 1}`}
          ></div>
        ))}
      </div>
    </section>
  );
}
