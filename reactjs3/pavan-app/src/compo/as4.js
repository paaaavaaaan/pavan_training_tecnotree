
import React, { useState, useEffect } from 'react';

function Slideshow({ images, slideInterval }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, slideInterval);
    return () => clearInterval(interval);
  }, [currentSlide, images.length, slideInterval]);

  return (
    <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
  );
}

export default Slideshow;
