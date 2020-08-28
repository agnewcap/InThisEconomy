import React, { Component } from 'react';
import './site.css';
import Home from '../containers/Home/home';
import {Route} from 'react-router-dom';
import About from '../containers/About/about';
import Contact from '../containers/Contact/contact';
import Discord from '../containers/Discord/discord';
import Aux from '../hoc/auxiliary';

export class site extends Component {
    render() {
        return (
            <Aux>
                <Route path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/discord" component={Discord}/>
                <Route path="/patreon" component={() => { 
                        window.open('https://www.patreon.com/join/TBlakesPatreon?', "_blank"); 
                        return window.location.href='/';
                    }}/>
                <Route path="/shop" component={() => { 
                        window.open('https://comeupstore.com/collections/all?sort_by=created-descending', "_blank");
                        return window.location.href ='/';
                    }}/>
            </Aux>
        )
    }
}

export default site
