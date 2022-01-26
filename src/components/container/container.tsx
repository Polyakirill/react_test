import  React from 'react';

import './container.scss';

export const Container: React.FC = ({
  children
}) => (
  <div className="container">
    {children}
  </div>
);