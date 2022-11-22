import React from 'react';
import chair from "../../../assets/images/chair.png"
import  './banner.css'

const Banner = () => {
    return (
        <div data-theme="dark" className="hero bg-hero-pattern">
        <div className='hero-overlay bg-opacity-80 '></div>
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <img src={chair} className="lg:max-w-xl  shadow-2xl" alt='' />
          <div className='p-5'>
            <h1 className="text-5xl font-bold ">Your New Smile Starts Here</h1>
            <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
            <button className="btn  bg-gradient-to-r from-pink-600 to-red-600 text-white">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;