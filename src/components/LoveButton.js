import React from 'react';

const LoveButton = () => {
  return (
    <button className="relative px-6 py-3 bg-pink-500 text-white rounded-full overflow-hidden group">
      <span className="absolute inset-0 transition-transform duration-300 ease-out transform group-hover:scale-110 bg-gradient-to-r from-pink-500 to-red-500"></span>
      <span className="relative z-10">Click Me</span>
      <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
        <span className="text-3xl text-white before:content-['♥'] before:absolute before:text-pink-200 before:scale-75 before:transition-transform before:duration-300 before:opacity-0 group-hover:before:scale-100 group-hover:before:opacity-100">
        </span>
      </span>
    </button>
  );
};

export default LoveButton;

