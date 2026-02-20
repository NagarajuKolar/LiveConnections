import React from 'react'
import '../CSS/DiversityInclusion.css'
import diversityhero from '../assets/diversityhero.png'
import diversityCta from "../assets/diversitycta.png";
import useLiveFadeUp from '../Data/Fadeup';

function DiversityInclusion() {
     useLiveFadeUp();
  return (
    <>
            <div className="live-diversity-page">
    
                {/* ================= HERO SECTION ================= */}
                <section
                    className="live-diversity-hero"
                    style={{ backgroundImage: `url(${diversityhero})` }}
                >
                    <div className="live-diversity-hero-overlay"></div>
    
                    <div className="live-diversity-hero-container">
                        <div className="live-diversity-hero-content">
    
                            <h1 className="live-diversity-hero-title live-fade-up live-delay-1">
                                Driving Measurable Growth With Diversity,
                                Equality and Inclusion.
                            </h1>
    
                            <p className="live-diversity-hero-desc live-fade-up live-delay-2">
                                Find direction in navigating D&I at the work place with a tailored
                                inclusive hiring process and more.
                            </p>
    
                            <button className="live-diversity-hero-btn live-fade-up live-delay-3">
                                Talk to our Experts
                            </button>
    
                        </div>
                    </div>
                </section>
    
                {/* ================= CTA GRADIENT SECTION ================= */}
    
                <section className="live-diversity-cta">
                    <div className="live-diversity-cta-container">
    
                        <h2 className="live-diversity-cta-title live-fade-up live-delay-1">
                            According to LinkedIn, data shows 78% of companies prioritize diversity
                            to improve culture and 62% do so to boost financial performance.
                            Are you looking to boost your performance?
                        </h2>
    
                        <a href="/contact" className="live-diversity-cta-link live-fade-up live-delay-2">
                            Contact Us
                        </a>
    
                    </div>
                </section>
    
                {/* ================= INFO SPLIT SECTION ================= */}
    
                <section className="live-diversity-info">
                    <div className="live-diversity-info-container">
    
                        {/* LEFT CONTENT */}
                        <div className="live-diversity-info-left live-fade-up live-delay-1">
                            <h3 className="live-diversity-info-highlight">
                                We at Live-Care passionate about D&I recruitment and made it one of our top service offering.
                                Of the many initiatives we have undertaken, conducting job fairs for the Differently Abled
                                and placing our own team of experts to champions the practice is worth a mention.
                            </h3>
                        </div>
    
                        {/* RIGHT CONTENT */}
                        <div className="live-diversity-info-right live-fade-up live-delay-2">
    
                            <p>
                                In 2018 Global Recruiting Trends reported – building diverse and inclusive
                                teams is the number one talent priority for HR and talent acquisition professionals.
                            </p>
    
                            <p>
                                Diversity and Inclusion (D&I) is the most discussed topic within HR fraternity.
                                The ability to be diverse and inclusive is within reach for all businesses,
                                but the organizations struggle to promote their D&I strategies.
                                That it why at Live Connections we have made D&I one of top service offerings
                                to the next level, communicate what they are doing or measure the outcomes
                                to ensure that what they are doing has been successful.
                            </p>
    
                        </div>
    
                    </div>
                </section>
    
                {/* ================= STATS SECTION ================= */}
    
                <section className="live-diversity-stats">
                    <div className="live-diversity-stats-wrapper">
    
                        <h2 className="live-diversity-stats-heading live-fade-up live-delay-1">
                            A popular study conducted by IBM mentions, Organizations that have an
                            effective Diversity & Inclusion program are:
                        </h2>
    
                        <div className="live-diversity-stats-grid">
    
                            <div className="live-diversity-stat-card live-fade-up live-delay-1">
                                <h3 className="live-diversity-stat-number">6X</h3>
                                <p>More likely to be innovative</p>
                            </div>
    
                            <div className="live-diversity-stat-card live-fade-up live-delay-2">
                                <h3 className="live-diversity-stat-number">6X</h3>
                                <p>
                                    More likely to anticipate change and respond effectively
                                </p>
                            </div>
    
                            <div className="live-diversity-stat-card live-fade-up live-delay-3">
                                <h3 className="live-diversity-stat-number">2X</h3>
                                <p>
                                    More likely to meet or exceed financial targets
                                </p>
                            </div>
    
                        </div>
    
                    </div>
    
                    <div className="live-diversity-stats-btn-wrapper live-fade-up live-delay-2">
                        <button className="live-diversity-hero-btn">
                            Talk to our Experts
                        </button>
                    </div>
    
                </section>
    
                {/* ================= SPLIT CTA SECTION ================= */}
    
                <section className="live-diversity-split">
    
                    {/* LEFT CONTENT */}
                    <div className="live-diversity-split-left">
    
                        <div className="live-diversity-split-content">
    
                            <h2 className="live-diversity-split-title live-fade-up live-delay-1">
                                D&I recruiting can be challenging and most often require an experts help?
                                Would you like to connect with one of our executives near you?
                            </h2>
    
                            <button className="live-diversity-split-btn live-fade-up live-delay-2">
                                Request A Call Back
                            </button>
    
                        </div>
    
                    </div>
    
                    {/* RIGHT IMAGE */}
                    <div className="live-diversity-split-right">
                        <img src={diversityCta} alt="Diversity Consulting" />
                    </div>
    
                </section>
    
                {/* ================= INITIATIVES SECTION ================= */}
    
                <section className="live-diversity-initiatives">
                    <div className="l-d-i-header">
                        <h2 className="live-diversity-initiatives-title live-fade-up live-delay-1">
                            Given the cross-industry trends for hiring Diversity talents and to focus on
                            creating an exclusive D & I hiring process, we have a dedicated team of
                            D & I hiring specialists to address all your challenges relating to D & I.
                        </h2>
                    </div>
                    <div className="live-diversity-initiatives-container">
    
    
                        {/* LEFT COLUMN */}
                        <div className="live-diversity-initiatives-left">
    
    
    
                            <p className="live-fade-up live-delay-2">
                                We are passionate about this subject and have conducted job fairs
                                for the Differently Abled. We also have a Differently Abled consultant
                                as our champion and head of this practice.
                            </p>
    
                            <p className="live-fade-up live-delay-3">
                                Connect with us today to discuss your D&I hiring challenges and needs.
                                Let’s make it a great initiative together.
                            </p>
    
                            <div className="live-diversity-initiatives-btn live-fade-up live-delay-3">
                                <button className="live-diversity-hero-btn">
                                    Talk to our Expert
                                </button>
                            </div>
    
                        </div>
    
                        {/* RIGHT COLUMN */}
                        <div className="live-diversity-initiatives-right">
    
                            <h3 className="live-diversity-initiatives-heading live-fade-up live-delay-1">
                                LiveC’s Diversity & Inclusion hiring initiatives focuses on talent which includes:
                            </h3>
    
                            <div className="live-diversity-initiatives-grid">
    
                                <div className="live-diversity-initiative-card live-fade-up live-delay-1">
                                    <div className="live-initiative-icon">♡</div>
                                    <p>(LGBT) Lesbian, Gay, Bisexual & Transgender</p>
                                </div>
    
                                <div className="live-diversity-initiative-card live-fade-up live-delay-2">
                                    <div className="live-initiative-icon">♿</div>
                                    <p>Physically Differently Enabled</p>
                                </div>
    
                                <div className="live-diversity-initiative-card live-fade-up live-delay-2">
                                    <div className="live-initiative-icon">♀</div>
                                    <p>Women</p>
                                </div>
    
                                <div className="live-diversity-initiative-card live-fade-up live-delay-3">
                                    <div className="live-initiative-icon">★</div>
                                    <p>Veterans</p>
                                </div>
    
                            </div>
    
                        </div>
    
                    </div>
    
                </section>
    
                {/* ================= SOLUTIONS SPLIT SECTION ================= */}
    
                <section className="live-diversity-solutions">
    
                    {/* LEFT BLOCK */}
                    <div className="live-diversity-solutions-left">
    
                        <div className="live-diversity-solutions-content">
    
                            <h2 className="live-fade-up live-delay-1">
                                Our solutions are tailor-made for industry specific needs.
                                Are you needs something specific to your industry?
                                See how we can help you.
                            </h2>
    
                            <a href="#" className="live-diversity-solutions-link live-fade-up live-delay-2">
                                Explore Our Specialities
                            </a>
    
                        </div>
    
                    </div>
    
                    {/* RIGHT BLOCK */}
                    <div className="live-diversity-solutions-right">
    
                        <div className="live-diversity-solutions-content">
    
                            <h2 className="live-fade-up live-delay-1">
                                Whether you're looking for a consulting solution or trying to manage
                                your resourcing challenges, we have the expertise that you want.
                            </h2>
    
                            <a href="#" className="live-diversity-solutions-link live-fade-up live-delay-2 dark">
                                Explore Our Solutions
                            </a>
    
                        </div>
    
                    </div>
    
                </section>
    
    
    
    
    
            </div>

    
    </>
  )
}

export default DiversityInclusion