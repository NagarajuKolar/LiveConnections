import React from 'react'
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaYoutube,
} from "react-icons/fa";
import '../CSS/Footer.css'
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <>
            <footer className="live-footer">
                <div className="live-footer-wrapper">
                    <h2 className="live-footer-title">
                        We're Here for You. Lets Talk.
                    </h2>
                    <div className="live-footer-divider-small"></div>

                    <div className="live-footer-top">
                        <div className="live-footer-left">
                            <p className="live-footer-description">
                                We're always happy to talk with anyone interested in availing our
                                services and leveraging our depth of experience in creating value.
                            </p>
                        </div>

                        {/* RIGHT */}
                        <div className="live-footer-right">

                            <div className="live-footer-column">
                                <h4 className="live-footer-heading">Corporate Office</h4>
                                <p className="live-footer-company">
                                    Live Connections <br /> Placements Pvt.Ltd.
                                </p>
                                <p className="live-footer-address">
                                    34/D, Nu-Tech Arcade <br />
                                    1st Avenue Ashok Nagar <br />
                                    Chennai 600083
                                </p>
                            </div>

                            <div className="live-footer-column">
                                <h4 className="live-footer-heading">Telephone</h4>
                                <p className="live-footer-contact">
                                    +91-44-24896910
                                </p>

                                <h4 className="live-footer-heading live-footer-email-space">
                                    Email
                                </h4>
                                <p className="live-footer-contact">
                                    info@livecjobs.com
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* LARGE DIVIDER */}
                    <div className="live-footer-divider-large"></div>

                    {/* BOTTOM SECTION */}
                    <div className="live-footer-bottom">

                        {/* LEFT LINKS */}
                        <div className="live-footer-links">
                            <Link to="/company">Company</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/diversity-inclusion">Diversity & Inclusion</Link>
                            <Link to="/domains">Domain Specialities</Link>
                            <Link to="/contact">Contact</Link>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="live-footer-right-area">
                            <div className="live-footer-social">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                            </div>

                            <p className="live-footer-copy">
                                ©2007-2023 Live Connections Placements Pvt Ltd, All rights reserved Privacy Policy
                            </p>

                        </div>

                    </div>


                </div>
            </footer>

        </>
    )
}

export default Footer