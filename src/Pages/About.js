import React, { Component } from "react";


export class About extends Component{  

    state = {
        info: []
    }

    async componentDidMount(){
        const url = "http://localhost:3000/data/about-db.json";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({info: data.about});
    }
    render(){

        return(
            <div className="about_wrapper">
                <div className="about_container">
                    {this.state.info.map(itemInfo =>
                        <div className="about_item" style={{backgroundImage: 'url('+itemInfo.image+')'}}>
                            <div class="content">
                                <h2>{itemInfo.title}</h2>
                                <p>
                                    {itemInfo.desc}
                                </p> 
                            </div>    
                        </div>
                    )}
                   
                </div>
            </div>
        )
    }
}

export default About;