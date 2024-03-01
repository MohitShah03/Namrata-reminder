import React, { useState, useEffect } from "react";
import TimePicker from "react-time-picker";
import DatePicker from "react-datepicker";
import axios from "axios";

const Update = ({ data, updateReminder, display }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setDescription(data.description);
      setSelectedDate(new Date(data.selectedDate));
      setSelectedTime(data.selectedTime);
    }
  }, [data]);

  const handleUpdate = async() => {
    try{
     let response = await axios.post('http://localhost:8000/api2/updateReminder/:id',{title,description,selectedDate,selectedTime});

     if (response.status === 200) {
       setTitle("");
       setDescription("");
       setSelectedDate(new Date());
       setSelectedTime("");
    }

  } catch (error) {
    console.error('Login failed:', error.response.data.message);
  }
  return;
};
    


  return (
    <div className="p-5 d-flex justify-content-center align-items-start flex-column update">
      <h1>Update your Task</h1>
      <div className="mt-3" style={{ width: "100%" }}>
        <input
          type="text"
          className="form-control mb-3 w-100"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="form-control mb-3"
          placeholder="Enter Description"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <div className="row">
          <div className="col-md-6">
            <label className="form-label">Date</label>
            <DatePicker
              selected={selectedDate}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              onChange={(date) => setSelectedDate(date)}
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Time</label>
            <input
              type="time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="form-control"
            />
          </div>
        </div>
        <div className="mt-3">
          <button className="btn btn-primary" onClick={handleUpdate}>
            Update
          </button>
          <button className="btn btn-danger btn-sm mt-2" onClick={()=>display("none")}>Cancle</button>
        </div>
      </div>
    </div>
  );
};

export default Update;
