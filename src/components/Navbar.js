import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="navbar">
      {!localStorage.token ? (
        <div className="navbar-list">
          <Link to="/login" className="navbar-list">
            Log In
          </Link>
          <Link to="/signup" className="navbar-list">
            Sign Up
          </Link>{" "}
        </div>
      ) : (
          <div className="navbar-list">
            <Link to="/services" className="navbar-list">
              Home{" "}
            </Link>
            <Link to="/newservice" className="navbar-list">
              New Service{" "}
            </Link>
            <div className="search-container">
              <input
                type="text"
                onChange={props.handleSearch}
                placeholder="Search"
              />
            </div>
            <Link to="/profile" className="navbar-list">
              Profile{" "}
            </Link>
            <Link to="/requests" className="navbar-list">
              My Requests{" "}
            </Link>
            <Link to="/login" className="navbar-list" onClick={props.handleLogout}>
              {" "}
            Logout{" "}
            </Link>
          </div>
        )}
    </div>
  );
};

export default Navbar;
