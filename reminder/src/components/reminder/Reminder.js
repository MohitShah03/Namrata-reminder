import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReminderList from './ReminderList';
import './Reminder.css';
import Update from './Update';
import axios from 'axios';

const Reminder = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(getCurrentTime());
  const [Array, setArray] = useState([]);
  const [Input, setInput] = useState({
    title: '',
    description: '',
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

  const addReminder = async (e) => {
    e.preventDefault();
    console.log('Reminder data', Input);
    const newReminder = {
      title: Input.title,
      description: Input.description,
      date: selectedDate,
      time: selectedTime,
    };
    try {
      console.log('dbcwyducbyud', newReminder);
      const response = await axios.post(
        'http://localhost:8000/api2/addReminder',
        Input
      );
      console.log('ihd cyusdcu', response.data);

      if (response.status === 200) {
        setArray([...Array, newReminder]);
        setInput({
          title: '',
          description: '',
          date: new Date(),
          time: selectedTime,
        });
        toast.success('Reminder added successfully');
      } else {
        toast.error('Failed to add reminder');
      }
    } catch (error) {
      console.error('Error adding reminder:', error);
      toast.error('Failed to add reminder');
    }
  };
  useEffect(() => {
    console.log(Array);
  }, [Array]);

  const deleteId = (id) => {
    Array.splice(id, 1);
    setArray([...Array]);
  };

  const isDisabled =
    Input.title.trim() === '' || Input.description.trim() === '';

  const show = (value) => {
    document.getElementById('reminder-update').style.display = value;
  };

  return (
    <div className="container mb-3 mt-5">
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={addReminder}>
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
            <div className="mt-3">
              <div className="row">
                <div className="col-md-2">
                  <label className="form-label">Date</label>
                  <DatePicker
                    selected={selectedDate}
                    name="date"
                    dateFormat="dd/MM/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    minDate={new Date()}
                    className="form-control"
                  />
                </div>
                <div className="col-md-2">
                  <label className="form-label">Time</label>
                  <TimePicker
                    type="time"
                    value={selectedTime}
                    onChange={setSelectedTime}
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="mt-3 d-flex justify-content-end">
              <button
                type="submit"
                className="btn btn-outline-info btn-sm"
                disabled={isDisabled}
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="reminder-body">
        <ToastContainer />
        <div className="container-fluid">
          <div className="row">
            {Array &&
              Array.map((item, index) => (
                <div className="col-lg-3 col-8 mx-5 my-2" key={index}>
                  <ReminderList
                    title={item.title}
                    description={item.description}
                    selectedDate={item.selectedDate}
                    selectedTime={item.selectedTime}
                    id={index}
                    onDelete={deleteId}
                    display={show}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="reminder-update" id="reminder-update">
        <Update display={show} />
      </div>
    </div>
  );
};

export default Reminder;
