"use client";
import React, { useState } from "react";
import YourComponent from "@/Components/Pages";
import LeftSidebar from '@/Components/Left_Bar';
import RightSidebar from "@/Components/Right";







const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [maintask, setmaintask] = useState([]);
  const [selectedDate, setselectedDate] = useState("");
  const [selectedTime, setselectedTime] = useState("");

  const timehandler = (e) => {
    e.preventDefault();
    setmaintask([...maintask, { title, desc , selectedDate, selectedTime}]);


    console.log(maintask);
    settitle("");
    setdesc("");
    setselectedDate("");
    selectedTime("");
  };
  let deletehandler = (z) => {
    let copytask = [...maintask];
    copytask.splice(z, 1);
    setmaintask(copytask);
  };

  let render_task = <h2> NO TASK AVAILABLE</h2>;
  if (maintask.length > 0) {
    render_task = maintask.map((t, i) => {
      return (
        <table>
        <tbody key={i} >
        
        <tr>
        
          <td >{t.title}</td>
          <td className="w-1/3 text-center"> {t.desc}</td>
          <td >{t.selectedDate}</td>
          <td >{t.selectedTime}</td>
          <td> <button
          onClick={() => {
            deletehandler(i);
          }}
          className="bt1"
           >
          Delete
          </button>
          </td>
        </tr>
        </tbody>
          
        
     





        </table>

      












       
      );
    });
  }

  return (
    < >
    <div className="body1">
    
      <div>
        <h1 className="heading"> SCHEDULE PLANNER</h1>
        <div className="timeadjuster">
        <YourComponent />
        </div>

        <LeftSidebar/>
        <RightSidebar/>
        <div className="shift" >
        
        <form className="task" onSubmit={timehandler}>
        <div className="to-do-item">
          <input
            type="text"
            placeholder="enter your task here"
            className="title"
            
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />

          <input
            type="text"
            placeholder="describe your task here"
            className="description"
            value={desc}
            onChange={(y) => {
              setdesc(y.target.value);
            }}
          />

          <label>Date:</label>

          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setselectedDate(e.target.value)}
          />

          <label>Time:</label>
          <input
            type="time"
            value={selectedTime}
            onChange={(e) => setselectedTime(e.target.value)}
          />

          <button className="button"> Add Task</button>
          </div>

          <div className="datentime">
           
          </div>

         
        </form>
      </div>

      <hr />
      <table  className="blocks">
      <thead>
            <tr className="str">
            <th>Task</th>
            <th className="w-1/3 text-center">description</th>
            <th>Deadline Date</th>
            <th>Deadline Time</th>
           
            <th>Delete</th>
             </tr>
        </thead></table>
      <div className="show">
        {render_task}
      </div>
      
      </div>
      </div>
    </>
  );
};

export default page;
