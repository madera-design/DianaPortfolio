import React, { useState, useRef } from "react";
import "./Slider.css";

const Slider = () => {
  const slidesRightRef = useRef(null);
  const slidesLeftRef = useRef(null);
  const sliderContainerRef = useRef(null);
  
  const [activeSlidesIndex, setActiveSlidesIndex] = useState(0);
  const slidesLength = 4; // Total number of slides

  const changeSlide = (direction) => {
    const sliderHeight = sliderContainerRef.current.clientHeight;
    let newIndex = activeSlidesIndex;

    if (direction === "up") {
      newIndex = (activeSlidesIndex + 1) % slidesLength;
    } else if (direction === "down") {
      newIndex = (activeSlidesIndex - 1 + slidesLength) % slidesLength;
    }

    setActiveSlidesIndex(newIndex);
    slidesRightRef.current.style.transform = `translateY(-${
      newIndex * sliderHeight
    }px)`;
    slidesLeftRef.current.style.transform = `translateY(${
      newIndex * sliderHeight
    }px)`;
  };

  return (
    <div className="slider-container" ref={sliderContainerRef}>
      <div
        className="left-slide"
        ref={slidesLeftRef}
        style={{ top: `-${(slidesLength - 1) * 100}vh` }}
      >
        <div style={{ backgroundColor: "#7f7856" }}>
          <h1>Nature Flower</h1>
          <p>All in pink</p>
        </div>
        <div style={{ backgroundColor: "#6d6b9f" }}>
          <h1>Nature Flower</h1>
          <p>All in pink</p>
        </div>
        <div style={{ backgroundColor: "#252e33" }}>
          <h1>Nature Flower</h1>
          <p>All in pink</p>
        </div>
        <div style={{ backgroundColor: "#739c10" }}>
          <h1>Nature Garden</h1>
          <p>All in Green</p>
        </div>
      </div>
      <div className="right-slide" ref={slidesRightRef}>
        <div
          style={{
            background: `url('https://plus.unsplash.com/premium_photo-1661963972388-1da70b60752b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdpZGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60')`,
          }}
        ></div>
        <div
          style={{
            background: `url('https://images.unsplash.com/photo-1565432629946-62b4a2311557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdpZGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60')`,
          }}
        ></div>
        <div
          style={{
            background: `url('https://images.unsplash.com/photo-1547327195-59a16bed035e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdpZGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60')`,
          }}
        ></div>
        <div
          style={{
            background: `url('https://images.unsplash.com/photo-1500067737767-0276d2605978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHdpZGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60')`,
          }}
        ></div>
      </div>
      <div className="action-buttons">
        <button className="up-button" onClick={() => changeSlide("up")}>
          <i className="fa-solid fa-arrow-up"></i>
        </button>
        <button className="down-button" onClick={() => changeSlide("down")}>
          <i className="fa-solid fa-arrow-down"></i>
        </button>
      </div>
    </div>
  );
};

export default Slider;