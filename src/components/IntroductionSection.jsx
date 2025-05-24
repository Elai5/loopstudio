import React from 'react';
import { assets } from '../assets/assets';

const IntroductionSection = () => {
  const props = {
    title: 'The leader in interactive VR',
    text: 'Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe.Our award- winning creations have transformed businesses through digital experiences that bind to their brand.',
    imgSrc: assets.desktop_interactive,
    imgAlt: 'Man using VR headset',
  };

  return (
    <section className="introduction-section grid md:grid-cols-2 sm:grid-cols-1 gap-12 text-center md:text-left md:gap-0 lg:p-20 mx-auto p-10">
      <div className="image-container">
        <img
          src={props.imgSrc}
          alt={props.imgAlt}
          className="introduction-image w-full h-auto object-cover"
        />
      </div>
      <div className="text-content flex flex-col gap-5 bg-white font-alata md:p-10 lg:p-20 md:-translate-x-38 md:translate-y-40">
        <h2 className="introduction-title font-josefin uppercase text-3xl">
          {props.title}
        </h2>
        <p className="introduction-text text-base text-gray-400 max-w-md">
          {props.text}
        </p>
      </div>
    </section>
  );
};

export default IntroductionSection;
