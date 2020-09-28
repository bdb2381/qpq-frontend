import React from "react";
import Login from './Login'


const Navbar = ({ handleSignUpClick, handleLoginClick, showLogin, showSignup, handleOnChange }) => {
    return (
        <div className="navbar">
            <Login
                handleLoginClick={handleLoginClick}
                showLogin={showLogin}
                showSignup={showSignup}
                handleSignUpClick={handleSignUpClick}
                handleOnChange={handleOnChange}
            />



        </div>
    );
};

export default Navbar