import React from "react";
import MyServices from '../containers/MyServices'


class ProfilePage extends React.Component {

  render() {
  const {id, first_name, last_name, img_url, street, city, state, zipcode } = this.props.user
    return (
      <div >
        <div className="two-column-grid">
          <div className="row">
            <div>
              <img
                className="profile-page-image"
                src={img_url} alt={first_name}
              />
            </div>
          </div>
          <div className="row">
            <h2>Name: {first_name} {last_name}</h2>
            <p> <strong> Address: {street}, {city}, {state}, {zipcode} </strong></p>
            <strong> Other info? : </strong>
            <br />
            <div>
            </div>

            <br />
            <button
              className="edit-profile-button"
              onClick={(e) => this.handleEdit(e)}
            > Edit My Profile </button>
          </div>
        </div>
        <div>
          <MyServices />
        </div>
      </div>
    );
  };

}




export default ProfilePage;
