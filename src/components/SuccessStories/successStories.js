import React, { Component } from 'react';
import "./successStories.css";
import quotes from '../../assets/DesignElements/Quotes.png';
 

export class successStories extends Component {
    render() {
        return (
            <div>
                <div className="succ-title">
                    <h1>Success Stories</h1>
                </div>
                <div className="stories">
                    <div id="succ-1">
                        <img id="quote" src={quotes} alt="quote"/>
                        <p>None of this was even possible until I joined this group. Getting this makes me want to grind even more!</p>
                    </div>
                    <div id="succ-2">
                        <img id="quote" src={quotes} alt="quote"/>
                        <p>None of this was even possible until I joined this group. Getting this makes me want to grind even more!</p>
                    </div>
                    <div id="succ-3">
                        <img id="quote" src={quotes} alt="quote"/>
                        <p>None of this was even possible until I joined this group. Getting this makes me want to grind even more!</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default successStories
