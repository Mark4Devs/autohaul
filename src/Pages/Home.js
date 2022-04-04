import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home(){
    const [stick, setStick] = useState(false);

    const handleChange = () => {
        setStick(!stick);
    }

    return(
        <div className="wrapper_home">
            <div className={stick ? 'home__info translated': 'home__info'}>
                <h1>
                    Autoservice
                </h1>
                <div className="stick" onClick={handleChange}></div>
                <p>
                    Diagnostics and car repair. Scheduled maintenance, 
                    current and overhaul. We provide services for the installation 
                    of additional equipment.
                </p>

                <Link to="/about"><button className="btn">Get more!</button></Link>
            </div>
        </div>
    ) 
}

export default Home;