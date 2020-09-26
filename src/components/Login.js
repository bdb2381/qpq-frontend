import React from "react";


const Login = ({ handleLoginClick, showSignup, showLogin }) => {
    return (
        <div className="navbar-list">

            <div >
                {showLogin ?
                    <form className="login-form">
                        <input type="text" placeholder="Email"></input>
                        <input type="password" placeholder="password"></input>
                        <button> Login</button>
                    </form> :
                    <a onClick={handleLoginClick}>Login</a>}
            </div>



            <a> SignUp</a>
            {
                showSignup ?
                    <form>
                        <label> email</label>
                        <input type="text" placeholder="Email"></input>
                        <label> password</label>
                        <input type="password" placeholder="password"></input>
                        <label> password confirmation</label>
                        <input type="password" placeholder="password confirmation"></input>
                        <button> submit</button>
                    </form> : null
            }

            <div className="search-container">
                <button type="submit"><i class="fa fa-search"></i></button>
                <input type="text" onChange={null} />
            </div>

        </div >
    );
};

export default Login

