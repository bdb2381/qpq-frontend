import React from "react";
import EditUserForm from "./EditUserForm";
import UserInfo from "./UserInfo";

class ProfilePage extends React.Component {
  render() {
    // const {
    //   first_name,
    //   last_name,
    //   street,
    //   city,
    //   img_url,
    //   state,
    //   zipcode,
    // } = this.props.currentUser;

    return (
      // <div>
      //   <div className="two-column-grid">
      //     <div className="row">
      //       <div>
      //         <img
      //           className="profile-page-image"
      //           src={img_url}
      //           alt={first_name}
      //         />
      //       </div>
      //     </div>
      //     <div className="row">
      //       <h2>
      //         Name: {first_name} {last_name}
      //       </h2>
      //       <p>
      //         <strong>
      //           Address: {street}, {city}, {state}, {zipcode}
      //         </strong>
      //       </p>
      //       <br />
      //       <div></div>
      //       <br />
      //       <button
      //         className="edit-profile-button"
      //         onClick={() =>
      //           this.props.handleEditButton(this.props.currentUser)
      //         }
      //       >
      //         {" "}
      //         Edit My Profile{" "}
      //       </button>
      //       <br />
      //       <br />
      //       <button
      //         className="delete-profile-button"
      //         onClick={() =>
      //           this.props.handleUserDelete(this.props.currentUser)
      //         }
      //       >
      //         {" "}
      //         Delete My Profile
      //       </button>
      //       <br />
      //       <br />
      //     </div>
      //     <br />
      //   </div>
      <div>
        {this.props.currentUser ? (
          <UserInfo
            currentUser={this.props.currentUser.user}
            handleEditButton={this.props.handleEditButton}
            handleUserDelete={this.props.handleUserDelete}
          />
        ) : null}
        <div>
          {this.props.editDisable ? (
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
          ) : null}
        </div>
      </div>
    );
  }
}

export default ProfilePage;
