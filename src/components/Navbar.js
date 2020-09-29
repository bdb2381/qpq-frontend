import React from "react";


const Navbar = ({ handleSignUpClick, handleLoginClick, showLogin, showSignup, handleOnChange }) => {
    return (
        <div className="navbar">
            <div className="navbar-list">
                <a> Hello User</a>
                <a> Home</a>
                <a> Add new QPQ</a>
                <a> Add new QPQ</a>
                <div className="search-container">
                    {/* <button type="submit"><i className="fa fa-search"></i></button> */}
                    <input type="text" onChange={handleOnChange} placeholder="Search" />
                </div>
            </div>
        </div>
    );
};

export default Navbar

