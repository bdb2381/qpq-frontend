import React from "react";

class EditUserForm extends React.Component {
  state = {
    user: {},
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

    const { id, first_name, last_name, img_url, city, street, zipcode, state, email } = this.props.user;
    return (
      <div className="form-container">
        <form
          onSubmit={(event) =>
            this.props.handleEditUserSubmit(
              event,
              this.state.user,
              id
            )
          }
        >
          <div className="register-form">
            <div className="profile-form-row">
              <label for="first_name">First Name</label>
              <b></b>
              <input
                onChange={(event) => this.handleFormChange(event)}
                type="text"
                name="first_name"
                placeholder={first_name}
                value={this.state.first_name}
              />
              <p></p>
              <label for="last_name">Last Name</label>
              <input
                onChange={(event) => this.handleFormChange(event)}
                type="text"
                name="last_name"
                placeholder={last_name}
                value={this.state.last_name}
              />
              <label for="email">Email</label>
              <input
                onChange={(event) => this.handleFormChange(event)}
                type="text"
                name="email"
                placeholder={email}
                value={this.state.email}
              />

              <label for="street">Street</label>
              <input
                onChange={(event) => this.handleFormChange(event)}
                type="text"
                name="street"
                placeholder={street}
                value={this.state.street}
              />
              <label for="city"> City</label>
              <input
                onChange={(event) => this.handleFormChange(event)}
                type="text"
                name="city"
                placeholder={city}
                value={this.state.city}
              />
              <label for="zipcode">Zip Code</label>
              <input
                onChange={(event) => this.handleFormChange(event)}
                type="text"
                name="zipcode"
                placeholder={zipcode}
                value={this.state.zipcode}
              />
              <label for="state">State</label>
              <input
                onChange={(event) => this.handleFormChange(event)}
                type="text"
                name="state"
                placeholder={state}
                value={this.state.state}
              />
              <label for="img_url">Image</label>
              <input
                onChange={(event) => this.handleFormChange(event)}
                type="text"
                name="img_url"
                placeholder={img_url}
                value={this.state.img_url}
              />
            </div>
          </div>
          <div className="submit-button">
            <input type="submit" value="Submit" className="btn" />
          </div>
        </form>
      </div>
    )
      ;
  }
}

export default EditUserForm;
