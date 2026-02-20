import React, { useState } from "react";
import { useEffect } from "react";

import "../CSS/CoreTeam.css";

import hema from "../assets/hema.jpg";
import raghav from "../assets/Raghav.png";
import isaac from "../assets/profile.jpg";
import uma from "../assets/Uma.png";
import anjali from "../assets/profile-anjali.png";
// import kiran from "../assets/balivada.jpg";
// import varun from "../assets/profile-Varun.jpg";

import { FiMail } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";


const teamData = [
    {
        name: "Hema Subramaniam",
        role: "Founder & CEO",
        image: hema,
        email: "hema@email.com",
        linkedin: "https://linkedin.com/in/hema",
        description: `Hema founded Live Connections in Jan 1996.

A Literature graduate, an MBA from Department of Management Studies, University of Madras and a Masters in Psychotherapy and Counselling, she has 27 years’ experience out of which 23+ have been entrepreneurial.

She enjoys challenging and complex search mandates as well as working on any interesting and unique opportunity regardless of the level. She is a firm believer in work-life balance and an ardent champion of causes that help educate poor children.

She is based at Chennai but has an itinerant lifestyle that helps devote time and attention to all branches.`
    },
    {
        name: "Raghav Krishnan",
        role: "Director, Chennai",
        image: raghav,
        email: "Raghav@email.com",
        linkedin: "https://linkedin.com/in/hema",

        description: `Raghav is a passionate recruiter with over 14 years of hands-on experience.

He heads the Chennai and Singapore branches and oversees corporate administration functions with rich experience in Executive Search, BFSI, Manufacturing, Engineering, Oil & Gas, Shipping & Logistics domains.`
    },
    {
        name: "Isaac C Peterson",
        role: "Branch Head, Bangalore",
        image: isaac,
        email: "Isacc@email.com",
        linkedin: "https://linkedin.com/in/hema",

        description: `Isaac heads the Bangalore Branch driving recruitment consulting services for IT and Non-IT segments.

He has over 13 years of rich experience providing recruitment services across levels with exposure to multiple industries.`
    },
    {
        name: "Uma Subramaniam",
        role: "Director, GCC & APAC",
        image: uma,
        email: "uma@email.com",
        linkedin: "https://linkedin.com/in/hema",

        description: `Uma is the Director, GCC & APAC based in UAE with over 20 years of recruitment experience.

She played a critical role in LiveC’s growth and success across GCC regions including Qatar, Kuwait, Oman and Bahrain.`
    },
    {
        name: "Anjali",
        role: "Branch Head, Pune",
        image: anjali,
        email: "anjali@email.com",
        linkedin: "https://linkedin.com/in/hema",

        description: `Anjali comes with 12+ years of experience in marketing research, HR Ops and Talent Acquisition.

Currently focuses on liaising with businesses in GCC and India to support expansion plans.`
    },
    {
        name: "Balivada Kiran Kumar",
        role: "Branch Head, Hyderabad",
        image: uma,
        email: "hema@email.com",
        linkedin: "https://linkedin.com/in/hema",

        description: `Balivada is a seasoned Recruitment Operations Professional with 9+ years of experience in Volume Hiring, Staffing and Leadership assignments.`
    },
    {
        name: "Varun Chandrasekar",
        role: "Branch Head – GCC",
        image: anjali,
        email: "hema@email.com",
        linkedin: "https://linkedin.com/in/hema",

        description: `Varun leads the LC Gulf Branch covering UAE, KSA, Qatar, Kuwait, Oman and Bahrain with strong executive search experience.`
    }
];


const CoreTeam = () => {
    const [selectedMember, setSelectedMember] = useState(null);
    useEffect(() => {
        if (selectedMember) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedMember]);

    return (
        <section className="live-core-team">
            <div className="live-core-container">
                <h2 className="live-core-title">Our Core Team</h2>
                <div className="live-core-underline"></div>

                <p className="live-core-description">
                    To innovate, you need innovators – in our case, people-focussed innovators –
                    to lead the process. At LiveC, it's this along with our team spirit,
                    expertise and perspective that help us deliver value solutions.
                </p>

                <div className="live-core-grid">
                    {teamData.map((member, index) => (
                        <div
                            className="live-core-card"
                            key={index}
                            onClick={() => setSelectedMember(member)}
                        >
                            <div className="live-core-image-wrapper">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="live-core-image"
                                />
                            </div>

                            <p className="live-core-role">{member.role}</p>
                            <h3 className="live-core-name">{member.name}</h3>
                        </div>
                    ))}
                </div>
            </div>

            
            {selectedMember && (
                <div
                    className="live-core-modal-overlay"
                    onClick={() => setSelectedMember(null)}
                >
                    <div
                        className="live-core-modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="live-core-close"
                            onClick={() => setSelectedMember(null)}
                        >
                            ×
                        </button>

                        <h2 className="live-core-modal-name">
                            {selectedMember.name}
                        </h2>

                        <p className="live-core-modal-role">
                            {selectedMember.role}
                        </p>

                        <div className="live-core-modal-icons">
                            <a
                                href={`mailto:${selectedMember.email}`}
                                className="live-core-icon"
                            >
                                <FiMail />
                            </a>
                            <a
                                href={selectedMember.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="live-core-icon"
                            >
                                <FaLinkedinIn />
                            </a>
                        </div>
                        <div className="live-core-modal-description">
                            {selectedMember.description}
                        </div>
                    </div>
                </div>
            )}

        </section>
    );
};

export default CoreTeam;
