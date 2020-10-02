import React from "react";

const RequestCard = (props) => {
  const requestDetails = props.request;

  return (
    <div className="card">
      <div className="name">
        Your Service: <br></br>
        {requestDetails.requested_service.name}
        <p>
          You Will Receive in Return:<br></br>{" "}
          {requestDetails.response_service.name}
        </p>
        <p>
          Message:<br></br> {requestDetails.message}
        </p>
        {requestDetails.status === "pending" ? (
          <div>
            <button
              name="approved"
              onClick={(event) =>
                props.handleRequestClick(event, requestDetails)
              }
            >
              Approve
            </button>
            <button
              name="denied"
              onClick={(event) =>
                props.handleRequestClick(event, requestDetails)
              }
            >
              Deny
            </button>
          </div>
        ) : (
          <div>
            <h4>{requestDetails.status}</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestCard;
