import React, { useState } from 'react';

const RightSidebar = () => {
  const [hovered, setHovered] = useState(false);

  const sidebarStyle = {
    width: '200px',
    height: '100%',
    backgroundColor: '#15819A',
    color: hovered ? 'white' : 'white', // Change text color on hover
    position: 'fixed',
    top: '0',
    right: '0',
    padding: '20px',
    fontSize: hovered ? '24px' : '18px', // Change font size on hover
    fontWeight: hovered ? 'bold' : 'normal', // Make text bold on hover
    transition: 'font-size 0.3s, color 0.3s, font-weight 0.3s', // Add transitions
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
        <li style={listItemStyle}>Profile</li>
        <li style={listItemStyle}>Settings</li>
        <li style={listItemStyle}>Notifications</li>
      </ul>
      <div className='calendar'>
        {/* Calendar content */}
      </div>
    </div>
  );
};

export default RightSidebar;
