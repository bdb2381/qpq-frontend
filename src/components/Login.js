import React from "react";



const Login = ({ handleOnChange, handleLoginClick, handleSignUpClick, showSignup, showLogin }) => {


    return (
        <div className="navbar-list">

            <div >
                {showLogin ?
                    <form className="login-form">
                        <input type="text" placeholder="Email"></input>
                        <input type="password" placeholder="password"></input>
                        <button>Login</button>
                    </form> :
                    <a onClick={handleLoginClick}>Login</a>}
            </div>

            <div>
                {showSignup ?
                    <a onClick={handleSignUpClick}>link to profile page :)</a>

                    :
                    <a onClick={handleSignUpClick}>Sign Up</a>
                }
            </div>


            <div className="search-container">
                <button type="submit"><i className="fa fa-search"></i></button>
                <input type="text" onChange={handleOnChange} />
            </div>

        </div >
    );
};

export default Login

