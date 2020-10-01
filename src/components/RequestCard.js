import React from "react";

const RequestCard = (props) => {
  const requestDetails = props.request;

  console.log(requestDetails);

  return (
    <div className="card">
      <div className="name">
        Requested Service: {requestDetails.requested_service.name}
        <p>Exchanged Service: {requestDetails.response_service.name}</p>
        <button
          onClick={(event) => props.handleRequestClick(event, requestDetails)}
        >
          Approve
        </button>
        <button
          onClick={(event) => props.handleRequestClick(event, requestDetails)}
        >
          Deny
        </button>
      </div>
    </div>
  );
};

export default RequestCard;
