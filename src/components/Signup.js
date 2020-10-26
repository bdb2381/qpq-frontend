import React from "react";
import { Link } from "react-router-dom";

class Signup extends React.Component {
  state = {
    user: {
      first_name: "",
      last_name: "",
      street: "",
      city: "",
      zipcode: "",
      birth_year: "",
      state: "",
      img_url: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
  };

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState((prevState) => ({
      user: { ...prevState.user, [name]: value },
    }));
  };

  render() {
    return (
      <div className="form-container">
        <form
          onChange={this.handleChange}
          onSubmit={(e) => this.props.handleSignUpSubmit(e, this.state.user)}
        >
          <div className="register-form">
            <div className="profile-form-row">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                value={this.state.first_name}
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={this.state.last_name}
              />
              <input
                type="text"
                name="street"
                placeholder="Street"
                value={this.state.street}
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={this.state.city}
              />
              <input
                type="text"
                name="zipcode"
                placeholder="Zip Code"
                value={this.state.zipcode}
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={this.state.state}
              />
              <input
                type="text"
                name="img_url"
                placeholder="Image URL"
                value={this.state.img_url}
              />
              <input
                type="number"
                name="birth_year"
                placeholder="Birth Year"
                defaultValue="1999"
                value={this.state.birth_year}
              />
            </div>

            <div className="profile-form-row">
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={this.state.email}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
              />
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
        <div>
          <p>
            <b>
              Created with{" "}
              <img
                alt="cool-cry-icon"
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

export default Signup;
