import React, { Component } from "react";
import ServiceCard from "../components/ServiceCard";
import ServiceSpecs from "../components/ServiceSpecs";
import SortBar from "../components/SortBar";

class ServicesContainer extends Component {
  state = {
    services: [],
    service: {},
    categories: [],
    cardClicked: false,
    sortByName: true,
    type: "all",
  };

  cardClick = (event, serviceDetails) => {
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
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:3000/api/v1/services")
        .then((res) => res.json())
        .then((services) => this.setState({ services: services }));

      fetch("http://localhost:3000/api/v1/categories")
        .then((res) => res.json())
        .then((categories) => this.setState({ categories: categories }));
    }
  };


  handelSortBy = (e) => {
    this.setState({ sortByName: !this.state.sortByName });
  };
  handleFilterByType = (e) => {
    this.setState({ type: e.target.value });
  };

  filterServicesByType = () => {
    let services = this.state.services;
    switch (this.state.type) {
      case "services":
        return services.filter((service) => service.isService === true);

      case "goods":
        return services.filter((service) => service.isService !== true);

      case "all":
        return services;

      default:
        return services;
    }
  };

  sortServicesBy = () => {
    if (!this.state.sortByName) {
      return this.filterServicesByType().sort(function (a, b) {
        return a.value - b.value;
      });
    } else {
      this.filterServicesByType().sort(function (a, b) {
        return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
      });
    }
    return this.filterServicesByType();
  };

  filterServicesBySearch = () => {
    let search = this.props.search.toLowerCase();
    if (search.length > 0) {
      let filteredServices = this.sortServicesBy().filter(
        (service) =>
          service.name.toLowerCase().includes(search) ||
          service.exchangeDescription.toLowerCase().includes(search) ||
          service.offeringDescription.toLowerCase().includes(search)
      );
      return filteredServices;
    }
    return this.sortServicesBy();
  };

  render() {
    return (
      <div>

        {this.state.cardClicked ? (
          <div className="specs-container">
            <ServiceSpecs
              specClick={this.specClick}
              service={this.state.service}
              currentUser={this.props.currentUser}
            />{" "}
          </div>
        ) : (
            <div>
              <SortBar
                handelSortBy={this.handelSortBy}
                sort={this.state.sortByName}
                handleFilterByType={this.handleFilterByType}
                categories={this.state.categories}
              />
              <div className="service-container">
                {this.filterServicesBySearch().map((service) => (
                  <ServiceCard
                    service={service}
                    key={service.id}
                    cardClick={this.cardClick}
                  />
                ))}
              </div>
            </div>
          )}
      </div>
    );
  }
} // end pf class

export default ServicesContainer;
