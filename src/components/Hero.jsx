import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";

const Hero = () => {
  return (
    <div className="grid gap-24 lg:grid-cols-2 items-center mt-16">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-5xl">
          We adore technology. <br />
          We are passionate about innovation.
        </h1>
        <p className="mt-8 text-xl max-w-xl leading-8">
          We in Mo store adore technology adipisicing elit. Iusto voluptatibus
          nihil ea earum omnis, eius eveniet architecto a ullam sapiente.
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
