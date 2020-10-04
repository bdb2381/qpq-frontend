import React from "react";
import EditUserForm from "./EditUserForm";
import UserInfo from "./UserInfo";
import { withRouter } from "react-router-dom";



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
    const token = localStorage.getItem("token");
    console.log(user, token);
    fetch(`http://localhost:3000/api/v1/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearers ${token}`,
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {

        this.setState({
          editDisable: !this.state.editDisable,
          user: data
        })
      }
      )
  };

  handleUserDelete = (user) => {
    const token = localStorage.getItem("token");
    fetch(`http://localhost:3000/api/v1/users/${user.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearers ${token}`,
      }
    })
      .then((res) => res.json())
      .then(
        localStorage.removeItem("token"),
        this.setState({ user: {} }),
        this.props.history.push("/"))

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
