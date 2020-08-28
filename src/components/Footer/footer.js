import React, { Component } from 'react';
import './footer.css';
import twitter from "../../assets/DesignElements/twitter.png";
import instagram from "../../assets/DesignElements/instagram.png";
import youtube from '../../assets/DesignElements/youtube.png';
import patreon from '../../assets/DesignElements/patreon.png';
import discord from '../../assets/DesignElements/Discord.webp';

export class footer extends Component {
    refreshPage() {
        window.location.reload(true);
    }
    render() {
        return (
            <div className="footer">
                <div id="cnct">
                    <p>Connect with TBlake</p>
                </div>
                <div id="icons">
                    <a onClick={this.refreshPage} href="https://twitter.com/therealtblake"><img id="ico" src={twitter} alt="twitter"/></a>
                    <a onClick={this.refreshPage} href="https://www.instagram.com/tylerjblake/"><img id="ico" src={instagram} alt="insta"/></a>
                    <a onClick={this.refreshPage} href="https://discord.com/invite/TEyFeNM"><img id="ico" src={discord} alt="discord"/></a>
                    <a onClick={this.refreshPage} href="https://www.patreon.com/join/TBlakesPatreon?"><img id="ico" src={patreon} alt="patreon"/></a>
                    <a onClick={this.refreshPage} href="https://www.youtube.com/user/TBlakeRaps"><img id="ico" src={youtube} alt="patreon"/></a>
                </div>
                <div id="tag">
                    <p>Designed by Bailey Agnew</p>
                </div>
            </div>
        )
    }
}

export default footer
