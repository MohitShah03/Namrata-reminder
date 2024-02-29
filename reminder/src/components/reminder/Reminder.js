import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import ReminderList from "./ReminderList";
import "./Reminder.css";

const Reminder = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(getCurrentTime());
  const [Array,setArray]=useState([]);
  const [Input, setInput] = useState({
    title: "",
    description: "",
    date: new Date(),
    time: selectedTime,
  });

  function getCurrentTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    return `${hours}:${minutes}`;
  }

  function handleDateChange(date) {
    setSelectedDate(date);
    setSelectedTime(getCurrentTime());
  }

  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...Input, [name]: value });
  };

  const addReminder = () => {
    setArray([...Array,Input])
    setInput({
      title: "",
      description: "",
      date: new Date(),
      time: selectedTime,
    });
    console.log(Array)
  };

  const isDisabled = Input.title.trim() === "" || Input.description.trim() === "";

  return (
    <div className="container mb-3 mt-5">
      <div className="row">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            name="title"
            value={Input.title}
            onChange={change}
            placeholder="Title"
            required 
          />
          <div className="mt-3">
            <textarea
              type="text"
              className="form-control"
              name="description"
              value={Input.description}
              onChange={change}
              placeholder="Description"
              rows="3"
              required 
            ></textarea>
          </div>
          <div className="mt-3 d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-outline-info btn-sm"
              onClick={addReminder}
              disabled={isDisabled}
            >
              Add
            </button>
          </div>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-between align-items-end">
          <div className="d-flex">
            <div className="me-5 ">
              <label className="form-label">Date</label>
              <DatePicker
                selected={selectedDate}
                name="date"
                dateFormat="dd/MM/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                minDate={new Date()} 
                className="form-control mt-4 m-lg-1"
              />
            </div>
            <label className="form-label me-5 mt-4"> Time </label>
            <TimePicker
              name="time"
              value={selectedTime}
              onChange={setSelectedTime}
              className="form-control p-1"
            />
          </div>
        </div>
      </div>
      <div className="reminder-body">
  <div className="container-fluid">
    <div className="row">
    {Array && Array.map((item, index) => (
  <div className="col-lg-3 col-8 mx-5 my-2" >
    <ReminderList title={item.title} description={item.description} date={item.date.toLocaleString()} time={item.time}/>
  </div>
))}

    </div>
  </div>
</div>

    </div>
  );
};

export default Reminder;
