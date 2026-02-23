import React, { useEffect, useRef } from "react";
import HrResource from '../Components/HrResource'
import CompanyCulture from '../Components/CompanyCulture'
import '../CSS/Company.css'
import CompanyTimeline from "../Components/CompanyTimeline";
import CoreTeam from "../Components/CoreTeam";
import heroBanner from '../assets/herobanner.png'
import { useNavigate } from "react-router-dom";
function Company() {
    const navigate = useNavigate()

    const label1 = useRef(null);
    const label2 = useRef(null);
    const label3 = useRef(null);
    const coreTeamRef = useRef(null);

    useEffect(() => {

        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (label1.current) {
                label1.current.style.transform = `translateY(${scrollY * 0.1}px)`;
            }

            if (label2.current) {
                label2.current.style.transform = `translateX(${scrollY * 0.1}px)`;
            }

            if (label3.current) {
                label3.current.style.transform = `translateX(${scrollY * 0.1}px)`;
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);
    return (
        <>

            <section
                className="live-company-hero"
                style={{ backgroundImage: `url(${heroBanner})` }}
            >
                <div className="live-company-overlay">

                    <div className="live-company-content">
                        <h1 className="live-company-title">
                            Leveraging the Power of <br />
                            People-Centricity
                        </h1>

                        <p className="live-company-description">
                            Our premise that business outcomes tangibly improve
                            with a people-centric HR approach has stood the test of
                            more than a quarter century.
                        </p>
                    </div>

                    <div
                        ref={label1}
                        className="live-company-label live-label-1"
                    >
                        Innovation at heart
                    </div>

                    <div
                        ref={label2}
                        className="live-company-label live-label-2"
                    >
                        D&I Recruiting
                    </div>

                    <div
                        ref={label3}
                        className="live-company-label live-label-3"
                    >
                        People-first Approach
                    </div>

                </div>
            </section>

            <section className="live-company-value">
                <div className="live-company-value-container">

                    {/* LEFT SIDE */}
                    <div className="live-company-value-left">
                        <h2 className="live-company-value-title">
                            Value begins <br /> With People
                        </h2>
                        <div className="live-company-value-underline"></div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="live-company-value-right">

                        <p className="live-company-value-highlight">
                            Live Connections Placements Pvt. Ltd., or LiveC as we are popularly
                            known as, is a 29+ year old search and recruitment organisation that
                            specializes in finding and placing professionals across several sectors
                            around the globe.
                        </p>

                        <p>
                            We began in contingency recruitment. Today our service offerings have grown
                            and include, RPO, Search, Incubating Captives, Contract Staffing,
                            Interview-as-a-Service and Talent Exit Management.
                        </p>

                        <p>
                            We bring to the table a cumulative recruitment experience built over two
                            decades. We have placed over 96,000+ people for 350+ clients in multiple
                            domains. We began with recruiting for a few domains in 1996.
                        </p>

                        <p>
                            We operate from 7 locations in 4 countries (India, UAE, Singapore and
                            Qatar). Interns we placed in 1996 are today Senior Executives and CXO's
                            in Corporate India.
                        </p>

                        <button className="live-company-value-btn" onClick={() => navigate('/contact')}>
                            Talk to Us
                        </button>

                    </div>

                </div>
            </section>

            <CompanyTimeline nextRef={coreTeamRef} />
            <div ref={coreTeamRef}>
                <CoreTeam />
            </div>
            <CompanyCulture />
            <HrResource />


        </>
    )
}

export default Company