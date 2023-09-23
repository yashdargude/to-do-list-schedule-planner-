import React, { useState } from 'react';

const LeftSidebar = () => {
  const [hovered, setHovered] = useState(false);

  const sidebarStyle = {
    width: '200px',
    height: '100%',
    backgroundColor: '#15819A',
    color: 'white',
    position: 'fixed',
    position : 'absolute',
    top: '0',
    left: '0',
    padding: '20px',
    fontSize: hovered ? '24px' : '18px', // Change font size on hover
    fontWeight: hovered ? 'bold' : 'normal', // Make text bold on hover
    transition: 'font-size 0.3s, font-weight 0.3s', // Add transition for font size and weight change
  };

  const listItemStyle = {
    fontSize: '18px',
    
    marginBottom: '10px',
    cursor: 'pointer',
    transition: 'color 0.3s', // Add transition for color change
  };

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  return (
    <div
      style={sidebarStyle}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <ul>
        <li style={listItemStyle}>Home</li>
        <li style={listItemStyle}>Sign In</li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
