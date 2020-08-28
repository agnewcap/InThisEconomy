import React, { Component } from 'react';
import './contact.css';
import NavBar from '../../components/NavBar/navbar';
import Footer from '../../components/Footer/footer';
import Aux from '../../hoc/auxiliary';
import twitter from "../../assets/DesignElements/twitter.png";
import instagram from "../../assets/DesignElements/instagram.png";
import youtube from '../../assets/DesignElements/youtube.png';
import patreon from '../../assets/DesignElements/patreon.png';
import discord from '../../assets/DesignElements/Discord.webp';

export class contact extends Component {
    render() {
        return (
            <Aux>
                <div className="Contact">
                    <NavBar/>
                    <div className="contact-container">
                        <div className="contact-text">
                            <p>For all inquiries, or for more information on demographics, sales figures, etc., please email:</p>
                            <a href="mailto: tblake@inthiseconomy.com">tblake@inthiseconomy.com</a>
                        </div>
                        <div className="discord-icons">
                            <a onClick={this.refreshPage} href="https://twitter.com/therealtblake"><img id="ico" src={twitter} alt="twitter"/></a>
                            <a onClick={this.refreshPage} href="https://www.instagram.com/tylerjblake/"><img id="ico" src={instagram} alt="insta"/></a>
                            <a onClick={this.refreshPage} href="https://discord.com/invite/TEyFeNM"><img id="ico" src={discord} alt="discord"/></a>
                            <a onClick={this.refreshPage} href="https://www.patreon.com/join/TBlakesPatreon?"><img id="ico" src={patreon} alt="patreon"/></a>
                            <a onClick={this.refreshPage} href="https://www.youtube.com/user/TBlakeRaps"><img id="ico" src={youtube} alt="patreon"/></a>
                        </div>
                    </div>
                </div>
                <Footer/>
            </Aux>
            
        )
    }
}

export default contact
