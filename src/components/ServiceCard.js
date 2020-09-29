import React from "react";

const ServiceCard = (props) => {
  const {
    name,
    offeringDescription,
    exchangeDescription,
    img_url,
    value,
  } = props.service;

  const serviceDetails = props.service;

  return (
    <div
      className="card"
      onClick={(event) => props.cardClick(event, serviceDetails)}
    >
      <div className="image">
        <img className="service_img" src={img_url} />
      </div>
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
    </div>
  );
};

export default ServiceCard;
