import React from 'react';
import herocurve from '../../images/herocurve.svg';
import heroglobe from '../../images/globe.svg';
// import play from '../assets/images/play.svg';
import play from '../../images/play.svg';
import { Link } from 'react-router-dom';


function Hero() {
  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-between px-4 md:px-8 lg:px-16 py-8">
      {/* Left Section */}
      <div className="flex flex-col w-full md:w-1/2 gap-6 md:gap-10 items-start text-center md:text-left">
        <h1 className="text-[#000000] font-bold text-3xl md:text-5xl lg:text-6xl leading-snug">
          Fidar: Revolutionize your document sharing game.
        </h1>
        <div className="flex flex-col gap-6 items-center md:items-start">
          <img
            className="w-full md:w-3/4"
            src={herocurve}
            alt="Hero Curve"
          />
          <p className="text-[#000000] text-lg md:text-xl lg:text-2xl">
            Share, Track, Chat, Convert, Compose - All in One
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center">
            <Link to="/pages/signup" className="bg-[#35b2f6] text-white rounded-full px-8 py-3 text-lg hover:bg-[#1e90ff]">
              Try free trial
            </Link>
            <Link to="" className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
                <img
                  className="w-6 h-6"
                  src={play}
                  alt="Play Icon"
                />
              </div>
              <span className="text-[#191a15] text-lg font-medium">
                View Demo
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
        <img
          className="w-full max-w-md md:max-w-lg"
          src={heroglobe}
          alt="Hero Globe"
        />
      </div>
    </div>
  );
}

export default Hero;
