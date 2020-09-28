import React from "react";


const ServiceCard = ({ service }) => {
  return (
    <div className="card">
      <div className="image">
        <img className="service_img" src={service.img_url} />
      </div>
      <div className="service-content">
        <div className="name">{service.name}</div>
        <div className="description"> <div> Description: </div>
          {service.offeringDescription}
        </div>
      </div>
      <span>
        Value: {service.value}
      </span>

      <div className="extra content">
        <span className="right floated">
          {service.exchangeDescription}
        </span>
      </div>
    </div>

  );
};

export default ServiceCard;
