import React from "react";
import EditUserForm from "./EditUserForm";
import UserInfo from "./UserInfo";

class ProfilePage extends React.Component {
  render() {
    return (
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
