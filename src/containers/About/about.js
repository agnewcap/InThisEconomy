import React, { Component } from 'react';
import './about.css';
import NavBar from '../../components/NavBar/navbar';
import Tblake from '../../assets/DesignElements/tblake.jpeg';
import twitter from "../../assets/DesignElements/twitter.png";
import instagram from "../../assets/DesignElements/instagram.png";
import youtube from '../../assets/DesignElements/youtube.png';
import patreon from '../../assets/DesignElements/patreon.png';
import discord from '../../assets/DesignElements/Discord.webp';

export class about extends Component {
    render() {
        return (
            <div className="About">
                <div className="pageone">
                    <NavBar/>
                    <div className="abt-container">
                        <div className="abt-container-text">
                            <h1 id="abt-title">What We're About:</h1>
                            <p id="abt-p">We work as a team to find new and exciting entrepreneurial opportunities to make sure that each of our members thrive In This Economy.</p>
                        </div>
                    </div>
                </div>
                <div className="pagetwo">
                    <img id="tblake" src={Tblake} alt="tblake"/>
                    <div className="tblake-abt">
                        <p id="tblake-text">I want to share what I've learned, what I've failed at, and what I'm still learning with you. One of my largest frustrations with college was feeling like a $40k tuition was gatekeeping information that every person should have access to. Things like running a business, building an entrepreneurial mindset, networking, credit... all were things I was never exposed to. There should not be an age or degree requirement for being your most successful self, and I hope to create content on this platform to help you reach that potential.</p>
                    </div>
                    <div className="home-footer">
                        <div id="home-cnct">
                            <p>Connect with TBlake</p>
                        </div>
                        <div id="home-icons">
                            <a onClick={this.refreshPage} href="https://twitter.com/therealtblake"><img id="ico" src={twitter} alt="twitter"/></a>
                            <a onClick={this.refreshPage} href="https://www.instagram.com/tylerjblake/"><img id="ico" src={instagram} alt="insta"/></a>
                            <a onClick={this.refreshPage} href="https://discord.com/invite/TEyFeNM"><img id="ico" src={discord} alt="discord"/></a>
                            <a onClick={this.refreshPage} href="https://www.patreon.com/join/TBlakesPatreon?"><img id="ico" src={patreon} alt="patreon"/></a>
                            <a onClick={this.refreshPage} href="https://www.youtube.com/user/TBlakeRaps"><img id="ico" src={youtube} alt="patreon"/></a>
                        </div>
                        <div id="home-tag">
                            <p>Designed by Bailey Agnew</p>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default about
