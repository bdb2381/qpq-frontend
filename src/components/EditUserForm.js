import React from "react";
// import MyServices from '../containers/MyServices'

const EditUserForm = (props) => {
  if (props.currentUser) {
    let currentUser = props.currentUser;
    console.log(currentUser.first_name);
  }

  return props.currentUser ? (
    <div className="form-container">
      <form
      // onSubmit={(e) => props.handleFormSubmit(e)}
      // onChange={(e) => props.handleFormChange(e)}
      >
        <div className="register-form">
          <div className="profile-form-row">
            <label for="first_name">First Name</label>
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              value={props.currentUser.first_name}
            />
            <label for="last_name">Last Name</label>
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={props.currentUser.last_name}
            />
            <label for="street">Street</label>
            <input
              type="text"
              name="street"
              placeholder="Street"
              value={props.currentUser.street}
            />
            <label for="city"> City</label>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={props.currentUser.city}
            />
            <label for="zipcode">Zip Code</label>
            <input
              type="text"
              name="zipcode"
              placeholder="Zip Code"
              value={props.currentUser.zipcode}
            />
            <label for="props">State</label>
            <input
              type="text"
              name="state"
              placeholder="state"
              value={props.currentUser.state}
            />
            <label for="img_url">Image</label>
            <input
              type="text"
              name="img_url"
              placeholder="Image URL"
              value={props.currentUser.img_url}
            />
          </div>
        </div>
        <div className="submit-button">
          <input type="submit" value="Submit" className="btn" />
        </div>
      </form>
    </div>
  ) : (
    <div>Pokemon </div>
  );
};

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
