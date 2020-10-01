import React, { Component } from "react";
import RequestCard from "../components/RequestCard";

class RequestsContainer extends Component {
  state = {
    requests: [],
    request: {},
    approvedRequests: [],
    deniedRequests: [],
  };

  handleRequestClick = (event) => {
    console.log(event.target.innerText);
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/requests")
      .then((res) => res.json())
      .then((requests) => this.setState({ requests }));

    console.log(this.state.requests);
  }

  //need rto filter by response id of user

  render() {
    console.log(this.state.requests);
    return (
      <div>
        <div>
          {this.state.requests.map((request) => (
            <RequestCard
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
