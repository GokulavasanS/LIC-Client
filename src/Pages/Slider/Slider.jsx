import React, { useState, useRef, useEffect } from 'react';
import './Slider.css'; // Create a CSS file for the styling

const Slider = () => {
  const [direction, setDirection] = useState(null);
  const sliderRef = useRef(null);
  const sliderListRef = useRef(null);
  const thumbnailRef = useRef(null);

  useEffect(() => {
    if (direction) {
      moveSlider(direction);
    }
  }, [direction]);

  const moveSlider = (direction) => {
    const sliderList = sliderListRef.current;
    const thumbnail = thumbnailRef.current;
    const sliderItems = sliderList.querySelectorAll('.item');
    const thumbnailItems = thumbnail.querySelectorAll('.item');

    if (direction === 'next') {
      sliderList.appendChild(sliderItems[0]);
      thumbnail.appendChild(thumbnailItems[0]);
      sliderRef.current.classList.add('next');
    } else {
      sliderList.prepend(sliderItems[sliderItems.length - 1]);
      thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
      sliderRef.current.classList.add('prev');
    }

    const handleAnimationEnd = () => {
      if (direction === 'next') {
        sliderRef.current.classList.remove('next');
      } else {
        sliderRef.current.classList.remove('prev');
      }
    };

    sliderRef.current.addEventListener('animationend', handleAnimationEnd, { once: true });
  };

  return (
    <div className="slider" ref={sliderRef}>
      <div className="list" ref={sliderListRef}>
        {/* Slider items go here */}
        <div className="item">Item 1</div>
        <div className="item">Item 2</div>
        <div className="item">Item 3</div>
      </div>
      <div className="thumbnail" ref={thumbnailRef}>
        {/* Thumbnail items go here */}
        <div className="item">Thumbnail 1</div>
        <div className="item">Thumbnail 2</div>
        <div className="item">Thumbnail 3</div>
      </div>
      <button className="prev" onClick={() => setDirection('prev')}>Prev</button>
      <button className="next" onClick={() => setDirection('next')}>Next</button>
    </div>
  );
};

export default Slider;
