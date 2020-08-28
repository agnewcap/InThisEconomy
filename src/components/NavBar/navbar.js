import React, { Component } from 'react';
import './navbar.css';
import logo from '../../assets/Logos/Logo.png';
import {Route, Link} from 'react-router-dom';
import About from '../../containers/About/about';
import Contact from '../../containers/Contact/contact';
import Discord from '../../containers/Discord/discord';


class navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="navBar">
                        <Link id="Home" to="/">Home</Link>
                        <Link id="About" to="/about">About</Link>
                        <Link id="Contact" to="/contact">Contact</Link>
                        <Link id="Logo" to="/"><img src={logo} alt="ITE Logo"/></Link>
                        <Link id="Discord" to="/discord">Discord</Link>
                        <Link id="Patreon" to="/patreon">Patreon</Link>
                        <Link id="Shop" to="/shop">Shop</Link>
                    </div>
                </nav>
            </div>
            
        )
    }
}

export default navbar
