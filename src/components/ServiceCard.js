import React from "react";

const ServiceCard = (props) => {
  const {
    name,
    offeringDescription,
    exchangeDescription,
    img_url,
    value,
    categories,
    isService,
  } = props.service;

  const serviceDetails = props.service;

  return (
    <div
      className="card"
      onClick={(event) => props.cardClick(event, serviceDetails)}
    >
      <div className="name">{name}</div>

      <div className="image">
        <img className="service_img" src={img_url} />
      </div>
      <div className="service-content">
        <div className="description">{offeringDescription}</div>
      </div>
      <div className="service-value">{value} credits</div>
      <div className="extra-content">
        {props.service.categories.length > 0 ? (
          <div>
            {props.service.categories.map((category) => (
              <li key={category.id} className="extra-content-li">
                {category.name}
              </li>
            ))}
          </div>
        ) : (
          "No Category"
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
