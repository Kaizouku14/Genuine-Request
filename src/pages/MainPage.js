import React from 'react';
import { useUserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

const FoodPage = () => {
  const {
    selectedOptions,
    customIdea,
    setCustomIdea,
    handleOptionSelect,
  } = useUserContext();
  const navigate = useNavigate(); 

  const handleSubmit = () =>{
    navigate('/congrats')
  }


  return (
    <div className="h-auto flex flex-col p-20 gap-y-6 items-center">
      <h1 className="text-4xl font-medium text-pink-700 mb-4 text-center">
        What do you want to do on our date?
      </h1>

      <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <div
          onClick={() => handleOptionSelect('arcade')}
          className={`relative w-64 h-64 rounded-full overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer 
            ${selectedOptions.includes('arcade') ? 'border-4 border-pink-500' : ''}`} 
        >
          <img src="arcade.jpg" alt="Arcade" className="object-cover w-full h-full" />
          <p className="absolute bottom-5 bg-black bg-opacity-50 text-white w-full text-center py-2">
            Play in the arcade 🎮
          </p>
        </div>

        <div
          onClick={() => handleOptionSelect('karaoke')}
          className={`relative w-64 h-64 rounded-full overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer 
            ${selectedOptions.includes('karaoke') ? 'border-4 border-pink-500' : ''}`} 
        >
          <img src="karaoke.jfif" alt="Karaoke" className="object-cover w-full h-full" />
          <p className="absolute bottom-5 bg-black bg-opacity-50 text-white w-full text-center py-2">
            Sing karaoke 🎤
          </p>
        </div>

        <div
          onClick={() => handleOptionSelect('fastfood')}
          className={`relative w-64 h-64 rounded-full overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer 
            ${selectedOptions.includes('fastfood') ? 'border-4 border-pink-500' : ''}`} 
        >
          <img src="fastfood.jpg" alt="Fast Food" className="object-cover w-full h-full" />
          <p className="absolute bottom-5 bg-black bg-opacity-50 text-white w-full text-center py-2">
            Eat fast food 🍔
          </p>
        </div>

        <div
          onClick={() => handleOptionSelect('streetfood')}
          className={`relative w-64 h-64 rounded-full overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer 
            ${selectedOptions.includes('streetfood') ? 'border-4 border-pink-500' : ''}`} 
        >
          <img src="download.jfif" alt="Street Food" className="object-cover w-full h-full" />
          <p className="absolute bottom-5 bg-black bg-opacity-50 text-white w-full text-center py-2">
            Try street food 🌮
          </p>
        </div>

        <div
          onClick={() => handleOptionSelect('cinema')}
          className={`relative w-64 h-64 rounded-full overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer 
            ${selectedOptions.includes('cinema') ? 'border-4 border-pink-500' : ''}`} 
        >
          <img src="cinema.jfif" alt="cinema" className="object-cover w-full h-full" />
          <p className="absolute bottom-5 bg-black bg-opacity-50 text-white w-full text-center py-2">
            Watch a movie 🎬
          </p>
        </div>

        <div
          onClick={() => handleOptionSelect('gosomewhere')}
          className={`relative w-64 h-64 rounded-full overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer 
            ${selectedOptions.includes('gosomewhere') ? 'border-4 border-pink-500' : ''}`} 
        >
          <img src="images.png" alt="somewhere" className="object-fit w-full h-full" />
          <p className="absolute bottom-5 bg-black bg-opacity-50 text-white w-full text-center py-2">
            Go somewhere 🙋
          </p>
        </div>
      </div>

      <div className="w-full max-w-md  mt-6 flex flex-col items-center  ">
        <p className="text-xl text-pink-700 mb-2 text-center">
          Got something else in mind? Let me know! or <span className='text-red-500 font-bold underline'>recommend a place</span>
        </p>
        <input
          type="text"
          className="w-full py-3 px-4 rounded-full border-2 border-pink-300 focus:ring-pink-400 focus:outline-none"
          placeholder="Type your idea here..."
          value={customIdea}
          onChange={(e) => setCustomIdea(e.target.value)}
        />
        <button
          className="mt-4 bg-pink-500 text-white font-semibold rounded-full py-2 px-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-pink-600 focus:ring-4 focus:ring-pink-300 focus:outline-none"
          disabled={!customIdea && selectedOptions.length === 0} 
          onClick={handleSubmit}
        >
          Submit Idea
        </button>
      </div>
    </div>
  );
};

export default FoodPage;
