import React from "react";
import { Link } from "react-router-dom";
import GoogleApiWrapper from "../containers/MapContainer";

const ServiceSpecs = (props) => {
  console.log(props.currentUser.id);
  const {
    name,
    offeringDescription,
    exchangeDescription,
    img_url,
    value,
    user,
  } = props.service;

  return (
    <div className="service-specs">
      <div>
        <button className="closing-spec" onClick={props.specClick}>
          X
        </button>
      </div>
      <div className="name">{name}</div>
      <span>Value: {value} credits</span>
      <div className="image">
        <img className="spec-service_img" src={img_url} />
      </div>

      <div className="service-content">
        <div className="description">
          {" "}
          Offering Description:
          <div> {offeringDescription} </div>
        </div>
      </div>
      <div className="extra content">
        Will Exchange For:
        <div>{exchangeDescription}</div>
      </div>
      <div>
        {" "}
        Offering From: {user.first_name} in {user.city}, {user.state}
      </div>

      {props.currentUser.id === user.id ? null : (
        <button
          className="request-button"
          onClick={() =>
            props.handleRequestClick(props.service, props.currentUser.id)
          }
          type="button"
        >
          Request a QPQ from {user.first_name}
        </button>
      )}
      <div>
        {" "}
        <GoogleApiWrapper />
      </div>
    </div>
  );
};

export default ServiceSpecs;
