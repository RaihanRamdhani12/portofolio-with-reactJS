import React from 'react';
import Image from '../assets/RaihanRamdhani-1D.jpg';

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center bg-black text-center"
    >
      <h1 className="text-4xl text-yellow-600 font-bold mb-3 mt-6">
        Hello, I'm Raihan Ramdhani
      </h1>
      <p className="text-xl text-white ">
        <b>I'm a web Development</b>
      </p>
      <img
        src={Image}
        alt=""
        className="mt-5 w-64 rounded-lg shadow-red-600 shadow-lg mb-4"
      />
    </section>
  );
};

export default Hero;
