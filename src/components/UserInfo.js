import React from "react";

const UserInfo = (props) => {
  console.log(props.currentUser);

  return (
    <div>
      {" "}
      {props.currentUser ? (
        <div className="two-column-grid">
          <div className="row">
            <div>
              <img
                className="profile-page-image"
                src={props.currentUser.img_url}
                alt={props.currentUser.first_name}
              />
            </div>
          </div>
          <div className="row">
            <h2>
              Name: {props.currentUser.first_name} {props.currentUser.last_name}
            </h2>
            <p>
              <strong>
                Address: {props.currentUser.street}, {props.currentUser.city},{" "}
                {props.currentUser.state}, {props.currentUser.zipcode}
              </strong>
            </p>
            <br />
            <div></div>
            <br />
            <button
              className="edit-profile-button"
              onClick={() => props.handleEditButton(props.currentUser)}
            >
              {" "}
              Edit My Profile{" "}
            </button>
            <br />
            <br />
            <button
              className="delete-profile-button"
              onClick={() => props.handleUserDelete(props.currentUser)}
            >
              {" "}
              Delete My Profile
            </button>
            <br />
            <br />
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};
export default UserInfo;
