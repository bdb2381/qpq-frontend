import React, { Component } from "react";
import services from '../data'
import ServiceCard from '../components/ServiceCard'


class ServicesContainer extends Component {

    state = {
        services: []
    }


    componentDidMount = () => {
        this.setState({ services: services })
    }



    render() {

        return (
            <div id="service-collection">
                {this.state.services.map(service =>
                    <ServiceCard key={service.id} service={service} />
                )}
            </ div>
        );
    }
}

export default ServicesContainer;
