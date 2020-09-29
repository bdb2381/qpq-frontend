import React from "react"; import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-list">

                {/* <Link to="/login" className="navbar-list">
                    Log In/</Link> */}
                <Link to="/" className="navbar-list">
                    Home </Link>
                {/* <Link to="/signup" className="navbar-list"> Signup </Link> */}
                <Link to="/services" className="navbar-list">
                    Services </Link>
                <div className="search-container">
                    <input type="text" onChange={null} placeholder="Search" />
                </div>
            </div>
        </div>
    );
};

export default Navbar

