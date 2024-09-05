import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const slides = [
  {
    img: '/001.png',
    title: 'Insurance',
    type: 'LIC',
    description: 'Connecting people through insurance.',
  },
  {
    img: '/002.png',
    title: 'Exclusive Offers',
    type: 'LIC',
    description: 'Join hands with us and enjoy exclusive free foreign trips.',
  },
  
  {
    img: '/003.png',
    title: 'Elite Solutions',
    type: 'LIC',
    description: 'Providing elite insurance solutions for high-net-worth individuals.',
  },
  {
    img: '/004.png',
    title: 'Investment Optimization',
    type: 'Investment',
    description: 'Reclaim and maximize the value of your past investments.',
  },
  {
    img: '/005.png',
    title: 'Tailored Investments',
    type: 'Investment',
    description: 'Tailoring new investment opportunities to meet your goals.',
  },
  {
    img: '/006.png',
    title: 'Secure Returns',
    type: 'Investment',
    description: 'Securing guaranteed returns to safeguard your financial future.',
  },
  {
    img: '/007.png',
    title: 'Stress-Free Retirement',
    type: 'Retirement',
    description: 'Enjoy a stress-free retirement with a secure pension plan.',
  },
  {
    img: '/008.png',
    title: 'Savings Maximization',
    type: 'Savings',
    description: 'Maximize your savings with expert income tax relaxation strategies.',
  },
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [thumbnailSlides, setThumbnailSlides] = useState(slides);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 800);

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

  const goToContactPage = () => {
    navigate('/contact'); // Navigate to the contact page
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
              <button onClick={goToContactPage}>Let's Talk</button> 
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
