import { render } from "@testing-library/react";
import React from "react";
// import MyServices from '../containers/MyServices'


class EditUserForm extends React.Component{

   
    state ={
        userProfile : {
          first_name: this.props.user.first_name,
          last_name: this.props.user.last_name,
          street: this.props.user.street,
          city: this.props.user.city,
          state: this.props.user.state,
          zipcode: this.props.user.zipcode,
          img_url: this.props.user.img_url
        }
      }

    //   componentDidMount(){
    //       this.setState({
    //          userProfile:{
    //             first_name: this.props.currentUser.first_name,
    //             last_name: this.props.currentUser.last_name,
    //             street: this.props.currentUser.street,
    //             city: this.props.currentUser.city,
    //             state: this.props.currentUser.state,
    //             zipcode: this.props.currentUser.zipcode,
    //          } 
    //       })
    //   }

    

    render() {
        // if(this.props.user){
        //     console.log(this.props,'hello')
        // }
        console.log(this.state.userProfile)
        const {first_name, last_name, img_url, street, city, state, zipcode} = this.state.userProfile
    
        
    return (

       <div className="form-container" >
       <form 

       onSubmit={(e) => this.props.handleFormSubmit(e)}
       onChange={(e) => this.props.handleFormChange(e)}
       >
        <div className="register-form">
        <div className="profile-form-row">
        {/* <label for="first_name">First Name</label> */}
        <input type="text" name="first_name" placeholder="First Name" value={first_name} />
        {/* <label for="last_name">Last Name</label> */}
        <input type="text" name="last_name" placeholder="Last Name" value={last_name} />
        {/* <label for="street">Street</label> */}
        <input type="text" name="street" placeholder="Street" value={street} />
        {/* <label for="city"> City</label> */}
        <input type="text" name="city" placeholder="City" value={city} />
        {/* <label for="zipcode">Zip Code</label> */}
        <input type="text" name="zipcode" placeholder="Zip Code" value={zipcode} />
        {/* <label for="props">props</label> */}
        <input type="text" name="state" placeholder="state" value={state} />
        {/* <label for="img_url">Image</label> */}
        <input type="text" name="img_url" placeholder="Image URL" value={img_url} />
        </div>
        </div>
        <div className="submit-button">
        <input type="submit" value="Submit" className="btn" />
        </div>
        </form>
        </div> 
    
    )
    }
}

export default EditUserForm;


// <div className="form-container" >
// <form>
// <div className="register-form">
// <div className="profile-form-row">
// {/* <label for="first_name">First Name</label> */}
// <input type="text" name="first_name" placeholder="First Name" value={first_name} />
// {/* <label for="last_name">Last Name</label> */}
// <input type="text" name="last_name" placeholder="Last Name" value={last_name} />
// {/* <label for="street">Street</label> */}
// <input type="text" name="street" placeholder="Street" value={street} />
// {/* <label for="city"> City</label> */}
// <input type="text" name="city" placeholder="City" value={city} />
// {/* <label for="zipcode">Zip Code</label> */}
// <input type="text" name="zipcode" placeholder="Zip Code" value={zipcode} />
// {/* <label for="props">props</label> */}
// <input type="text" name="state" placeholder="state" value={state} />
// {/* <label for="img_url">Image</label> */}
// <input type="text" name="img_url" placeholder="Image URL" value={img_url} />
// </div>
// </div>
// <div className="submit-button">
// <input type="submit" value="Submit" className="btn" />
// </div>
// </form>
// </div>