import React from 'react';
import { NavLink } from './navlink';
import './nav.scss';

export const Nav: React.FC = () => (
  <div className="navbar">
    <h1>MNTN</h1>
    <NavLink
      label="Equipment"
      href="#"
    />
    <NavLink
      label="Equipment"
      href="#"
    />
    <NavLink
      label="Equipment"
      href="#"
    />
  </div>
);

