import React from "react";

const RequestCard = (props) => {
  const requestDetails = props.request;

  return (
    <div className="card">
      <div className="request-card">
        Your Service:
        <p className="service-name">{requestDetails.requested_service.name}</p>
        You Will Receive in Return:{" "}
        <p className="service-name"> {requestDetails.response_service.name}</p>
        More Information:
        <p className="request-message"> {requestDetails.message} </p>
        <br></br>
        <p className="request-value">
          {" "}
          Value: {requestDetails.response_service.value}{" "}
        </p>
        {requestDetails.status === "pending" ? (
          <div>
            <button
              className="button-approve-request"
              name="approved"
              onClick={(event) =>
                props.handleRequestClick(event, requestDetails)
              }
            >
              Approve
            </button>
            <button
              className="button-deny-request"
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
            {requestDetails.status === "denied" ? (
              <p className="request-denied"> {requestDetails.status}</p>
            ) : (
              <p className="request-approved"> {requestDetails.status}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestCard;
