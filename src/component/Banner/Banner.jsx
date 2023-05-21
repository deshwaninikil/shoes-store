import React, { useState, useEffect } from "react";
import "./Banner.css";
import banner_img1 from "../../logos/banner_img1.jpg";
import banner_img2 from "../../logos/banner_img2.jpg";
import banner_img3 from "../../logos/banner_img3.jpg";

const images = [banner_img1, banner_img2, banner_img3];

export const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  return (
    <section className="carousel">
      <div className="carousel-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`banner image ${index}`}
            className={`carousel-image ${
              index === currentImageIndex ? "active" : ""
            }`}
          />
        ))}
      </div>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={`carousel-indicator ${
              index === currentImageIndex ? "active" : ""
            }`}
            onClick={() => setCurrentImageIndex(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};
