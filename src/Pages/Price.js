import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Price(){
    
    return(
        <div className="pricelist_wrapper">
            <h3>Pricelist</h3>
            <p>
                All prices indicated below are set for the performance of standard services of this category, are minimal and may vary depending on the technical features of the task and the functional specifics of the failed systems.
            </p>
            <p>
                If you did not find the service you need, or if you have any questions, you can contact us. We will gladly answer all your questions.
            </p>

            <div className="prices_container">
                <div className="prices_headings">
                    <ul>
                        <li>
                            <NavLink className="nav-link price" exact activeClassName="active" to="engine-pricelist">Engine</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link price" exact activeClassName="active" to="suspension-pricelist">suspension</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link price" exact activeClassName="active" to="transmission-pricelist">transmission</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link price" exact activeClassName="active" to="brakes-pricelist">brakes</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link price" exact activeClassName="active" to="electronics-pricelist">electronics</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="prices_info">
                    <Outlet />
                </div>
            </div>
        </div> 
    )
}  

export default Price;