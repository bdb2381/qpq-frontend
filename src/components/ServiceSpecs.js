import React from "react";
import GoogleApiWrapper from "../containers/MapContainer";

const handleRequestClick = (serviceDetails) => {
  // need to wire to request component. Will we change state for render or <Link>
};

const ServiceSpecs = (props) => {
  const {
    name,
    offeringDescription,
    exchangeDescription,
    img_url,
    value,
    user,
    categories,
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
        <img className="spec-service_img" src={img_url} alt={name} />
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
        {!categories.length > 0 ? null : (
          <div>
            {" "}
            <br></br>
            <div>
              Categories:
              {categories.map((category, index) => (
              <li key={index}> {category.name}</li>
            ))}
            </div>{" "}
            <br></br>
          </div>
        )}
      </div>

      {props.currentUser.id === user.id ? (
        <div className="your-service"> Your Service </div>
      ) : (
          <div>
            <div>
              Offering From: {user.first_name} in {user.city}, {user.state}
            </div>

            <button
              className="request-button"
              onClick={() => handleRequestClick(props.service)}
              type="button"
            >
              Request a QPQ from {user.first_name}
            </button>
          </div>
        )}
      <div>
        {" "}
        <GoogleApiWrapper latitude={user.latitude} longitude={user.longitude} />
      </div>
    </div>
  );
};

export default ServiceSpecs;
