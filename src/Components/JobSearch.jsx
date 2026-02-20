import React from 'react'
import { FiUser, FiMessageCircle, FiTarget } from "react-icons/fi";
import '../CSS/Jobsearch.css'
import womanimg from '../assets/womanimg.png'
import {
  UserSearch,
  MessageCircleQuestion,
  Handshake,
  Users,
  Building2,
  UserRoundSearch,
  Crown
} from "lucide-react";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function JobSearch() {
    const [formData, setFormData] = useState({
        title: "",
        location: "",
        industry: "",
    });
    const navigate=useNavigate()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSearch = () => {
        console.log("Search Data:", formData);
    };

    const domains = [
        "Automotive, Engineering and Manufacturing",
        "Banking and Financial Services",
        "Information Technology",
        "Shipping & Logistics",
        "IT Enabled Services",
        "Retail and E-Commerce",
        "Travel and Hospitality",
        "Education",
        "Power & Energy",
    ];

    return (
        <>
            <section className="job-search">
                <div className="job-search-container">
                    <h1 className="search-job-title">
                        Find Your <span>dream job.</span>
                    </h1>

                    <div className="job-form">
                        <div className="form-group">
                            <label>Job Title or Keyword</label>
                            <select
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                            >
                                <option value="">- Select -</option>
                                <option>Software Engineer</option>
                                <option>UI/UX Designer</option>
                                <option>Marketing Manager</option>
                                <option>Data Analyst</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Location</label>
                            <select
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                            >
                                <option value="">- Select -</option>
                                <option>Hyderabad</option>
                                <option>Bangalore</option>
                                <option>Mumbai</option>
                                <option>Delhi</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Industry</label>
                            <select
                                name="industry"
                                value={formData.industry}
                                onChange={handleChange}
                            >
                                <option value="">- Select -</option>
                                <option>IT</option>
                                <option>Healthcare</option>
                                <option>Finance</option>
                                <option>Education</option>
                            </select>
                        </div>

                        <button className="search-btn" onClick={handleSearch}>
                            Search 2679 Jobs
                        </button>
                    </div>
                </div>
            </section>

            <section className="live-celebration">
                <div className="live-celebration-container">

                    {/* LEFT IMAGE */}
                    <div className="live-celebration-image-wrapper">
                        <img
                            src={womanimg}
                            alt="Celebrating 29 Years"
                            className="live-celebration-image"
                        />

                        <div className="live-play-button">
                            <div className="live-play-inner">
                                ▶
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="live-celebration-content">
                        <div className="live-c-content">
                            <h2 className="live-celebration-heading">
                                Celebrating <br />
                                a Glorious
                            </h2>

                            <h3 className="live-celebration-years">
                                29 YEARS
                            </h3>

                            <p className="live-celebration-text">
                                Live Connections Placements Pvt. Ltd. (LiveC, as we are popularly known as)
                                is a 29+ year old Search & Recruitment organisation that specializes in
                                finding and placing professionals across several sectors around the globe.
                            </p>

                            <p className="live-celebration-text">
                                We extend our Services to multiple sectors and functions across various geographies.
                            </p>

                            <button className="live-celebration-btn" onClick={()=>navigate('/company')}>
                                Know More
                            </button>
                        </div>
                    </div>

                </div>
            </section>

            <section className="live-services">
                <div className="live-services-container">

                    {/* HEADING */}
                    <div className="live-services-header">
                        <h2 className="live-services-title">
                            Our Bespoke Services
                        </h2>
                        <div className="live-services-underline"></div>
                    </div>

                    {/* CONTENT ROW */}
                    <div className="live-services-content">

                        {/* LEFT TEXT */}
                        <div className="live-services-text">
                            <p>
                                With competencies, databases, research and credibility that have
                                been built over a quarter century, LiveC has experience in
                                placing CxO's and leaders across India, APAC, USA and the
                                Pacific rim.
                            </p>
                        </div>





                        {/* SERVICE CARDS */}
                        <div className="live-services-cards">

                            {/* CARD 1 */}
                            <div className="live-service-card live-service-card-active">
                                <div className="live-service-icon">
                                    <FiUser />
                                </div>
                                <h3>Search Capabilities</h3>
                                <div className="live-service-line"></div>
                                <span className="live-service-link">Explore Service</span>
                            </div>

                            {/* CARD 2 */}
                            <div className="live-service-card">
                                <div className="live-service-icon">
                                    <FiMessageCircle />
                                </div>
                                <h3>Interview As Service</h3>
                                <div className="live-service-line"></div>
                                <span className="live-service-link">Explore Service</span>
                            </div>

                            {/* CARD 3 */}
                            <div className="live-service-card">
                                <div className="live-service-icon">
                                    <FiTarget />
                                </div>
                                <h3>Contingency Recruitment</h3>
                                <div className="live-service-line"></div>
                                <span className="live-service-link">Explore Service</span>
                            </div>

                        </div>

                    </div>

                    <div className="live-services-cards">

                        <div className="live-service-card live-service-card-active">
                            <div className="live-service-icon">
                                <UserSearch size={48} strokeWidth={1.2} />
                            </div>
                            <h3>Search Capabilities</h3>
                            <div className="live-service-line"></div>
                            <span className="live-service-link">Explore Service</span>
                        </div>


                        <div className="live-service-card">
                            <div className="live-service-icon">
                                <MessageCircleQuestion size={48} strokeWidth={1.2} />
                            </div>
                            <h3>Interview As A Service</h3>
                            <div className="live-service-line"></div>
                            <span className="live-service-link">Explore Service</span>
                        </div>


                        <div className="live-service-card">
                            <div className="live-service-icon">
                                <Handshake size={48} strokeWidth={1.2} />
                            </div>
                            <h3>Contingency Recruitment</h3>
                            <div className="live-service-line"></div>
                            <span className="live-service-link">Explore Service</span>
                        </div>

                        <div className="live-service-card">
                            <div className="live-service-icon">
                                <UserRoundSearch size={48} strokeWidth={1.2} />
                            </div>
                            <h3>Recruitment</h3>
                            <div className="live-service-line"></div>
                            <span className="live-service-link">Explore Service</span>
                        </div>

                    </div>
                </div>
                <div className="live-explore-seervices-btn-div">
                    <Link to="/services" className="live-explore-seervices-btn">
                        Explore Services
                    </Link>
                </div>

            </section>

            <section className="live-focus">
                <div className="live-focus-container">

                    <h2 className="live-focus-title">Our Focus Domains</h2>
                    <div className="live-focus-underline"></div>

                    <div className="live-focus-grid">
                        {domains.map((item, index) => (
                            <div key={index} className="live-focus-item" onClick={()=>navigate('/domains')}>
                                {item}
                            </div>
                        ))}
                    </div>

                </div>
                <div className="live-focus-btn-wrapper">
                    <a href="/services" className="live-focus-btn">
                        Explore More
                    </a>
                </div>


            </section>

        </>
    )
}

export default JobSearch