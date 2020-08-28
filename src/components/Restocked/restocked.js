import React, { Component } from 'react';
import './restocked.css';
import restockedLogo from '../../assets/Logos/Restocked.png';
import platform from "../../assets/DesignElements/pc.jpg";
import brands from "../../assets/DesignElements/brands.png";
import shoebox from "../../assets/DesignElements/shoebox.jpg";

export class restocked extends Component {
    render() {
        return (
            <div className="re-container">
                <div>
                    <p><img id="restocked-logo" src={restockedLogo} alt="restocked logo"/></p>
                    <p id="notif">Get Notified, Get the Goods</p>
                </div>
                <div className="cards">
                    <div id="platform">
                        <img id="pc-img" src={platform} alt="pc"/>
                        <div id="card-1">
                            <p>Available on desktop, tablet, and mobile, configure notifications to whatever you use most.</p>
                        </div>
                    </div>
                    <div id="brands">
                        <img id="pc-img" src={brands} alt="brands"/>
                        <div id="card-1">
                            <p>Monitor over 200 popular websites, with updates pushed out weekly for the latest and hottest products.</p>
                        </div>
                    </div>
                    <div id="profit">
                        <img id="pc-img" src={shoebox} alt="pc"/>
                        <div id="card-1">
                            <p>Whether you’re looking to buy for yourself, or turn a profit on hard to find items, Restocked keeps you in the know.</p>
                        </div>
                    </div>
                </div>
                <button id="rest-btn">TAKE ME THERE!</button>
            </div>
        )
    }
}

export default restocked
