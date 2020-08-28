import React, { Component } from 'react';
import './discord.css';
import NavBar from '../../components/NavBar/navbar';
import Footer from '../../components/Footer/footer';
import equityPartners from '../../assets/DesignElements/EquityPartner.png';
import freeChannels from '../../assets/DesignElements/freeDiscord.png';

export class discord extends Component {

    refreshPage() {
        window.location.reload(true);
    }

    render() {
        return (
            <div className="Discord">
                <NavBar/>
                <div className="discord-content">
                    <p id="paid">Exclusive Discord Channels for Equity Partners:</p>
                    <img id="paid-channels" src={equityPartners} alt="equity Partners"/>
                    <a onClick={this.refreshPage} id="paid-btn" href="https://www.patreon.com/join/TBlakesPatreon?">Become an Equity Partner</a>

                    <p id="free">Free Public Discord Channels:</p>
                    <img id="free-channels" src={freeChannels} alt="free channels"/>
                    <a onClick={this.refreshPage} id="free-btn" href="https://discord.com/invite/TEyFeNM">Join the Discord</a>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default discord
