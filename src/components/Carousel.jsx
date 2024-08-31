import React from "react";
import Hero1 from "../assets/hero1.webp";
import Hero2 from "../assets/hero2.webp";
import Hero3 from "../assets/hero3.webp";
import Hero4 from "../assets/hero4.webp";

const Carousel = () => {
  const heroImages = [Hero1, Hero2, Hero3, Hero4];

  return (
    <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box ">
      {heroImages.map((img) => {
        return (
          <div className="carousel-item" key={img}>
            <img src={img} className="rounded-box h-full w-80 object-cover" />
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
