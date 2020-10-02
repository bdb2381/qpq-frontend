import React, { Component } from "react";
import RequestCard from "../components/RequestCard";
import PendingRequestCard from "../components/PendingRequestCard";
import api from "../services/api";

class RequestsContainer extends Component {
  state = {
    auth: { currentUser: {} },
    requestsToMe: [],
    requestsToOthers: [],
    archiveRequest: [],
    request: {},
    temp: "",
  };
  componentDidMount() {
    fetch("http://localhost:3000/api/v1/requests")
      .then((res) => res.json())
      .then((requests) => this.filterRequestsByUserId(requests));

    const token = localStorage.getItem("token");
    if (token) {
      api.auth.getCurrentUser().then((user) => {
        const currentUser = { currentUser: user };
        this.setState({ auth: currentUser });
      });
    }
  }

  handleRequestClick = (event, requestDetails) => {
    let value = event.target.name;
    let updateRequests = this.state.requestsToMe.filter(
      (request) => request.id !== requestDetails.id
    );
    api.requests.patchRequestStatus(value, requestDetails.id).then((data) => {
      this.setState({ archiveRequest: [...this.state.archiveRequest, data] });
      this.setState({ requestsToMe: updateRequests });
    });
  };

  filterRequestsByUserId = (requests) => {
    let currentUser = this.props.currentUser;

    let requestsToMe = requests.filter(
      (request) =>
        request.requested_service.user_id === currentUser.id &&
        request.status === "pending"
    );
    let archivedRequestsToMe = requests.filter(
      (request) =>
        request.requested_service.user_id === currentUser.id &&
        request.status !== "pending"
    );

    let requestsToOthers = requests.filter(
      (request) =>
        request.response_service.user_id === currentUser.id &&
        request.status === "pending"
    );
    let archivedRequestsToOthers = requests.filter(
      (request) =>
        request.response_service.user_id === currentUser.id &&
        request.status !== "pending"
    );
    let archiveRequest = archivedRequestsToMe.concat(archivedRequestsToOthers);

    this.setState({
      requestsToMe: requestsToMe,
      requestsToOthers: requestsToOthers,
      archiveRequest: archiveRequest,
    });
  };

  render() {
    return (
      <div>
        <div>
          <h1>Perspective Offer</h1>
          {this.state.requestsToMe.map((request) => (
            <RequestCard
              key={request.index}
              request={request}
              handleRequestClick={this.handleRequestClick}
            />
          ))}

          <h1>My Requests</h1>
          {this.state.requestsToOthers.map((request) => (
            <PendingRequestCard
              key={request.id}
              request={request}
              handleRequestClick={this.handleRequestClick}
            />
          ))}

          <h1>Archive</h1>
          {this.state.archiveRequest.map((request) => (
            <RequestCard
              key={request.id}
              request={request}
              handleRequestClick={this.handleRequestClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default RequestsContainer;
