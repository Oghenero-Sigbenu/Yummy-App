import React from 'react';
import '../styles/components/animate.css';

export const AnimateInOut = ({children, classname}) => {
  return (
    <div className={classname}>
      {children}
    </div>
  );
};