import React from "react";
import MyServices from '../containers/MyServices'


class ProfilePage extends React.Component {

  render() {
    return (
      <div >
        <div className="two-column-grid">
          <div className="row">
            <div>
              <img
                className="profile-page-image"
                src="https://i.ytimg.com/vi/RCSTnK1gfzs/maxresdefault.jpg"
              />
            </div>
          </div>
          <div className="row">
            <h2>Name: name</h2>
            <p> <strong> Address: : </strong></p>
            <strong> Other info? : </strong>
            <br />
            <div>
            </div>

            <br />
            <button
              className="edit-profile-button"
              onClick={null}
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
