import React, { Component } from "react";
import "./GoHome.css";
import { Link, withRouter } from "react-router-dom";

import homeIconWhite from './../../assets/home_white.png';
import homeIconBlack from './../../assets/home_black.png';

//This component is used for programmatic navigation
//class based component is used here
class GoHome extends React.Component {

    navigateToHome = () => {

        //redirect to home route
        const { history } = this.props;
        history.push('/');
    }

    render() {

        //isHome is true, if we are at home route
        const { location } = this.props;
        const isHome = location.pathname === '/';
        return (
            <button className={`go-home-btn ${isHome ?
                `white-bkg` : 'gradient-bkg'}`
            } onClick={this.navigateToHome}>

                <img className="home-icon"
                    src={isHome ? homeIconBlack : homeIconWhite}
                    alt='home-icon'
                />
            </button>
        );
    }
}

export default withRouter(GoHome);