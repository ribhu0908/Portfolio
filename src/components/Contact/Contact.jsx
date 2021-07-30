import React from "react";
import "./Contact.css";
import Header from "../Header/Header";
import FooterLink from "../FooterLink/FooterLink";
import contactVector from '../../assets/contact_anime.png';

import github from '../../assets/gh.png';
import linkedin from '../../assets/li.png';
import instagram from '../../assets/in.png';
import web from '../../assets/web.png';

function Contact() {

    return (
        <div className="section-container">
            <Header
                heading="Get in touch."
                details="Interested to collaborate? Feel free to drop me an email."
            />

            {/* Form section */}
            <div className="contact-form-container">

                <form
                    action="https://formspree.io/f/xzbyajdb"
                    method="POST"
                    className="contact-form">
                    <input
                        type="email"
                        placeholder="Your email ID"
                        name="_replyto"
                        className="input-box email-input" />

                    <textarea
                        type="text"
                        placeholder="Your messgage"
                        name="message"
                        className="input-box body-input" />

                    {/*submit button*/}
                    <button type="submit" className="contact-btn">Send email</button>

                </form>


            </div>


            {/*Social icons*/}
            <div className="social-icons-container">
                <a href="https://github.com/ribhu0908" target="_blank" className="social-icon">
                    <img src={github} alt="github-link"></img>
                </a>

                <a href="https://www.linkedin.com/in/ribhu-mukherjee/" target="_blank" className="social-icon">
                    <img src={linkedin} alt="linkedin-link"></img>
                </a>

                <a href="https://instagram.com/ribhumukherjee" target="_blank" className="social-icon">
                    <img src={instagram} alt="instagram-link"></img>
                </a>

                <a href="https://ribhu0908.github.io/Portfolio/#/" target="_blank" className="social-icon">
                    <img src={web} alt="website-link"></img>
                </a>
            </div>

            <FooterLink
                phrase="Read more "
                link="about me"
                toAddress="/about" />

            <div className='vector-frame'>
                <img className="about-vector" src={contactVector} alt="vector"></img>
            </div>



        </div>
    )

}

export default Contact;