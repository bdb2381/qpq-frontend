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

  };
  handleFormChange = (event) => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value,
      },
    });
  };
  //handle user submit
  handleEditUserSubmit = (event, user, id) => {
    event.preventDefault();
    console.log(event, user, id);
    //fetch patch request with event.value
    // api.users.patchUserProfile(user, id).then(
    //   this.setState({
    //     editDisable: !this.state.editDisable,
    //     auth: { currentUser: { ...this.state.currentUser, user } },
    //   })
    // );
  };

  handleUserDelete = (user) => {
    // api.users.handleDeleteButton(user.id);

    localStorage.removeItem("token");
    this.setState({ auth: { currentUser: {} } });
  };

  render() {
    return (
      <div>
        <h1> User</h1>
        <UserInfo
          user={this.props.user}
          handleEditButton={this.handleEditButton}
          handleUserDelete={this.handleUserDelete}
        />



        <div>
          {this.state.editDisable ? (
            <div>
              hello
              {
                <EditUserForm
                  handleEditButton={this.handleEditButton}
                  handleFormChange={this.handleFormChange}
                  user={this.props.user}
                  handleEditUserSubmit={this.handleEditUserSubmit}
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
