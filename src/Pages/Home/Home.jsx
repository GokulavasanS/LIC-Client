import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const slides = [
  {
    img: '/001.png',
    title: 'Insurance',
    description: 'Connecting people through insurance.',
  },
  {
    img: '/002.png',
    title: 'Exclusive Offers',
    description: 'Join hands with us and enjoy exclusive free foreign trips.',
  },
  
  {
    img: '/003.png',
    title: 'Elite Solutions',
    description: 'Providing elite insurance solutions for high-net-worth individuals.',
  },
  {
    img: '/004.png',
    title: 'Investment Optimization',
    description: 'Reclaim and maximize the value of your past investments.',
  },
  {
    img: '/005.png',
    title: 'Tailored Investments',
    description: 'Tailoring new investment opportunities to meet your goals.',
  },
  {
    img: '/006.png',
    title: 'Secure Returns',
    description: 'Securing guaranteed returns to safeguard your financial future.',
  },
  {
    img: '/007.png',
    title: 'Stress-Free Retirement',
    description: 'Enjoy a stress-free retirement with a secure pension plan.',
  },
  {
    img: '/008.png',
    title: 'Savings Maximization',
    description: 'Maximize your savings with expert income tax relaxation strategies.',
  },
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showArrow, setShowArrow] = useState(true); 
  const navigate = useNavigate();

  useEffect(() => {
    const transitionTimeout = setTimeout(() => setIsTransitioning(false), 800);
    return () => clearTimeout(transitionTimeout);
  }, [currentIndex]);

  useEffect(() => {
    const autoSlideTimeout = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setIsTransitioning(true);
    }, 6000); // 10 seconds interval
    return () => clearInterval(autoSlideTimeout);
  }, []);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    setIsTransitioning(true);
    setShowArrow(false);
  };

  const toggleThumbnailStack = () => {
    setIsExpanded(!isExpanded);
    setShowArrow(false);
  };

  return (
    <div className="slider">
      <div className="background-image-container">
        <img
          src={slides[currentIndex].img}
          alt={slides[currentIndex].title}
          className={`background-image ${isTransitioning ? 'transitioning' : ''}`}
        />
        <div className="content-overlay">
          <div className="content">
            <div className="title">{slides[currentIndex].title}</div>
            <div className="type">{slides[currentIndex].type}</div>
            <div className="description">{slides[currentIndex].description}</div>
            <button onClick={() => navigate('/contact')}>Let's Talk</button>
          </div>
        </div>
      </div>

      <div className={`thumbnail-left-arrow-container ${showArrow ? '' : 'hidden'}`}>
        <p>Click here</p>
        <img src='/arrow.png' alt="Arrow" />
      </div>

      <div className="thumbnail-container" onClick={toggleThumbnailStack}>
        <div className={`thumbnail-wrapper ${isExpanded ? 'expanded' : ''}`}>
          <div className="thumbnail-item main-thumbnail">
            <img src={slides[currentIndex].img} alt={slides[currentIndex].title} />
          </div>
          {isExpanded && (
            <div className="thumbnail-stack">
              {slides.map((slide, index) => (
                index !== currentIndex && (
                  <div
                    className="thumbnail-item"
                    key={index}
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <img src={slide.img} alt={slide.title} />
                  </div>
                )
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
