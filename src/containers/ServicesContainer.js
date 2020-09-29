import React, { Component } from "react";
import services from "../data";
import ServiceCard from "../components/ServiceCard";

class ServicesContainer extends Component {
  state = {
    services: [],
  };

  componentDidMount = () => {
    fetch("http://localhost:3000/api/v1/services")
      .then(res => res.json())
      .then(services => this.setState({ services: services }))
  };

  render() {
    console.log(this.state.services);
    return (
      <div>
        {this.state.services.map((service) => (
          <ServiceCard service={service} key={service.id} />
        ))}
      </div>
    );
  }
}

export default ServicesContainer;
