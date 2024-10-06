import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import kilig from '../assets/kilig.mp3';

const YesPage = () => {
  const [date, setDate] = useState(localStorage.getItem('date') || '');
  const audioRef = useRef(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    audioRef.current.play();
  }, []);

  const handleChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    localStorage.setItem('date', selectedDate); 
  };

  const handleSubmit = () => {
    if (date) {
      navigate('/foods'); 
    } else {
      alert('Please select a date before proceeding.');
    }
  };

  return (
    <div className="relative h-screen flex justify-center items-center flex-col gap-y-4">
      <audio ref={audioRef} src={kilig} loop />
      <div className="absolute inset-x-0 bottom-20 z-0">
        <div className="relative w-full">
          {[...Array(9)].map((_, index) => (
            <div
              key={index}
              className={`absolute animate-float text-${5 - index % 3}xl text-pink-400`}
              style={{ left: `${(index + 1) * 10}%`, animationDelay: `${index * 100}ms` }}
            >
              🩷
            </div>
          ))}
        </div>
      </div>
      <div className="relative z-10 flex flex-col items-center gap-y-2">
        <div className="flex flex-col text-center">
          <img
            src="https://media.tenor.com/nBQQ6XM5BhIAAAAi/cute.gif"
            alt="cute gif"
          />
          <p className="font-bold text-2xl">I wuv u 🩷</p>
        </div>

        <p className="font-bold text-3xl text-pink-700 text-center">
          When are you free, darling?
        </p>
        <div className="flex gap-x-2">
          <input
            type="date"
            className="py-2 px-3 rounded-full w-56 border-2 border-pink-300 focus:ring-pink-400"
            value={date}
            onChange={handleChange}
          />
          <button
            className="w-28 bg-pink-500 text-white font-semibold rounded-full py-2 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-pink-600 focus:ring-4 focus:ring-pink-300 focus:outline-none"
            disabled={!date} 
            onClick={handleSubmit}
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default YesPage;
