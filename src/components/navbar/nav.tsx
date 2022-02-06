import React, { useEffect, useState } from 'react';
import { NavLink } from './navlink';
import './nav.scss';
import Icon from '../../img/Icons/account.png'

interface Item {
  label: string;
  href: string;
};

interface AccountButtonProps extends Item {
  icon: string;
};

interface NavProps {
  menuItems: Item[];
  accountButton: AccountButtonProps; 
};

export const Nav: React.FC<NavProps> = ({
  menuItems,
  accountButton,
}) => {
  const [ scroll, setScroll ] = useState(0);

  const scrollY = () => {
    setScroll(window.pageYOffset);
  };
  
  useEffect(() => {
    const watchScrollY = () => {
      window.addEventListener('scroll', scrollY)
    };
    watchScrollY();
    return () => {
      window.removeEventListener('scroll',scrollY)
    };
  });

  return (
    <div className={`navbar${scroll > 130 ? ' navbar--add-background' : ''}`}>
      <h1>MNTN</h1>

      <div className='navbar__navlinks'>
        {menuItems.map((apple) => (
          <NavLink
            label={apple.label}
            href={apple.href}
          />
        ))}
      </div>
      <div className="navbar__account">
        <NavLink
          label={accountButton.label}
          href={accountButton.href}
          icon={accountButton.icon}
        />
      </div>
    </div>
  );
};

