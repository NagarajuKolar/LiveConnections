import React from "react";
import culture from "../assets/culture.png";
import "../CSS/CompanyCulture.css";
import { alljobs } from "../Data/Jobpost";
import Jobposting from "./Jobposting";
import diversity from '../assets/diversity.png'

function CompanyCulture() {
  return (
    <>

      <div className="connect-culture-container">

        
        <h2 className="connect-culture-title">Our Culture</h2>

        
        <div className="connect-culture-banner">
          <img src={culture} alt="Culture" />

          <div className="connect-banner-text">
            Investing in People <br /> Potential
          </div>
        </div>

       
        <div className="connect-culture-description">
          <p>
            Our culture has always been defined by transparent, employee friendly
            policies. LiveC believes in flat hierarchies, where every individual
            is valued and nurtured. We have a high performing team where creativity
            is actively encouraged. We champion social causes and value any
            participation in such causes. With more youngsters streaming into the
            workforce, we are constantly adapting to match the needs of different
            generations that work at LiveC.
          </p>
        </div>

       
        <p className="connect-culture-contact">
          We're always happy to hear from anyone interested in working with or for us.
        </p>

       
        <h2 className="connect-jobs-title">Jobs@LiveC</h2>

        <h4 className="connect-subtitle">Open Positions</h4>


      </div>

      <Jobposting jobs={alljobs} />

      <div className="connect-di-container">

        <div className="connect-di-hero">
          <img src={diversity} alt="Diversity & Inclusion" />

          <div className="connect-di-overlay"></div>

          <div className="connect-di-content ">
            <h1 className="connect-di-title">
              Diversity <br /> & Inclusion
            </h1>

            <p className="connect-di-text">
              We are specialists in D&I and pay a lot of attention
              to our client needs
            </p>

            <button className="connect-di-btn">
              Talk to Us
            </button>
          </div>
        </div>

        <div className="connect-di-cta">
          <div className="connect-di-cta-inner">

            <p>
              Our solutions are tailor-made for industry specific needs.
              Are you needs something specific to your industry?
              See how we can help you.
            </p>

            <button className="connect-di-cta-btn">
              Explore Domain Specialties
            </button>

          </div>
        </div>


      </div>


    </>
  );
}

export default CompanyCulture;
