import React, { Fragment } from "react";
// import MyServices from '../containers/MyServices'
import EditUserForm from "./EditUserForm";


class ProfilePage extends React.Component {
  
state = {
  user: {}
}

  // componentDidMount(){
  //   this.setState({
  //     user: this.props.currentUser
  //   })
  // }


  render() {
    // const {first_name, last_name, img_url, street, city, state, zipcode} = this.props.currentUser
    return (
    <>
      <div>
      {this.props.currentUser ? 
        <Fragment>
        <div className="two-column-grid">
          <div className="row">
            <div>
              <img
                className="profile-page-image"
                src={this.props.currentUser.img_url} alt={this.props.currentUser.first_name}
              />
            </div>
          </div>
          <div className="row">
            <h2>Name: {this.props.currentUser.first_name} {this.props.currentUser.last_name}</h2>
            <p> <strong> Address: {this.props.currentUser.street}, {this.props.currentUser.city}, {this.props.currentUser.state}, {this.props.currentUser.zipcode} </strong></p>
            <br />
            <div>
            </div>
            <br />
            <button
              className="edit-profile-button"
              onClick={() => this.props.handleEditButton()}
            > Edit My Profile </button>
            <br/>
            <br/>
            <button
            className="delete-profile-button"
            // onClick={() => this.handleEditButton(this.props.user)}
          > Delete My Profile </button>
          </div>
        </div>
        <div>
      {/*<Service />*/ }
        </div>
        <EditUserForm
        user={this.props.currentUser}
        handleEditButton={this.props.handleEditButton}
        handleFormChange={this.props.handleFormChange} />
        </Fragment>
        : "User Does not exist" }
      </div>
      </>
    );
  };
};


export default ProfilePage;