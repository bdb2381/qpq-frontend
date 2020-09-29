import React, { Component } from "react";
import services from "../data";
import ServiceCard from "../components/ServiceCard";
import ServiceSpecs from "../components/ServiceSpecs";


class ServicesContainer extends Component {
  state = {
    services: [],
    service: {},
    cardClicked: false,
  };

  cardClick = (event, serviceDetails) => {
    console.log(serviceDetails);
    this.setState({
      service: serviceDetails,
      cardClicked: !this.state.cardClicked,
    });
  };

  specClick = () => {
    this.setState({
      service: {},
      cardClicked: !this.state.cardClicked,
    });
  };

  componentDidMount = () => {
    // const token = localStorage.getItem('token');
    // if (token) {

    fetch("http://localhost:3000/api/v1/services")
      .then((res) => res.json())
      .then((services) => this.setState({ services: services }));
    // } else {
    //   this.props.history.push('/login');
    // }
  };

  render() {
    return (
      <div>
        {this.state.cardClicked ? (
          <ServiceSpecs
            specClick={this.specClick}
            service={this.state.service}
          />
        ) : (
            this.state.services.map((service) => (
              <ServiceCard
                service={service}
                key={service.id}
                cardClick={this.cardClick}
              />
            ))
          )}
      </div>
    );
  }
}

export default ServicesContainer;
