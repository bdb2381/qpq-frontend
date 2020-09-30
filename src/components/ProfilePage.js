import React from "react";
import MyServices from '../containers/MyServices'
import EditUserForm from "./EditUserForm";


class ProfilePage extends React.Component {

  state = {
    user: {
      first_name: "",
      last_name: "",
      img_url: "",
      street: "",
      city: "",
      state: "",
      zipcode: ""
    }
  }
  handleEditButton = (user) =>{
    this.setState({
      user: user
    })
  }

  render() {
  const {id, first_name, last_name, img_url, street, city, state, zipcode } = this.props.user
    return (
      <div >
        <div className="two-column-grid">
          <div className="row">
            <div>
              <img
                className="profile-page-image"
                src={img_url} alt={first_name}
              />
            </div>
          </div>
          <div className="row">
            <h2>Name: {first_name} {last_name}</h2>
            <p> <strong> Address: {street}, {city}, {state}, {zipcode} </strong></p>
            <br />
            <div>
            </div>
            <br />
            <button
              className="edit-profile-button"
              onClick={() => this.handleEditButton(this.props.user)}
            > Edit My Profile </button>
          </div>
        </div>
        <div>
          <MyServices />
        </div>
        <EditUserForm
        user={this.props.user}
         {...this.handleClick} />
      </div>
    );
  };

}




export default ProfilePage;
