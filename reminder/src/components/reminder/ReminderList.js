import React from "react";
import "./Reminder.css";
import { AiFillDelete } from "react-icons/ai";
import { FaPen } from "react-icons/fa6";

const ReminderList = ({ title, description, date, time }) => {
  return (
    <div className="p-3 Reminder-Card">
      <h5>{title}</h5>
      <h5>{date}</h5>
      <h5>{time}</h5>
      <p className="reminder-card-p">{description}</p>
      <div className="d-flex justify-content-between">
        <div className="icons">
          <FaPen />
        </div>
        <div className="icons">
          <AiFillDelete />
        </div>
      </div>
    </div>
  );
};

export default ReminderList;
