import React, { Component } from "react";

export class Services extends Component{
    state = {
        services: [{}]
    }

    async componentDidMount(){
        const url = "http://localhost:3000/data/about-db.json";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({services: data.services});
    }


    render(){
        return <div className="services_wrapper">
            <div className="services_info">
                <h2>{this.state.services[0].title}</h2>
                <p>
                    {this.state.services[0].desc}
                </p>
                <ul>
                    {this.state.services.map((item, id) =>
                        <li key={id}>
                            <a href={item.path}>{item.serviceItem}</a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    }
}



export default Services;