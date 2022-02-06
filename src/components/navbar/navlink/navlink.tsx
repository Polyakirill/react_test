import React from "react";
import './navlink.scss';

interface NavLinkProps {
  label: string;
  href: string;
  icon?: string;
};

export const NavLink: React.FC<NavLinkProps> = ({
  label,
  href,
  icon = undefined,
}) => (
  <a className="navlink" href={href}>
    {icon && (
      <img src={icon} alt="Account" />
    )}
    {label}
  </a>
);
