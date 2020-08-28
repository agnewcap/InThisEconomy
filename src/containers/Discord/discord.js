import React, { Component } from 'react';
import './discord.css';
import {Route, Link} from 'react-router-dom';

import NavBar from '../../components/NavBar/navbar';
import Footer from '../../components/Footer/footer';
import Aux from '../../hoc/auxiliary';
import equityPartners from '../../assets/DesignElements/EquityPartner.png';
import freeChannels from '../../assets/DesignElements/freeDiscord.png';

export class discord extends Component {
    render() {
        return (
            <div className="Discord">
                <NavBar/>
                <div className="discord-content">
                    <p id="paid">Exclusive Discord Channels for Equity Partners:</p>
                    <img id="paid-channels" src={equityPartners} alt="equity Partners"/>
                    <Link id="paid-btn" to="/patreon">Become an Equity Partner</Link>

                    <p id="free">Free Public Discord Channels:</p>
                    <img id="free-channels" src={freeChannels} alt="free channels"/>
                    <a id="free-btn" href="https://discord.com/invite/TEyFeNM">Join the Discord</a>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default discord
