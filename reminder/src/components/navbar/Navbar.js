import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Call the logout function passed from the parent component
    onLogout();
    // Navigate the user to the login page after logout
    navigate("/login");
  };

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          REMINDER APP
        </NavLink>
        <form className="d-flex mr-2">
          <NavLink to="/" activeClassName="active" className="nav-link">
            <button className="btn btn-outline-success mx-2">Home</button>
          </NavLink>
          {!isLoggedIn && (
            <>
              <NavLink
                to="/login"
                activeClassName="active"
                className="nav-link"
              >
                <button className="btn btn-outline-success mx-3">Login</button>
              </NavLink>
              <NavLink
                to="/signup"
                activeClassName="active"
                className="nav-link"
              >
                <button className="btn btn-outline-success mx-4 mr-5">
                  Register
                </button>
              </NavLink>
            </>
          )}
          {isLoggedIn && (
            <button
              className="btn btn-outline-danger mx-3"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
          {isLoggedIn && (
            <NavLink
              to="/reminder"
              activeClassName="active"
              className="nav-link"
            >
              <button
                className="btn btn-outline-danger mx-3"
                onClick={handleLogout}
              >
                Reminder
              </button>
            </NavLink>
          )}
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
