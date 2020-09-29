import React, { Component } from "react";
import services from "../data";
import ServiceCard from "../components/ServiceCard";
import api from "../services/api";

class ServicesContainer extends Component {
  state = {
    services: [],
  };

  componentDidMount = () => {
    const token = localStorage.getItem('token');
    // debugger
    if (token) {
      api.services.getServices().then((services) => {
        this.setState({ services: services });
      });
    } else {
      this.props.history.push('/login');
    }
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
