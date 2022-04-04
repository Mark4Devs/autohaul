import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Cats(){
    return (
        <div className="cats_wrapper">
            <div className="cats_container">
                <div className="cats_heads">
                    <ul>  
                        <li>
                            <NavLink className="nav-link cat" exact activeClassName="active" to="engine">Engine</NavLink>
                        </li>
                        <li>   
                            <NavLink className="nav-link cat" exact activeClassName="active" to="transmission">Transmission</NavLink>
                        </li>
                        <li>    
                            <NavLink className="nav-link cat" exact activeClassName="active" to="suspension">Suspension</NavLink>
                        </li>
                        <li>   
                            <NavLink className="nav-link cat" exact activeClassName="active" to="electronics">Electronics</NavLink>
                        </li>
                        <li>   
                            <NavLink className="nav-link cat" exact activeClassName="active" to="steering">Steering</NavLink>
                        </li>
                        <li>   
                            <NavLink className="nav-link cat" exact activeClassName="active" to="fuel-system">Fuel system</NavLink>
                        </li>
                        <li>   
                            <NavLink className="nav-link cat" exact activeClassName="active" to="brakes">Brake system</NavLink>
                        </li>
                        <li>   
                            <NavLink className="nav-link cat" exact activeClassName="active" to="ignition-system">Ignition system</NavLink>
                        </li>
                        <li>   
                            <NavLink className="nav-link cat" exact activeClassName="active" to="cooling-system">Cooling system</NavLink>
                        </li>  
                        

                    </ul>
                </div>   
                <div className="cats_desc">
                    <Outlet />
                </div>
            </div>
        </div>
    )
    
}






export default Cats;