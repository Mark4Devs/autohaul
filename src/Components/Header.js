import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";


function Header(){
    const logoSrc = "/images/logo.png";
    const [burger, setBurger] = useState(false);

    const burgerChange = () => {
        setBurger(!burger);
    } 


    return(
    <nav class="navbar navbar-expand sm">
        <a class="navbar-brand" href="#"><img src={logoSrc} /></a>
        <div className={burger ? 'header_burger active' : 'header_burger'} onClick={burgerChange}>
            <span className={burger ? 'span active' : null}></span>
        </div>

        <div className={burger ? 'navigation active' : 'navigation'}>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <NavLink className="nav-link" exact activeClassName="active" to="/" onClick={burgerChange}>home</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/services" onClick={burgerChange}>services</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/prices" onClick={burgerChange}>pricelist</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/contacts" onClick={burgerChange}>contacts</NavLink>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default Header;