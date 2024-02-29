import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";

const Reminder = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(getCurrentTime());

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

  return (
    <div className="container mb-3 mt-5">
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="formGroupExampleInput" className="form-label" />
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Title"
          />
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label mt-3"
          />
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Description"
            rows="3"
          ></textarea>
          <div className="mt-3 d-flex justify-content-end">
            <button type="button" className="btn btn-outline-info btn-sm ">
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
                onChange={handleDateChange}
                minDate={new Date()} // Set minimum date to current date
                className="form-control mt-4 m-lg-1"
              />
            </div>
            <label className="form-label me-5 mt-4"> Time </label>
            <TimePicker
              value={selectedTime}
              onChange={setSelectedTime}
              minTime={getCurrentTime()} // Set minimum time to current time
              className="form-control p-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reminder;
