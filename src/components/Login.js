import React from "react";


const Login = (props) => {
    return (
        <div>

            <button > Login </button>
            <form>
                <label> email</label>
                <input type="text" placeholder="Email"></input>
                <label> password</label>
                <input type="password" placeholder="password"></input>
                <button> submit</button>
            </form>


            <button> SignUp</button>
            <form>
                <label> email</label>
                <input type="text" placeholder="Email"></input>
                <label> password</label>
                <input type="password" placeholder="password"></input>
                <label> password confirmation</label>
                <input type="password" placeholder="password confirmation"></input>
                <button> submit</button>
            </form>
        </div>
    );
};

export default Login

