import React, { Component } from 'react';
import './funnel.css';
import discord from '../../assets/DesignElements/Discord.webp';
import rules from '../../assets/DesignElements/rules.png';
import bell from '../../assets/DesignElements/bell.png';
import refresh from '../../assets/DesignElements/refresh.png';
import patreon from '../../assets/DesignElements/patreon.png';

export class funnel extends Component {
    refreshPage() {
        window.location.reload(true);
    }
    render() {
        return (
            <div className="container">
                <div className="container-text">
                    <h1 id="title">Become an Equity Partner:</h1>
                    <p id="Discord-p"><img className="icons"src={discord} alt="discord"/>  Access to Private Discord</p>
                    <p id="Guide-p"><img className="icons" src={rules} alt="rules"/>  Detailed Guides on Best Practices</p>
                    <p id="Notif-p"><img className="icons" src={bell} alt="bell"/>  Release Notifications</p>
                    <p id="Update-p"><img className="icons" src={refresh} alt="refresh"/>  Daily Content Updates and Discussion</p>
                    <p id="Patreon-p"><img className="icons" src={patreon} alt="patreon"/>  Monthly Themed Patreon Guides</p>
                </div>
                <a onClick={this.refreshPage} id="jtt-btn" href="https://www.patreon.com/join/TBlakesPatreon?">JOIN THE TEAM!</a>
            </div>
        )
    }
}

export default funnel
