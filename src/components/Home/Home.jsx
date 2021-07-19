import React, {useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./Home.css";
import Modal from './../Modal/Modal';

import homeAnime from "./../../assets/home_anime.gif";

function Home() {

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowModal(true);

        }, 2400);
    },[]);

    function closeModal(){
        setShowModal(false);
    }
    
    return (
        <div className="home-container">
            {showModal && <Modal closeModal={closeModal} />}
            <div className="header-text">
                <h1>Welcome to my Portfolio!</h1>
                <p>This is Ribhu Mukherjee, a full Stack developer, a teacher and a public Speaker</p>
            </div>
            <div className="head-btns">
                <Link to="/about" className="btn btn-white">
                    <p className="btn-text">Know more about me</p>
                </Link>
                <Link to="/contact" className="btn btn-transparent">
                    <p className="btn-text">Connect with me</p>
                </Link>
                <div>
                    <div className="splash-image">
                        <img src={homeAnime} alt="animation" className="home-anime" />
                    </div>
                </div>

            </div>
        </div>
    );
}


export default Home;