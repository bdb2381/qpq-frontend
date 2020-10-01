import React from "react";

const RequestCard = (props) => {
  const requestDetails = props.request;

  return (
    <div className="card">
      <div className="name">
        My Service: {requestDetails.requested_service.name}
        <p>Requester's Service: {requestDetails.response_service.name}</p>
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
