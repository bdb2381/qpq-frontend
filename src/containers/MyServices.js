import React, { Component } from "react";
import ServiceCard from '../components/ServiceCard'


class MyServices extends Component {

    state = {
        myServices: [
            {
                id: 1,
                name: "Service Name",
                isService: true,
                offeringDescription: " offeringDescription * offeringDescription * offeringDescription",
                exchangeDescription: " exchangeDescription * exchangeDescription * exchangeDescription",
                img_url: "https://upload.wikimedia.org/wikipedia/en/4/46/LegoMinifigureHiker.png",
                value: 200,
            },
            {
                id: 2,
                name: "Service Name2",
                isService: false,
                offeringDescription: " offeringDescription2 * offeringDescription2 * offeringDescription2",
                exchangeDescription: " exchangeDescription2 * exchangeDescription2 * exchangeDescription2",
                img_url: "https://images.brickset.com/sets/images/71025-1.jpg?201908010210",
                value: 150,
            }

        ]

    }


    render() {

        return (
            <div id="service-collection">
                {this.state.myServices.map(service =>
                    <ServiceCard key={service.id} service={service} />
                )}
            </div>
        );
    }
}

export default MyServices;
