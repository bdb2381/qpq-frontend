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

  filterServicesBySearch = () => {
    let search = this.props.search.toLowerCase()
    if (search.length > 0) {
      let filteredServices = this.state.services.filter((service) =>
        service.name.toLowerCase().includes(search) ||
        service.exchangeDescription.toLowerCase().includes(search) ||
        service.offeringDescription.toLowerCase().includes(search))

      return filteredServices
    }

    return this.state.services
  }

  render() {
    return (
      <div>
        {this.state.cardClicked ? (
          <div className="specs-container">
            <ServiceSpecs
              specClick={this.specClick}
              service={this.state.service}
            /> </div>
        ) : (
            <div className="service-container">
              {this.filterServicesBySearch().map((service) => (
                <ServiceCard
                  service={service}
                  key={service.id}
                  cardClick={this.cardClick}
                />
              ))}
            </div>
          )}
      </div>
    );
  }
}

export default ServicesContainer;
