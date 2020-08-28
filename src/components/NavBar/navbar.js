import React, { Component } from 'react';
import './navbar.css';
import logo from '../../assets/Logos/Logo.png';
import {Link} from 'react-router-dom';


class navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="navBar">
                        <Link onClick={this.refreshPage} id="Home" to="/">Home</Link>
                        <Link onClick={this.refreshPage} id="About" to="/about">About</Link>
                        <Link onClick={this.refreshPage} id="Contact" to="/contact">Contact</Link>
                        <Link onClick={this.refreshPage} id="Logo" to="/"><img src={logo} alt="ITE Logo"/></Link>
                        <Link onClick={this.refreshPage} id="Discord" to="/discord">Discord</Link>
                        <a onClick={this.refreshPage} id="Patreon" href="https://www.patreon.com/join/TBlakesPatreon?">Patreon</a>
                        <a onClick={this.refreshPage} id="Shop" href="https://comeupstore.com/collections/all?sort_by=created-descending">Shop</a>
                    </div>
                </nav>
            </div>
            
        )
    }
}

export default navbar
