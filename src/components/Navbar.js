import React from "react";
import Login from './Login'


const Navbar = ({ handleLoginClick, showLogin, showSignup }) => {
    return (
        <div className="navbar">
            <Login handleLoginClick={handleLoginClick} showLogin={showLogin} showSignup={showSignup} />
        </div>
    );
};

export default Navbar