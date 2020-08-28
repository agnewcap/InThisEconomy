import React, { Component } from 'react';
import './contact.css';
import NavBar from '../../components/NavBar/navbar';
import Footer from '../../components/Footer/footer';
import Aux from '../../hoc/auxiliary';

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
                    </div>
                </div>
                <Footer/>
            </Aux>
            
        )
    }
}

export default contact
