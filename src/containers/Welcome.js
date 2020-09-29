import React from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

export default class Welcome extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleLoginChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLoginSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;

    api.auth.login(email, password)
      .then((response) => {
        if (response.error) {
          this.setState({ error: true },
            console.log("hello helo"));
        }
        else {
          this.props.handleLogin(response);
          this.props.history.push('/');
        }
      });
  };



  render() {
    return (
      <div className="one-column-grid">
        <form onSubmit={(e) => this.handleLoginSubmit(e)}>
          <h1> Welcome to QPQ </h1>
          <h2>Please log in below:</h2>
          <div className="profile-form-row-center">
            <label for="email"> Email</label>
            <input
              onChange={(e) => this.handleLoginChange(e)}
              type="text"
              value={this.state.email}
              name="email"
              placeholder="Email"
            ></input>
          </div>

          <div className="profile-form-row-center">
            <label for="password">Password</label>
            <input
              onChange={(e) => this.handleLoginChange(e)}
              type="password"
              value={this.state.password}
              name="password"
              placeholder="Password"
            ></input>
          </div>


          <br></br>
          <button>Submit</button>
        </form>
        <div>
          <br></br>
          <Link to="/signup" className="signup-link">
            New here? Click here to create an account!
          </Link>
        </div>
        <div>
          <p>
            <b>
              Created with{" "}
              <img
                src="https://pbs.twimg.com/media/EF-36wfWwAEtTNY.jpg"
                width="5%"
              />{" "}
              by Noa, Nathan, Akiko & Brad
            </b>
          </p>
        </div>
      </div>
    );
  }
}
