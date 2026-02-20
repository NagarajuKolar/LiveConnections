import React from 'react'
import domain1 from '../assets/domain1.png'
import domain2 from '../assets/domain2.png'
import domain3 from '../assets/domain3.png'
import domain4 from '../assets/domain4.png'
import domain5 from '../assets/domain5.png'
import domain22 from '../assets/domain22.png'
import Domain1 from '../Components/Domain1'
import domain21 from '../assets/domain21.png'
import useLiveFadeUp from '../Data/Fadeup';
import { useState } from 'react'
import '../CSS/DomainSpecialist.css'
function DomainSpecialist() {
    useLiveFadeUp();
    const [expanded, setExpanded] = useState(false);
    return (
        <>
            <div className="live-domain-page">

                {/* HERO */}
                <section
                    className="live-domain-hero"
                    style={{ backgroundImage: `url(${domain1})` }}
                >
                    <div className="live-domain-hero-container">
                        <div className="live-domain-hero-content">

                            <h1 className="live-domain-hero-title live-fade-up live-delay-1">
                                Domain Specialities That Drive
                                Business Excellence.
                            </h1>

                            <p className="live-domain-hero-desc live-fade-up live-delay-2">
                                Industry-focused recruitment solutions powered by deep
                                market knowledge and functional expertise.
                            </p>

                            <button className="live-domain-hero-btn live-fade-up live-delay-3">
                                Talk to our Experts
                            </button>

                        </div>
                    </div>
                </section>

                {/* INFO SECTION */}
                <section className="live-domain-info">
                    <div className="live-domain-info-container">

                        <p className="live-domain-info-text live-fade-up live-delay-1">
                            At <strong>LiveC</strong> we have partnered with multiple sector for over 26 years.
                            We work across India, South Asia and the Middle East in placing the best-fit
                            candidates in several key domains. Our strong database of candidates built
                            over time has always come to our aid. Coupled with quick TATs and tight SLA’s,
                            we've always ensured our clients have the right talent within the required timeframe.
                        </p>

                    </div>
                </section>

                {/* ================= DOMAIN DETAIL SECTION ================= */}
                <section className="live-domain-detail">

                    <div className="live-domain-detail-left live-fade-up live-delay-1">
                        <h2 className="live-domain-detail-title">
                            Automotive,
                            Engineering and
                            Manufacturing
                        </h2>

                        <div className="live-domain-detail-underline"></div>
                    </div>

                    <div className="live-domain-detail-right">
                        <img
                            src={domain21}
                            alt="Automotive"
                            className="live-domain-detail-image"
                        />
                    </div>

                </section>

                {/* ================= CONTENT SECTION ================= */}
                <section className="live-domain-content">

                    <div className="live-domain-content-left">
                        <h3 className="live-domain-highlight">
                            With over two decades of hiring talents in the automotive sector, we understand the marketplace like no other!
                        </h3>

                        <button className="live-domain-purple-btn">
                            Talk to our Expert
                        </button>
                    </div>

                    <div className="live-domain-content-right">
                        <h4 className="live-domain-content-title">
                            Readying the skillsets that Industry poses with
                        </h4>

                        <p className="live-domain-content-text">
                            LiveC, with its two decades of experience and expertise, is well placed to take advantage of the shifts in the manufacturing industry, triggered by developments in the emerging markets, the accelerated rise of new technologies, sustainability policies and customer experiences.
                        </p>

                        {expanded && (
                            <p className="live-domain-content-text live-domain-extra">
                                It also helps that we have a good mix of traditional and new age clients. We partner with leaders in the Auto OEM, Auto Ancillary, Light and Heavy Engineering, Pharma, EPC, Construction, Automation domains for whom we have helped identify talents across levels. This includes for functions like Production, Quality, Maintenance, Purchase, Procurement, Supply Chain EHS, R&D, Sales & Marketing, HR, Finance etc.
                            </p>
                        )}

                        <span
                            className="live-domain-read-toggle"
                            onClick={() => setExpanded(!expanded)}
                        >
                            {expanded ? "Read less" : "Read more"}
                        </span>

                    </div>

                </section>

                {/* ================= BANKING SECTION ================= */}
                <section className="live-domain-split">

                    <div className="live-domain-split-image">
                        <img
                            src={domain22}
                            alt="Banking"
                        />
                    </div>

                    <div className="live-domain-split-content">
                        <div className="live-domain-split-inner">
                            <h2 className="live-domain-split-title">
                                Banking and <br /> Financial Services
                            </h2>

                            <div className="live-domain-split-underline"></div>
                        </div>
                    </div>

                </section>

                {/* ================= CONTENT SECTION ================= */}
                <section className="live-domain-content" id="ready">

                    <div className="live-domain-content-left">
                        <h3 className="live-domain-highlight">
                            With the constantly evolving digital landscape, financial institutions have endured a lot to meet the demands of its customers. Equally placing importance its to human resources. LiveC has placed some of the best known talents in the market today
                        </h3>

                        <button className="live-domain-purple-btn">
                            Talk to our Expert
                        </button>
                    </div>

                    <div className="live-domain-content-right">
                        <h4 className="live-domain-content-title">
                            Readying the skillsets that Industry poses with
                        </h4>

                        <p className="live-domain-content-text">
                            Our clients in the BFS domain include both Indian and Multi National banks across India. We are seasoned in bulk hiring for front end sales positions like CASA, Gold Loan, Personal Loan and Home Loan. We've been very successful in mid-level positions like Relationship Manager, NRI RM, Trade Relationship Manger, Cluster Head, Channel Manager, Portfolio Manager, Privy Wealth Manager and Branch Managers.
                        </p>

                        {expanded && (
                            <p className="live-domain-content-text live-domain-extra">
                                It also helps that we have a good mix of traditional and new age clients. We partner with leaders in the Auto OEM, Auto Ancillary, Light and Heavy Engineering, Pharma, EPC, Construction, Automation domains for whom we have helped identify talents across levels. This includes for functions like Production, Quality, Maintenance, Purchase, Procurement, Supply Chain EHS, R&D, Sales & Marketing, HR, Finance etc.
                            </p>
                        )}

                        <span
                            className="live-domain-read-toggle"
                            onClick={() => setExpanded(!expanded)}
                        >
                            {expanded ? "Read less" : "Read more"}
                        </span>

                    </div>

                </section>

                {/* ================= DOMAIN DETAIL SECTION ================= */}
                <section className="live-domain-detail">

                    <div className="live-domain-detail-left live-fade-up live-delay-1" id="informavtive" style={{ backgroundColor: "#1B3446" }}>
                        <h2 className="live-domain-detail-title" style={{ color: "#ffffff" }}>
                            Information Technology
                        </h2>

                        <div className="live-domain-detail-underline"></div>
                    </div>

                    <div className="live-domain-detail-right">
                        <img
                            src={domain3}
                            alt="Automotive"
                            className="live-domain-detail-image"
                        />
                    </div>

                </section>

                {/* ================= TECHNOLOGY CONTENT SECTION ================= */}
                <section className="live-domain-tech">

                    <div className="live-domain-tech-col live-domain-tech-left">
                        <h3 className="live-domain-tech-highlight">
                            We work with Tech Services and Captive centres and have teams that specialise in lateral and leadership hiring where we work across domains and functions.
                        </h3>

                        <button className="live-domain-purple-btn live-domain-tech-btn">
                            Talk to our Expert
                        </button>
                    </div>

                    <div className="live-domain-tech-col live-domain-tech-middle">
                        <h4 className="live-domain-tech-title">
                            LiveC has created a unique benchmark in Technology recruitment with highest standards.
                        </h4>

                        <p className="live-domain-tech-text">
                            LiveC has provided thousands of jobs to candidates in this domain. We are constantly scouting for strong talent and we post our requirements across social media platforms. We work with Tech Services and Captive centres and have teams that specialise in lateral and leadership hiring where we work across domains and functions.
                        </p>
                    </div>

                    <div className="live-domain-tech-col live-domain-tech-right">
                        <p className="live-domain-tech-text">
                            We hire for multiple levels and multiple roles – for vanilla as well as niche skills. We offer competitive landscaping of talent across geographies and domains. It’s our ground-situation based strategies to minimise offer reneges and no-shows that help us offer services that add value to organisations and lead to long-standing partnerships.
                        </p>
                    </div>

                </section>

                {/* INFO SECTION */}
                <section className="live-domain-cta">

                    <div className="live-domain-cta-container">

                        <p className="live-domain-cta-text">
                            We’re always happy to talk with anyone interested in availing our services and leveraging our depth of experience in creating value.
                        </p>

                        <div className="live-domain-cta-link-wrapper">
                            <a href="#" className="live-domain-cta-link">
                                Talk to our Expert
                            </a>
                            <div className="live-domain-cta-underline"></div>
                        </div>

                    </div>

                </section>
                {/* ================= SHIPPING IMAGE SECTION ================= */}
                <section className="live-domain-shipping">

                    <img
                        src={domain4}
                        alt="Shipping & Logistics"
                        className="live-domain-shipping-img"
                    />

                    <div className="live-domain-shipping-overlay">
                        <div className="live-domain-shipping-content">
                            <h2 className="live-domain-shipping-title">
                                Shipping & <br /> Logistics
                            </h2>
                            <div className="live-domain-shipping-underline"></div>
                        </div>
                    </div>

                </section>

                {/* ================= TECHNOLOGY CONTENT SECTION ================= */}
                <section className="live-domain-tech">

                    <div className="live-domain-tech-col live-domain-tech-left">
                        <h3 className="live-domain-tech-highlight">
                            We have been partnering with leading (traditional and new age) organizations in this industry since our inception.
                        </h3>

                        <button className="live-domain-purple-btn live-domain-tech-btn">
                            Talk to our Expert
                        </button>
                    </div>

                    <div className="live-domain-tech-col live-domain-tech-middle">
                        <h4 className="live-domain-tech-title">
                            First in the Industry Solutions
                        </h4>

                        <p className="live-domain-tech-text">
                            Live Connections is uniquely placed to take advantage of the changing times in the industry since logistics is our flagship vertical. We have been partnering with leading (traditional and new age) organizations in this industry since our inception. These include leaders in Freight Forwarding, Shipping, Courier, Surface Transport, NVOCC and the Supply Chain domains.
                        </p>
                    </div>

                    <div className="live-domain-tech-col live-domain-tech-right">
                        <p className="live-domain-tech-text">
                            We have carefully nurtured and built our expertise in helping our clients identify key talents across verticals like Air Product, Ocean Product, Full Container Load (FCL), Less Container Load (LCL), Bulk Cargo etc. We've helped our clients identify professionals at all levels for functions like Operations, Sales, Customer Service, Export & Import, Documentation, Profit Centre Heads at the regional and national levels, HR, Finance, MIS etc.
                            With quite a few new age organizations bursting into the scene, we have broadened our capability to cover positions like Hub & Linehaul Operations, Fleet Specialists, Gateway Operations etc.
                        </p>
                    </div>

                </section>

                {/* ================= BANKING SECTION ================= */}
                <section className="live-domain-split" >

                    <div className="live-domain-split-image">
                        <img
                            src={domain5}
                            alt="Banking"
                        />
                    </div>

                    <div className="live-domain-split-content" id="Domain_it"  >
                        <div className="live-domain-split-inner" >
                            <h2 className="live-domain-split-title">
                                IT Enabled <br /> Services
                            </h2>

                            <div className="live-domain-split-underline"></div>
                        </div>
                    </div>

                </section>

                {/* ================= CONTENT SECTION ================= */}
                <section className="live-domain-content" style={{ backgroundColor: "#EDEDED" }}>

                    <div className="live-domain-content-left">
                        <h3 className="live-domain-highlight">
                            Resourcing for Diversity & Inclusion is one of the most discussed topics in organisations today. Are you looking for a D&I practice partner? We’re happy to help you.                    </h3>

                        <button className="live-domain-purple-btn">
                            Talk to our Expert
                        </button>
                    </div>

                    <div className="live-domain-content-right">


                        <p className="live-domain-content-text">
                            LiveC works for global giants, Big 4s, top MNCs and offers unparalleled services for ITES wing with a diligent, dedicated and detailed approach.

                            We place candidates in Consulting, Taxation, Audit & Advisory, Analytics, POSH, Procurement/SCM, Energy & Utilities, FMR, FPNA, Capital Markets, Process Excellence, Pre-Sales, Fund Accounting, Life Sciences, Retail and E-Commerce, Travel and Hospitality, Education and Power & Energy.                    </p>

                        {expanded && (
                            <p className="live-domain-content-text live-domain-extra">
                                It also helps that we have a good mix of traditional and new age clients. We partner with leaders in the Auto OEM, Auto Ancillary, Light and Heavy Engineering, Pharma, EPC, Construction, Automation domains for whom we have helped identify talents across levels. This includes for functions like Production, Quality, Maintenance, Purchase, Procurement, Supply Chain EHS, R&D, Sales & Marketing, HR, Finance etc.
                            </p>
                        )}

                        <span
                            className="live-domain-read-toggle"
                            onClick={() => setExpanded(!expanded)}
                        >
                            {expanded ? "Read less" : "Read more"}
                        </span>

                    </div>

                </section>

                {/* ================= DIVERSITY PRACTICE SECTION ================= */}
                <section className="live-domain-diversity live-fade-up live-delay-1">

                    <div className="live-domain-diversity-image live-fade-up live-delay-2">
                        <img src={domain5} alt="Diversity Practice" />
                    </div>

                    <div className="live-domain-diversity-content">

                        <h2 className="live-domain-diversity-title live-fade-up live-delay-3">
                            Resourcing for Diversity & Inclusion is one of the most discussed topics in organisations today.
                            Are you looking for a D&I practice partner? We’re happy to help you.
                        </h2>

                        <div className="live-domain-diversity-link-wrapper live-fade-up live-delay-4">
                            <a href="#" className="live-domain-diversity-link">
                                Learn about our D&I practice
                            </a>
                            <div className="live-domain-diversity-underline"></div>
                        </div>

                    </div>

                </section>

                <Domain1/>

                {/* INFO SECTION */}
                <section className="live-domain-cta">

                    <div className="live-domain-cta-container">

                        <p className="live-domain-cta-text">
                            Whether you’re looking for a consulting solution or trying to manage your resourcing challenges, we have the expertise that you want.                    </p>

                        <div className="live-domain-cta-link-wrapper">
                            <a href="#" className="live-domain-cta-link">
                                Explore Our Solutions
                            </a>
                            <div className="live-domain-cta-underline"></div>
                        </div>

                    </div>

                </section>




            </div>

        </>
    )
}

export default DomainSpecialist