/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// components/Dropdown.jsx
import React, { useState } from 'react';

const Dropdown = ({ button, children, classNames }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative ${classNames}`}>
      <div onClick={toggleDropdown}>{button}</div>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2">
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
