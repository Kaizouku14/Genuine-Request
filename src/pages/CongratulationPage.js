import React from 'react';
import { useUserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const CongratulationPage = () => {
  const { date, selectedOptions } = useUserContext(); 
  const navigate = useNavigate();


  const sendEmail = (e) => {
    e.preventDefault(); 

    const formattedIdeas = selectedOptions
    .map((idea, index) => `${index + 1}. ${idea}`) 
    .join('\n'); 

    const emailData = {
        date: date,
        ideas: formattedIdeas
    };

    emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, emailData,
        {
            publicKey: process.env.REACT_APP_PUBLIC_KEY,
        })
    .then((result) => {
        console.log('Email sent successfully:', result.text);
        navigate('/');
    }, (error) => {
        console.error('Error sending email:', error.text);
    });
  };

  return (
    <div className="h-screen relative flex flex-col justify-center items-center p-10">
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
      <h1 className="text-4xl font-bold text-pink-700 mb-4 max-md:text-2xl">🎉 Thank you Darling 🎉</h1>
      <p className="text-xl text-gray-700 mb-6 text-center">I’m so grateful you accepted my date request!</p>
      <div className="bg-white rounded-lg shadow-lg p-6 border border-pink-300">
        <h2 className="text-2xl font-semibold text-pink-600">Selected Date:</h2>
        <p className="text-3xl font-bold text-pink-800">{date || 'Not selected'}</p>
      </div>
      <form onSubmit={sendEmail} className="mt-4"> 
        <button 
          type="submit"
          className="mt-4 bg-pink-500 text-white font-semibold rounded-full py-2 px-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-pink-600 focus:ring-4 focus:ring-pink-300 focus:outline-none"
        >
          Send Email To Sender
        </button>
      </form>
    </div>
  );    
}

export default CongratulationPage;
