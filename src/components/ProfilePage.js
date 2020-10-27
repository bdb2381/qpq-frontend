import React from "react";
import EditUserForm from "./EditUserForm";
import UserInfo from "./UserInfo";
import { withRouter } from "react-router-dom";
import api from "../services/api";



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

  handleEditUserSubmit = (event, user, id) => {
    event.preventDefault();
    api.users.patchUserProfile(user, id)
      .then((data) => {
  
        this.setState({
          editDisable: !this.state.editDisable,
          user: data
        })
        this.props.updateUserDetails(data)
      }
      )
  };

  handleUserDelete = (user) => {
      api.users.handleDeleteButton(user.id)
    
      .then(data => {
        console.log(data)
        if (!data.error) {
          localStorage.removeItem("token")
          this.props.history.push("/login")
        }})
         
  };

  render() {
    return (
      <div>
        {localStorage.token ? (
          <div> <h1> User</h1>
            <UserInfo
              user={this.props.user}
              handleEditButton={this.handleEditButton}
              handleUserDelete={this.handleUserDelete}
            /></div>) : null}



        <div>
          {this.state.editDisable ? (
            <div>
              <br></br>
              Edit your Profile:
              {
                <EditUserForm
                  handleEditButton={this.handleEditButton}
                  handleFormChange={this.handleFormChange}
                  user={this.state.user}
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

export default withRouter(ProfilePage);
