import React from 'react';


function getCurrentDateTime() {
    const currentDate = new Date();
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
  
    const formattedDate = currentDate.toLocaleDateString(undefined, dateOptions);
    const formattedTime = currentDate.toLocaleTimeString(undefined, timeOptions);
  
    return { date: formattedDate, time: formattedTime };
  }
  

  function YourComponent() {
    const { date, time } = getCurrentDateTime();
  
    return (
      <div>
        <p>Date: {date}</p>
        <p>Time: {time}</p>
      </div>
    );
  }
  
  export default YourComponent;
  