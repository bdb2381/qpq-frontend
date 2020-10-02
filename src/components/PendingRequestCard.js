import React from "react";

const PendingRequestCard = (props) => {
  const requestDetails = props.request;

  return (
    <div className="card">
      <div className="name">
        <p>
          {" "}
          Your Service: <br></br>
          {requestDetails.requested_service.name}
        </p>

        <p>
          You Will Receive in Return:<br></br>{" "}
          {requestDetails.response_service.name}
        </p>

        <p>
          Message: <br></br>
          {requestDetails.message}
        </p>

        <h3> Waiting to be approved</h3>
      </div>
    </div>
  );
};

export default PendingRequestCard;
