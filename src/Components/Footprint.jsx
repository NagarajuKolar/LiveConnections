import React, { useEffect, useRef, useState } from "react";
import "../CSS/Footprint.css";

import img1 from "../assets/Footprint1.png";
import img2 from "../assets/Footprint2.png";
import img3 from "../assets/Footprint3.png";
import img4 from "../assets/Footprint4.png";
import img5 from "../assets/Footprint5.png";

function Footprint() {
  const printWrapperRef = useRef(null);

  const [printProgress, setPrintProgress] = useState(0);
  const [printIsMobile, setPrintIsMobile] = useState(false);
  const [printMobileIndex, setPrintMobileIndex] = useState(0);

  const touchStartX = useRef(0);

  const printTotalSlides = 5;

  useEffect(() => {
    const checkScreen = () => {
      setPrintIsMobile(window.innerWidth <= 992);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (printIsMobile) return;

    const handleScroll = () => {
      const wrapper = printWrapperRef.current;
      if (!wrapper) return;

      const rect = wrapper.getBoundingClientRect();

      const progress = Math.min(
        Math.max(-rect.top / window.innerHeight, 0),
        printTotalSlides - 1
      );

      setPrintProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [printIsMobile]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff =
      touchStartX.current - e.changedTouches[0].clientX;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && printMobileIndex < printTotalSlides - 1) {
        setPrintMobileIndex(printMobileIndex + 1);
      } else if (diff < 0 && printMobileIndex > 0) {
        setPrintMobileIndex(printMobileIndex - 1);
      }
    }
  };

  const slides = [
    {
      title: "Destination",
      number: "40",
      text: "India. UAE. Singapore. Qatar. With a presence in four strategic countries, LiveC is well placed today to service multiple sectors and functions.",
      img: img1,
    },
    {
      title: "LiveCians",
      number: "400+",
      text: "From a couple of team members in 1996 to an over 400 strong team, LiveC has grown over the years offering bespoke, people-first HR solutions.",
      img: img2,
    },
    {
      title: "Locations",
      number: "07",
      text: "With offices in India, Singapore, Qatar and Dubai, LiveC offers depth of services in key domains like IT, BFSI, logistics, hospitality and more.",
      img: img3,
    },
    {
      title: "Verticals",
      number: "25+",
      text: "Retail, eCommerce, power, energy, education, IT services, banking, logistics and many more sectors served.",
      img: img4,
    },
    {
      title: "Placements",
      number: "45000+",
      text: "Interns placed decades ago are today senior leaders and CXOs — a powerful network we continue to leverage.",
      img: img5,
    },
  ];

 

  return (
    <>
      <section
        ref={printWrapperRef}
        className="print-wrapper"
        style={{
          height: printIsMobile
            ? "auto"
            : `${printTotalSlides * 100}vh`,
        }}
      >
        <div
          className="print-sticky"
          onTouchStart={printIsMobile ? handleTouchStart : null}
          onTouchEnd={printIsMobile ? handleTouchEnd : null}
        >
          <div className="print-header">
            <h2 className="print-section-title">
              Our Footprint
            </h2>
          </div>

          <div
            className="print-slides"
            style={{
              transform: printIsMobile
                ? `translateX(-${printMobileIndex * 100}%)`
                : `translateX(-${printProgress * 100}vw)`,
            }}
          >
            {slides.map((slide, i) => (
              <div className="print-slide" key={i}>
                <div
                  className={`print-content ${
                    printIsMobile && i === printMobileIndex
                      ? "print-animate"
                      : ""
                  }`}
                >
                  <div className="print-left">
                    <h2 className="print-number">{slide.number}</h2>
                    <h3 className="print-title">{slide.title}</h3>
                    <p className="print-text print-text-animate">
                      {slide.text}
                    </p>
                  </div>

                  <div className="print-right">
                    <img
                      src={slide.img}
                      alt={slide.title}
                      className="print-image"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {printIsMobile && (
            <div className="print-dots">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`print-dot ${
                    i === printMobileIndex ? "active" : ""
                  }`}
                  onClick={() => setPrintMobileIndex(i)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

    </>
  );
}

export default Footprint;
