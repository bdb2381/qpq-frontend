import React from "react";
import Login from './Login'


const Navbar = ({ showLogin, showSignup }) => {
    return (
        <div className="navbar">
            <Login showLogin={showLogin} showSignup={showSignup} />
        </div>
    );
};

export default Navbar