// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => (
//   <nav className="p-4 bg-gray-800 text-white flex justify-between">
//     <Link to="/" className="text-lg font-bold">Profile Explorer</Link>
//     <Link to="/admin" className="bg-blue-500 px-4 py-2 rounded">Admin Panel</Link>
//   </nav>
// );

// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css"; // Custom styles

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
    <div className="container">
      <Link to="/" className="navbar-brand">🌟 Profile Explorer</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {/* <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li> */}
          <li className="nav-item">
            <Link to="/admin" className="btn btn-light nav-button">Admin Panel</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
