import React, { useState, useEffect } from 'react';
import './Home.css';

const slides = [
  {
    img: '/img1.webp',
    title: 'Insurance',
    type: "LIC",
    description: 'Connecting people through Insurance',
  },
  {
    img: '/img2.webp',
    title: 'Investment',
    type: "MUTUAL FUNDS",
    description: 'Securing your financial future',
  },
  {
    img: '/img3.webp',
    title: 'Retirement',
    type: "PENSION PLANS",
    description: 'Planning for a comfortable retirement',
  },
  {
    img: '/img5.webp',
    title: 'Health Insurance',
    type: "HEALTHY",
    description: 'Ensuring your health and well-being with LIC health insurance',
  },
  {
    img: '/img4.webp',
    title: 'Savings',
    type: "SAVINGS PLANS",
    description: 'Building your wealth with disciplined savings',
  },
  

];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [thumbnailSlides, setThumbnailSlides] = useState(slides);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 800); // Duration matching the CSS transition

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );

      // Thumbnail transition logic
      setThumbnailSlides((prevSlides) => {
        const updatedSlides = [...prevSlides];
        const firstSlide = updatedSlides.shift();
        updatedSlides.push(firstSlide);
        return updatedSlides;
      });
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );

      // Reverse thumbnail transition logic
      setThumbnailSlides((prevSlides) => {
        const updatedSlides = [...prevSlides];
        const lastSlide = updatedSlides.pop();
        updatedSlides.unshift(lastSlide);
        return updatedSlides;
      });
    }
  };

  return (
    <div className="slider">
      <div className="list">
        {slides.map((slide, index) => (
          <div
            className={`item ${index === currentIndex ? 'active' : 'hidden'}`}
            key={index}
          >
            <img src={slide.img} alt={slide.title} />
            <div className="content">
              <div className="title">{slide.title}</div>
              <div className="type">{slide.type}</div>
              <div className="description">{slide.description}</div>
              <div className="button">
                <button>SEE MORE</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="thumbnail">
        {thumbnailSlides.map((slide, index) => (
          <div
            className={`item ${index === 0 ? 'active' : ''}`}
            key={index}
          >
            <img src={slide.img} alt={slide.title} />
          </div>
        ))}
      </div>

      <div className="nextPrevArrows">
        <button className="prev" onClick={prevSlide}>
          &lt;
        </button>
        <button className="next" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Home;
