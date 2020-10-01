import React, { Component } from "react";
import RequestCard from "../components/RequestCard";
import api from "../services/api";

class RequestsContainer extends Component {
  state = {
    requestsToMe: [],
    requestsToOthers: [],
    request: {},
    temp: "",
  };

  handleRequestClick = (event, requestDetails) => {
    console.log(event.target.name);
    console.log(requestDetails);

    api.requests
      .patchRequestStatus(event.target.name, requestDetails.id)
      .then((data) =>
        this.setState({
          temp: data,
          // requestsToMe: [...this.state.requestsToMe, (status: data)],
        })
      );
  };

  filterRequestsByUserId = (requests) => {
    let currentUser = this.props.currentUser;

    let requestsToMe = requests.filter(
      (request) => request.requested_service.user_id === currentUser.id
    );
    let requestsToOthers = requests.filter(
      (request) => request.response_service.user_id === currentUser.id
    );

    this.setState({
      requestsToMe: requestsToMe,
      requestToOthers: requestsToOthers,
    });
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/requests")
      .then((res) => res.json())
      // .then((requests) => this.setState({ requests }));
      .then((requests) => this.filterRequestsByUserId(requests));
  }

  render() {
    console.log(this.state.requests);
    return (
      <div>
        <div>
          <h1>PEOPLE WHO WANT ME</h1>
          {this.state.requestsToMe.map((request) => (
            <RequestCard
              key={request.index}
              request={request}
              handleRequestClick={this.handleRequestClick}
            />
          ))}

          <h1>My Requests To Others</h1>
          {this.state.requestsToOthers.map((request) => (
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
