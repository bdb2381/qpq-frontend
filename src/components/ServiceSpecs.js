import React from "react";

const ServiceSpecs = (props) => {
  const {
    name,
    offeringDescription,
    exchangeDescription,
    img_url,
    value,
  } = props.service;

  return (
    <div className="service-specs" onClick={props.specClick}>
      <div className="name">{name}</div>
      <span>Value: {value} credits</span>
      <div className="image">
        <img className="spec-service_img" src={img_url} />
      </div>

      <div className="service-content">
        <div className="description">
          {" "}
          Description:
          <div> {offeringDescription} </div>

        </div>
      </div>
      <div className="extra content">
        <span className="right floated">{exchangeDescription}</span>
      </div>
      {console.log("from the serviceSpecs")}
    </div>
  );
};

export default ServiceSpecs;
