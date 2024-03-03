import React from "react";
import "./Reminder.css";
import { AiFillDelete } from "react-icons/ai";
import { FaPen } from "react-icons/fa6";

const ReminderList = ({ title, description, selectedDate, selectedTime, id, onDelete, display}) => {
  return (
    <div className="p-3 Reminder-Card">
      <h5>{title}</h5>
      {/* <h5>{selectedDate.toLocaleDateString("en-GB")}</h5> */}
      <h5>{selectedTime}</h5>
      <p className="reminder-card-p">{description}</p>
      <div className="d-flex justify-content-between">
        <div className="icons" onClick={()=>{
          display("block");
        }}>
          <FaPen />
        </div>
        <div className="icons" onClick={()=>{
          onDelete(id);
        }
          }>
          <AiFillDelete />
        </div>
      </div>
    </div>
  );
};

export default ReminderList;
