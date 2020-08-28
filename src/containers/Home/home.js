import React, { Component } from 'react';
import './home.css';
import Funnel from '../../components/Funnel/funnel';
import Restocked from '../../components/Restocked/restocked';
import SuccessStories from '../../components/SuccessStories/successStories';
import NavBar from '../../components/NavBar/navbar';
import twitter from "../../assets/DesignElements/twitter.png";
import instagram from "../../assets/DesignElements/instagram.png";
import youtube from '../../assets/DesignElements/youtube.png';
import patreon from '../../assets/DesignElements/patreon.png';
import discord from '../../assets/DesignElements/Discord.webp';


class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="dash">
                    <NavBar/>
                    <Funnel/>
                </div>
                <div className="restocked">
                    <Restocked/>
                </div>
                <div className="success-stories">
                    <SuccessStories/>
                    <div className="home-footer">
                        <div id="home-cnct">
                            <p>Connect with TBlake</p>
                        </div>
                        <div id="home-icons">
                            <a href="https://twitter.com/therealtblake"><img id="ico" src={twitter} alt="twitter"/></a>
                            <a href="https://www.instagram.com/tylerjblake/"><img id="ico" src={instagram} alt="insta"/></a>
                            <a href="https://discord.com/invite/TEyFeNM"><img id="ico" src={discord} alt="discord"/></a>
                            <a href="https://www.patreon.com/join/TBlakesPatreon?"><img id="ico" src={patreon} alt="patreon"/></a>
                            <a href="https://www.youtube.com/user/TBlakeRaps"><img id="ico" src={youtube} alt="patreon"/></a>
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

export default Home
