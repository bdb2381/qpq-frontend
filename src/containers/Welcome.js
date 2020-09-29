import React from "react";
import { Link } from 'react-router-dom'



export default class Welcome extends React.Component {
    state = {
        loggedIn: false
    }

    render() {
        return (
            <div className="one-column-grid">
                <form >
                    <h1> Welcome to QPQ </h1>
                    <h2>Please log in below:</h2>
                    <div className="profile-form-row-center">
                        <label for="email"> Email</label>
                        <input type="text" value={null} name="email" placeholder="Email"></input>
                    </div>

                    <div className="profile-form-row-center">
                        <label for="password">Password</label>
                        <input type="text" value={null} name="password" placeholder="Password" ></input>
                    </div>
                    <div className="remember-me-checkbox">
                        <input className="remember-me-input" name="remember_me" value={null} type="checkbox"></input>
                        <label for="remember_me">Remember me</label>
                    </div>

                    <br>

                    </br>
                    <button>Submit</button>
                </form>
                <div>
                    <br></br>
                    <Link to="/signup" className="signup-link">New here? Click here to create an account!</Link>
                </div>
                <div>
                    <p><b>Created with <img src="https://pbs.twimg.com/media/EF-36wfWwAEtTNY.jpg" width="5%" /> by Noa, Nathan, Akiko & Brad</b></p>
                </div>
            </div>
        )
    }
}

