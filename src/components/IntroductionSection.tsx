import React from 'react';

export type IntroductionSectionProps = {
  title: string;
  text: string;
  imgSrc: string;
  imgAlt: string;
};

export default function IntroductionSection() {
  const props: IntroductionSectionProps = {
    title: 'The leader in interactive VR',
    text: 'This is the introduction section of the page.',
    imgSrc: './assets/desktop/image-interactive.jpg',
    imgAlt: 'Placeholder image',
  };

  return (
    <section className="introduction-section">
      <div className="image-container">
        <img src={props.imgSrc} alt={props.imgAlt} className="introduction-image" />
      </div>
      <div className="text-content">
        <h2 className="introduction-title uppercase">{props.title}</h2>
        <p className="introduction-text">
          {props.text}
        </p>
      </div>
    </section>
  )
};
