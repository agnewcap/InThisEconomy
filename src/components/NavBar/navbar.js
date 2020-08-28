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
                        <a onClick={this.refreshPage} id="Home" href="/">Home</a>
                        <a onClick={this.refreshPage} id="About" href="/about">About</a>
                        <a onClick={this.refreshPage} id="Contact" href="/contact">Contact</a>
                        <a onClick={this.refreshPage} id="Logo" href="/"><img src={logo} alt="ITE Logo"/></a>
                        <a onClick={this.refreshPage} id="Discord" href="/discord">Discord</a>
                        <a onClick={this.refreshPage} id="Patreon" href="https://www.patreon.com/join/TBlakesPatreon?">Patreon</a>
                        <a onClick={this.refreshPage} id="Shop" href="https://comeupstore.com/collections/all?sort_by=created-descending">Shop</a>
                    </div>
                </nav>
            </div>
            
        )
    }
}

export default navbar
