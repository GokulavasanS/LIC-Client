import React, { useState, useEffect } from'react';
import './Home.css';

const slides = [
  {
    img: '/img1.webp',
    title: 'Insurance',
    type: 'LIC',
    description: 'Connecting people through Insurance',
  },
  {
    img: '/img2.webp',
    title: 'Insurance',
    type: 'LIC',
    description: 'Connecting people through Insurance',
  },
  {
    img: '/img3.webp',
    title: 'Insurance',
    type: 'LIC',
    description: 'Connecting people through Insurance',
  },
  {
    img: '/img4.webp',
    title: 'Insurance',
    type: 'LIC',
    description: 'Connecting people through Insurance',
  },
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

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
        prevIndex === slides.length - 1? 0 : prevIndex + 1
      );
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0? slides.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div className="slider">
      <div className="list">
        {slides.map((slide, index) => (
          <div
            className={`item ${index === currentIndex? 'active' : 'hidden'}`}
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
        {slides.map((slide, index) => (
          <div
            className={`item ${index === currentIndex? 'active' : ''}`}
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