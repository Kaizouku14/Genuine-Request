import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import teddy from '../assets/teddy.png';
import sadteddy from '../assets/sadteddy.png';
import sadbackground from '../assets/sadbackground.jpg';
import pinkybackground from '../assets/pink-sky-background-with-crescent-moon.jpg';
import sadaudio from '../assets/Download.mp3'

const LandingPage = () => {
  const [isSad, setIsSad] = useState(false);
  const audioRef = useRef(null); 

  const backgroundImage = isSad 
    ? `url('${sadbackground}')` 
    : `url('${pinkybackground}')`;

    const handleNoClick = () => {
        setIsSad(true);
        audioRef.current.play(); 
    };

  return (
    <div className={`relative h-screen flex justify-center items-center overflow-hidden bg-cover transition-background duration-500`} style={{ backgroundImage }}>
      <audio ref={audioRef} src={sadaudio} />
      <div className='absolute inset-x-0 bottom-20 z-0'>
        <div className="relative w-full">
          {[...Array(9)].map((_, index) => (
            <div
              key={index}
              className={`absolute animate-float text-${5 - index % 3}xl text-pink-400`}
              style={{ left: `${(index + 1) * 10}%`, animationDelay: `${index * 1000}ms` }}
            >
              {isSad ? '🥺' : '🩷'}
            </div>
          ))}
        </div>
      </div>

      <div className='relative z-10 flex flex-col items-center'>
        <img 
          className={`h-56 rounded-full transition duration-500`} 
          src={isSad ? sadteddy : teddy} 
          alt='teddy' 
        />
        <h1 className={`font-poppins text-4xl font-bold ${isSad ? 'text-white' : 'text-pink-700' } `}>Hello my dear</h1>
        <p className={`${isSad ? "text-white" : "text-pink-800" } text-lg font-medium mt-2`}>
          Would you like to go out with me for a date?</p>
        <div className='flex gap-x-4 mt-4'>
          <Link to='/yes' 
            className="relative w-28 bg-pink-500 text-center text-white font-semibold rounded-full py-2 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-pink-600 focus:ring-4 focus:ring-pink-300 focus:outline-none group"
            onClick={() => setIsSad(false)}
          >
            Yes
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-400 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
              ❤️
            </span>
          </Link>

          <button 
            className="relative w-28 bg-red-500 text-white font-semibold rounded-full py-2 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-red-600 focus:ring-4 focus:ring-red-300 focus:outline-none group"
            onClick={handleNoClick}
          >
            No
            <span className="absolute left-8 top-1.5 transform -translate-x-1/2 text-red-500 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              ⚠️
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;