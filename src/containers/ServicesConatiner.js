import React, { Component } from "react";
import services from '../data'


class ServicesConatiner extends Component {

    state = {
        services: []
    }


    componentDidMount = () => {
        this.setState({ services: services })
    }



    render() {

        console.log(this.state.services)
        return (
            <div>
                {this.state.services.map(service => <p>{service.name}</p>)}

            </div>
        );
    }
}

export default ServicesConatiner;
