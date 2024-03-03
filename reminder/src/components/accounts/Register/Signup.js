import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formError, setFormError] = useState({
    confirmPassword: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    if (formData.password !== formData.confirmPassword) {
      setFormError({
        confirmPassword: 'Password and confirm password should be same',
      });
      return;
    }
    setFormError({
      confirmPassword: '',
    });

    try {
      const response = await axios.post(
        'http://localhost:8000/api/signup',
        formData
      );
      console.log('response', response);
      if (response.status === 201) {
        setSuccessMessage('Registration successful!');
        setFormData({
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
        navigate('/login');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <div className="register-form">
      <h2>SignUp</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Repeat Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {formError.confirmPassword && (
            <p className="error">{formError.confirmPassword}</p>
          )}
        </div>
        <button type="submit" className="btn">
          Create an Account
        </button>
      </form>
      {successMessage && <p className="success">{successMessage}</p>}
    </div>
  );
};

export default Signup;
