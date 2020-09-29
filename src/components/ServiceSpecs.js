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
    <div className="card" onClick={props.specClick}>
      <div className="image">
        <img className="service_img" src={img_url} />
      </div>
      :
      <div className="service-content">
        <div className="name">{name}</div>
        <div className="description">
          {" "}
          i<div> Description: </div>
          {offeringDescription}
        </div>
      </div>
      <span>Value: {value}</span>
      <div className="extra content">
        <span className="right floated">{exchangeDescription}</span>
      </div>
      {console.log("from the serviceSpecs")}
    </div>
  );
};

export default ServiceSpecs;
