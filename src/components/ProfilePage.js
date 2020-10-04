import React from "react";
import EditUserForm from "./EditUserForm";
import UserInfo from "./UserInfo";

class ProfilePage extends React.Component {

  state = {
    user: {},
    editDisable: false
  }

  handleEditButton = (user) => {
    this.setState({
      user: user,
      editDisable: !this.state.editDisable,
    });

    //fetch patch request with the body of user
  };

  render() {
    console.log(this.props.user)
    return (
      <div>
        <h1> User</h1>
        <UserInfo
          user={this.props.user}
          handleEditButton={this.handleEditButton}
          handleUserDelete={this.props.handleUserDelete}
        />

        <div>
          {this.props.editDisable ? (
            <div>
              {
                <EditUserForm
                  handleEditButton={this.props.handleEditButton}
                  handleFormChange={this.props.handleFormChange}
                  user={this.props.user}
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
