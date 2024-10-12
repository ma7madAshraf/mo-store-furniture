import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";

const Hero = () => {
  return (
    <div className="grid gap-24 lg:grid-cols-2 items-center mt-16">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-5xl">
          Transforming Spaces with Elegant and Modern Furniture for Every Room
        </h1>
        <p className="mt-8 text-xl max-w-xl leading-8">
          Discover stylish, high-quality furniture that brings comfort and
          elegance to every room. Create the perfect space with our curated
          collections
        </p>
        <div className="mt-10 ">
          <Link to="products" className="btn btn-primary ">
            Our Products
          </Link>
        </div>
      </div>
      <Carousel />
    </div>
  );
};

export default Hero;
