import React from 'react';

import './section.scss';

interface SectionProps {
  number: string;
  tagline: string;
  title: string;
  text: string;
  link: string;
  img: string;
  changePlaces?: boolean;
};

export const Section: React.FC<SectionProps> = ({
  number,
  tagline,
  title,
  text,
  link,
  img,
  changePlaces = false,
}) => (
  <div className="section">
    <div className={`section__content${changePlaces ? ' section__content--order-two' : ''}`}>
      <p className="section__content__number">
        {number}
      </p>
      <p className="section__content__tagline">
        {tagline}
      </p>
      <h2 className="section__content__title">
        {title}
      </h2>
      <p className="section__content__text">
        {text}
      </p>
      <a className="section__content__link" href="#">
        {link}
      </a>
    </div>
    
    <img className={`section__image${changePlaces ? ' section__image--order-one' : ''}`} src={img} alt="Mountain" />
  </div>
);