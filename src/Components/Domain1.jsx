import React from 'react'
import useLiveFadeUp from '../Data/Fadeup';
import travel from '../assets/travel.png'
import retail from '../assets/retail.png'
import education from '../assets/education.png'
import energy from '../assets/energy.png'
import { useState } from 'react';
import '../CSS/Domain1.css'
function Domain1() {
    useLiveFadeUp();
        const [activeIndex, setActiveIndex] = useState(null);
        const [openedCards, setOpenedCards] = useState([]);
        const [expandAll, setExpandAll] = useState(false);
    
        const domains = [
            {
                title: "Travel & Hospitality",
                image: travel,
                description:
                    "At LiveC, we have a separate team dedicated to cater to the hospitality & travel sector. We place across levels, functions and geographies."
            },
            {
                title: "Retail & E-Commerce",
                image: retail,
                description:
                    "We have had a ring side view to India’s Retail boom and established strong partnerships across retail & ecommerce domains."
            },
            {
                title: "Education",
                image: education,
                description:
                    "We support leading education institutions with leadership and functional hiring solutions."
            },
            {
                title: "Power & Energy",
                image: energy,
                description:
                    "We partner with power & energy organizations, sourcing talent across engineering, operations and leadership roles."
            }
        ];
    
        const handleExpandAll = () => {
            setExpandAll(!expandAll);
            setActiveIndex(null);
        };
    return (
        <>
            <section className="live-other-domains">

                {/* Header */}
                <div className="live-other-domains-header live-fade-up live-delay-1">
                    <h2 className="live-other-domains-title">
                        Explore our other domain specialities
                    </h2>

                    <button
                        className="live-other-domains-toggle"
                        onClick={handleExpandAll}
                    >
                        {expandAll ? "Show Less" : "Show All"}
                    </button>
                </div>

                {/* Grid */}
                <div className="live-other-domains-grid">

                    {domains.map((item, index) => (

                        <div key={index} className="live-other-domain-card live-fade-up">

                            {/* Image */}
                            <div className="live-other-domain-image">
                                <img src={item.image} alt={item.title} />

                                <div className="live-other-domain-info">

                                    {/* Title + Button row */}
                                    <div className="live-other-domain-top">
                                        <h3>{item.title}</h3>

                                        <button
                                            className="live-other-domain-btn"
                                            onClick={() =>
                                                setActiveIndex(
                                                    activeIndex === index ? null : index
                                                )
                                            }
                                        >
                                            Learn More
                                        </button>
                                    </div>

                                    <div className="live-other-domain-underline"></div>

                                </div>
                            </div>

                            {/* Expand Content */}
                            {(expandAll || activeIndex === index) && (
                                <div className="live-other-domain-content">
                                    <p>{item.description}</p>
                                </div>
                            )}

                        </div>

                    ))}

                </div>

            </section>


        </>
    )
}

export default Domain1