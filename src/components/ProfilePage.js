import React from "react";
import EditUserForm from "./EditUserForm";

class ProfilePage extends React.Component {
  render() {
<<<<<<< HEAD

    const {first_name, last_name, street, city,img_url, state, zipcode} = this.props.currentUser

    console.log(this.props.user)
=======
    const {
      first_name,
      last_name,
      street,
      city,
      img_url,
      state,
      zipcode,
    } = this.props.currentUser;
>>>>>>> 45be324583566480cc02e133d657e1c9ed91177a
    // passed down here is the current user of props
    //just passed down the current user
    return (
      
      // <div>
      // </div>
      <div>
        <div className="two-column-grid">
          <div className="row">
            <div>
              <img
                className="profile-page-image"
                src={img_url}
                alt={first_name}
              />
            </div>
          </div>
          <div className="row">
            <h2>
              Name: {first_name} {last_name}
            </h2>
            <p>
              {" "}
              <strong>
                {" "}
                Address: {street}, {city}, {state}, {zipcode}{" "}
              </strong>
            </p>
            <br />
            <div></div>
            <br />
            <button
              className="edit-profile-button"
              onClick={() => this.props.handleEditButton(this.props.user)}
            >
              {" "}
              Edit My Profile{" "}
            </button>
            <br />
            <br />
            <button
              className="delete-profile-button"
              // onClick={() => this.handleEditButton(this.props.user)}
            >
              {" "}
              Delete My Profile{" "}
            </button>
          </div>
<<<<<<< HEAD
          <br />
          <button

            className="edit-profile-button"
            onClick={() => this.props.handleEditButton(this.props.currentUser)}
          > Edit My Profile </button>
          <br/>
          <br/>
          <button
          className="delete-profile-button"
          onClick={() => this.props.handleUserDelete(this.props.currentUser)}
        > Delete My Profile </button>
=======
>>>>>>> 45be324583566480cc02e133d657e1c9ed91177a
        </div>

        <div>
          {
            <EditUserForm
              handleEditButton={this.props.handleEditButton}
              handleFormChange={this.props.handleFormChange}
              currentUser={this.props.currentUser.user}
              handleEditUserSubmit={this.props.handleEditUserSubmit}
            />
          }
        </div>
      </div>
    );
  }
}

export default ProfilePage;
