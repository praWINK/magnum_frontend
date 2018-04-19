import React, { Component, Fragment } from 'react';
import Logo from '../../assets/images/logo4.png';
import profilePic from '../../assets/images/pro1.jpg';
//import { Grid, Image } from 'semantic-ui-react'


class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Fragment>
                <div className="top-bar">
                
                    <div className="logo">
                        <a href="#"><img src={Logo} alt="Magnum"/></a>
                    </div>
                    <div className="top-menu">
                        <ul>
                            <li className="pro-img"><img src={profilePic} alt=""/></li>
                                <li className="user-logged">HI! Sarvesh Kumar</li>
                                <li><a href="profile.html">PROFILE</a></li>
                                <li><a href="#">LOGOUT</a></li>
                        </ul>
                    </div>
                </div>
               
            </Fragment>
        );
    }
}

export default Header;





