import React from 'react';

import './hero-banner.scss';

export const HeroBanner: React.FC = () => (
  <div className="hero-banner">
    <div className="hero-banner__content">
      <p className="hero-banner__tagline">A Hiking guide</p>
      <h1 className="hero-banner__title">Be prepared for the Mountains and beyond!</h1>
      <a className="hero-banner__button" href="#">scroll down</a>
    </div>
    <div className="hero-banner__midground" />
    <div className="hero-banner__foreground" />
  </div>
);
