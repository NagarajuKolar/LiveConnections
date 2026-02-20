import React from 'react'
import servicebanner from '../assets/servicebanner.png'
import servicebanner2 from '../assets/servicebanner2.png'
import servicebanner3 from '../assets/servicebanner3.svg'
import '../CSS/Service.css'
import Service2 from '../Components/Service2'
import Service3 from '../Components/Service3'
import HrResource from '../Components/HrResource'
function Services() {
    return (
        <>
            <section className="serv-hero">

                
                <div className="serv-hero-left">

                    <h1 className="serv-fadeup">
                        A People-First Approach
                        <br />
                        Can Positively Impact the
                        <br />
                        Future of Your Business
                    </h1>

                    <p className="serv-fadeup serv-delay-1">
                        We, at LiveC, are strategic talent partners for global corporates,
                        providing holistic solutions since 1996. Our services span multiple
                        sectors and functions across geographies worldwide.
                    </p>

                   
                    <div className="serv-btn serv-fadeup serv-delay-2">
                        Talk to our Expert
                    </div>

                </div>

                <div className="serv-hero-right">
                    <img src={servicebanner} alt="Services Illustration" />
                </div>

            </section>

            <section className="serv-search">

                <img
                    src={servicebanner2}
                    alt="Search Capabilities"
                    className="serv-search-img"
                />

                <div className="serv-search-overlay"></div>

                <div className="serv-search-content serv-fadeup">
                    <h2 className="serv-search-title">Search < br /> Capabilities</h2>
                </div>

            </section>

            <section className="serv-approach">

              
                <div className="serv-approach-left">

                    <p className="serv-top-text serv-fadeup">
                        Our bespoke approach to search lays emphasis on understanding the
                        needs of clients and candidates that would help them bring and build
                        mutual value.
                    </p>

                    <h3 className="serv-fadeup serv-delay-1">
                        The Client’s Brand Ambassador
                    </h3>

                    <p className="serv-fadeup serv-delay-2">
                        It’s important for us at LiveC to be seen as every client’s ambassador.
                        That’s how we are able to impart the most value. And it plays a big role
                        in search – allowing us to find qualified candidates in a cost-effective
                        and work-efficient manner.
                    </p>

                    <h3 className="serv-fadeup serv-delay-3">
                        Best Fit Candidates
                    </h3>

                    <p className="serv-fadeup serv-delay-4">
                        We keep sharpening our approach to search to be on top of market.
                        This helps us in finding, getting to know and placing candidates that
                        are the best fit for your business.
                    </p>

                  
                    <div className="serv-btn serv-fadeup serv-delay-5">
                        Talk to our Expert
                    </div>

                </div>

             
                <div className="serv-approach-right serv-fadeup serv-delay-2">

                    <h2 className="serv-approach-title">Our Approach</h2>

                    <ul className="serv-approach-list">
                        <li>Understanding clearly the client mandate.</li>
                        <li>Intelligent Research to map target companies.</li>
                        <li>Wish list of 'people' based on Intelligent Research.</li>
                        <li>Reach out to potentials as the client's brand ambassador.</li>
                        <li>Meet and understand their needs, preferences and aspirations.</li>
                        <li>Work with them in showcasing their resume and creating a leadership dashboard.</li>
                        <li>Present resumes, facilitate meetings and close successfully.</li>
                        <li>Lock in the best fit candidate for placement.</li>
                    </ul>

                </div>

            </section>

            <Service2/>
            <Service3/>
            <HrResource/>



        </>
    )
}

export default Services