import React, { useEffect, useRef, useState } from "react";
import "../CSS/companytimeline.css";

import year9 from "../assets/sstory-1996.webp";
import year6 from "../assets/sstory-2006.webp";
import year7 from "../assets/sstory-2007.webp";
import year1 from "../assets/sstory-2011.webp";
import year2 from "../assets/sstory-2012.webp";
import year5 from "../assets/story-2005.png";

const timelineData = [
    {
        year: "1996",
        title: "Our Beginning",
        description:
            "With a couple of teammates and a handful of clients, we begin our journey in Chennai, India.",
        image: year9,
    },
    {
        year: "2005",
        title: "Growth Phase",
        description:
            "Expanded operations to Hyderabad with a team of 3. Today we've expanded to other Tier1 and Tier2 cities.",
        image: year5,
    },
    {
        year: "2006",
        title: "New Milestone",
        description:
            "Began operations in Bengaluru (IT Capital of India) to cater to the insatiable Tech and KPO talent needs.",
        image: year6,
    },
    {
        year: "2007",
        title: "Expansion",
        description:
            "Dubai, our first international branch, commenced operations to serve our established clients in the GCC region.",
        image: year7,
    },
    {
        year: "2011",
        title: "Global Presence",
        description:
            "Qatar came next - our second international branch - to serve our esteemed clients in the Middle East.",
        image: year1,
    },
    {
        year: "2012",
        title: "Innovation Era",
        description:
            "We opened our Singapore office to serve the growing needs of our customers in the Asia Pacific region.",
        image: year2,
    },
];

const CompanyTimeline = () => {
    const sectionRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const section = sectionRef.current;
            if (!section) return;

            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY;

            const maxScroll = sectionHeight - windowHeight;
            if (maxScroll <= 0) return;

            const scrollInside = scrollY - sectionTop;

            if (scrollInside < 0) {
                setActiveIndex(0);
                return;
            }

            const progress = Math.min(
                Math.max(scrollInside / maxScroll, 0),
                1
            );

            const index = Math.min(
                timelineData.length - 1,
                Math.floor(progress * timelineData.length)
            );

            if (!isNaN(index)) {
                setActiveIndex(index);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <section className="live-company-section" ref={sectionRef}>

            {/* ================= DESKTOP PINNED VERSION ================= */}
            <div
                className="live-scroll-area"
                style={{ height: `${timelineData.length * 80}vh` }}
            >
                <div className="live-sticky-wrapper">

                    {/* LEFT TITLE */}
                    <div className="live-left">
                        <h1>Our Story</h1>
                        <span className="live-underline-company"></span>
                    </div>

                    {/* CENTER IMAGE */}
                    <div className="live-center">
                        <img
                            key={activeIndex}
                            src={timelineData[activeIndex].image}
                            alt="story"
                            className="live-fade"
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="live-right">
                        <h2>{timelineData[activeIndex].year}:</h2>
                        <h3>{timelineData[activeIndex].title}</h3>
                        <p>{timelineData[activeIndex].description}</p>
                        <small>Scroll Down</small>
                    </div>

                </div>
            </div>

            {/* ================= MOBILE / TABLET ACCORDION ================= */}
            <div className="live-mobile-accordion">
                {timelineData.map((item, index) => (
                    <AccordionItem key={index} item={item} />
                ))}
            </div>

        </section>
    );
};

export default CompanyTimeline;

/* ================= ACCORDION COMPONENT ================= */

const AccordionItem = ({ item }) => {
    const [open, setOpen] = useState(item.year === "1996");

    return (
        <div className="live-acc-item">
            <div
                className="live-acc-header"
                onClick={() => setOpen(!open)}
            >
                <span className={`live-acc-year ${open ? "active" : ""}`}>
                    {item.year}
                </span>
                <span className="live-acc-icon">
                    {open ? "−" : "+"}
                </span>
            </div>

            {open && (
                <div className="live-acc-content">
                    <p>{item.description}</p>
                </div>
            )}
        </div>
    );
};
