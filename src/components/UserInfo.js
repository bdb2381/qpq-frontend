import React from "react";

const UserInfo = (props) => {

  return (
    <div>
      {" "}
      {props.user ? (
        <div className="two-column-grid">
          <div className="row">
            <div >
              <img
                className="profile-page-image"
                src={props.user.img_url}
                alt={props.user.first_name}
              />
            </div>
          </div>
          <div className="row">
            <h2 className="user-profile-information">
              Hello {props.user.first_name} {props.user.last_name}
            </h2>
            <p>
              <strong className="user-profile-information">
                Address:
               <br></br>{props.user.street}, {props.user.city},{" "}
                {props.user.state}, {props.user.zipcode}
              </strong>
            </p>
            <br />
            <div></div>
            <br />
            <button
              className="edit-profile-button"
              onClick={() => props.handleEditButton(props.user)}
            >
              {" "}
              Edit My Profile{" "}
            </button>
            <br />
            <br />
            <button
              className="delete-profile-button"
              onClick={() => props.handleUserDelete(props.user)}
            >
              {" "}
              Delete My Profile
            </button>
            <br />
            <br />
          </div>
        </div>
      ) : (
          "Deleted...sad."
        )}
    </div>
  );
};
export default UserInfo;
