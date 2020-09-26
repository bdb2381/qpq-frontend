import React from "react";


const Login = ({ showSignup, showLogin }) => {
    return (
        <div className="navbar-list">

            <span > Login </span>
            {showLogin ?
                <form>
                    <label> email</label>
                    <input type="text" placeholder="Email"></input>
                    <label> password</label>
                    <input type="password" placeholder="password"></input>
                    <button> submit</button>
                </form> : null}


            <span> SignUp</span>
            {showSignup ?
                <form>
                    <label> email</label>
                    <input type="text" placeholder="Email"></input>
                    <label> password</label>
                    <input type="password" placeholder="password"></input>
                    <label> password confirmation</label>
                    <input type="password" placeholder="password confirmation"></input>
                    <button> submit</button>
                </form> : null}
        </div>
    );
};

export default Login

