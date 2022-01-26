import React from "react";
import './navlink.scss';

interface NavLinkProps {
  label: string;
  href: string;
};

export const NavLink: React.FC<NavLinkProps> = ({
  label,
  href,
}) => (
  <a className="navlink" href={href}>{label}</a>
);
