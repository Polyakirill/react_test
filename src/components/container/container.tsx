import  React from 'react';

import './container.scss';

export const Container: React.FC = ({
  children
}) => (
  <div className="wrapper">
    <div className="container">
      {children}
    </div>
  </div>
);