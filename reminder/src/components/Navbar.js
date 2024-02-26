import React from 'react';
import Signup from './accounts/Register/Signup';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand">Navbar</a>
      <form class="d-flex mr-2">
      <Link to="/"><button class="btn btn-outline-success mx-2" >Home</button></Link>
        <Link to="/login"> <button class="btn btn-outline-success mx-3" >Login</button></Link>
        <Link to="/signup"><button className="btn btn-outline-success mx-4 mr-5">Register</button></Link>
      </form>
    </div>
  </nav>
  );
}

export default Navbar;
