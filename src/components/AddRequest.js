import React from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

class Signup extends React.Component {
  state = {
    newRequest: {
      message: "",
    },
  };

  handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState((prevState) => ({
      newUser: { ...prevState.newUser, [name]: value },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let newUser = this.state.newUser;
    api.auth.signup(newUser).then((response) => {
      if (response.error) {
        alert(response.error);
        this.setState({ error: true });
      } else {
        this.props.handleLogin(response);
        this.props.history.push("/");
      }
    });
  };

  render() {
    return (
      <div className="form-container">
        <form
          onChange={(e) => this.handleOnChange(e)}
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <div className="register-form">
            <div className="profile-form-row">
              <label for="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={this.state.email}
              />
              <label for="password"> Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
              />
              <label for="password_confirmation"> Password Confirmation</label>
              <input
                type="password"
                name="password_confirmation"
                placeholder="password Confirmation"
                value={this.state.password_confirmation}
              />
            </div>
          </div>

          <div className="submit-button">
            <input type="submit" value="Submit" className="btn" />
          </div>
        </form>
        <Link exact to="/login" className="signup-link">
          Already have an account?
        </Link>
      </div>
    );
  }
}

export default Signup;
