import { render } from "@testing-library/react";
import React from "react";
// import MyServices from '../containers/MyServices'

class EditUserForm extends React.Component {
  state = {
    user: {},
    // first_name: "",
    // last_name: "",
    // street: "",
    // city: "",
    // zipcode: "",
    // state: "",
  };

  handleFormChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        [name]: value,
      },
    }));
  };

  render() {
    return this.props.currentUser ? (
      <div className="form-container">
        <form
          onSubmit={(event) =>
            this.props.handleEditUserSubmit(
              event,
              this.state.user,
              this.props.currentUser.id
            )
          }
          // onSubmit={(e) => this.props.handleFormSubmit(e)}
          // onChange={(event) => this.handleFormChange(event)}
        >
          <div className="register-form">
            <div className="profile-form-row">
              <label for="first_name">First Name</label>
              <input
                onChange={(event) => this.handleFormChange(event)}
                disabled={this.state.disabled}
                type="text"
                name="first_name"
                placeholder={this.props.currentUser.first_name}
                value={this.state.first_name}
              />
              <p></p>
              <label for="last_name">Last Name</label>
              <input
                onChange={(event) => this.handleFormChange(event)}
                type="text"
                name="last_name"
                placeholder={this.props.currentUser.last_name}
                value={this.state.last_name}
              />

              <label for="street">Street</label>
              <input
                onChange={(event) => this.handleFormChange(event)}
                type="text"
                name="street"
                placeholder={this.props.currentUser.street}
                value={this.state.street}
              />
              <label for="city"> City</label>
              <input
                onChange={(event) => this.handleFormChange(event)}
                type="text"
                name="city"
                placeholder="City"
                value={this.state.city}
              />
              <label for="zipcode">Zip Code</label>
              <input
                onChange={(event) => this.handleFormChange(event)}
                type="text"
                name="zipcode"
                placeholder={this.props.currentUser.zipcode}
                value={this.state.zipcode}
              />
              <label for="state">State</label>
              <input
                onChange={(event) => this.handleFormChange(event)}
                type="text"
                name="state"
                placeholder={this.props.currentUser.state}
                value={this.state.state}
              />
              <label for="img_url">Image</label>
              <input
                onChange={(event) => this.handleFormChange(event)}
                type="text"
                name="img_url"
                placeholder={this.props.currentUser.img_url}
                value={this.state.img_url}
              />
            </div>
          </div>
          <div className="submit-button">
            <input type="submit" value="Submit" className="btn" />
          </div>
        </form>
      </div>
    ) : (
      <div>Pokemon </div>
    );
  }
}

export default EditUserForm;
