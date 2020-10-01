import React from "react";

const RequestCard = (props) => {
  const requestDetails = props.request;

  return (
    <div className="card">
      <div className="name">
        <p> My Service: {requestDetails.requested_service.name}</p>
        <p> user_id: {requestDetails.requested_service.user_id}</p>
        <p> service_id {requestDetails.requested_service.id}</p>
        <p>Requester's Service: {requestDetails.response_service.name}</p>
        <p>setbice id: {requestDetails.response_service.id}</p>
        <p>Requester's user id: {requestDetails.response_service.user_id}</p>
        <p>message: {requestDetails.message}</p>
        <p>id: {requestDetails.id}</p>
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
