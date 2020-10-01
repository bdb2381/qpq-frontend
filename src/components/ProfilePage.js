import React from "react";
import MyServices from '../containers/MyServices'
import EditUserForm from "./EditUserForm";


class ProfilePage extends React.Component {


  // state = {
  //   user: {
  //     first_name: "",
  //     last_name: "",
  //     img_url: "",
  //     street: "",
  //     city: "",
  //     state: "",
  //     zipcode: ""
  //   }
  // }

  // handleEditButton = (user) =>{
  //   this.setState({
  //     user: user
  //   })
  //   console.log(user)
  // }



  // handleFormChange = (e) =>{
  //   this.setState({
  //     user: {
  //       ...this.state.user,
  //       [e.target.name]: e.target.value
  //     }
  //   })

  // }

  render() {
    // passed down here is the current user of props
    //just passed down the current user 
console.log(this.props.currentUser)
    return (
      <div></div>
      // <div >
      //   <div className="two-column-grid">
      //     <div className="row">
      //       <div>
      //         <img
        //         className="profile-page-image"
        //         src={img_url} alt={first_name}
        //       />
        //     </div>
        //   </div>
        //   <div className="row">
        //     <h2>Name: {first_name} {last_name}</h2>
        //     <p> <strong> Address: {street}, {city}, {state}, {zipcode} </strong></p>
        //     <br />
        //     <div>
        //     </div>
        //     <br />
        //     <button
        //       className="edit-profile-button"
        //       onClick={() => this.handleEditButton(this.props.user)}
        //     > Edit My Profile </button>
        //     <br/>
        //     <br/>
        //     <button
        //     className="delete-profile-button"
        //     // onClick={() => this.handleEditButton(this.props.user)}
        //   > Delete My Profile </button>
        //   </div>
        // </div>
        // <div>
        //   <MyServices />
        // </div>
        // <EditUserForm
        // user={this.props.user}
        // handleEditButton={this.handleEditButton}
        // handleFormChange={this.handleFormChange} />
      // </div>
    );
  };

}




export default ProfilePage;
