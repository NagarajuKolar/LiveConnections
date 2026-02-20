import React from 'react'
import servicebanner3 from '../assets/servicebanner3.svg'
import servicebanner4 from '../assets/servicebanner4.png'
import '../CSS/Service2.css'
import { useNavigate } from 'react-router-dom'
function Service2() {
    const navigate=useNavigate()
    return (
        <>
            <section className="serv-interview">

                
                <div className="serv-interview-img">
                    <img src={servicebanner3} alt="Interview Service" />
                </div>

                
                <div className="serv-interview-content">

                    <h2 className="serv-interview-title serv-fadeup">
                        Interview as <br /> a Service
                    </h2>

                    <p className="serv-highlight serv-fadeup">
                        LiveC helps corporates address today’s recruitment challenges viz
                        no-show, declines, reneges etc., effectively and efficiently.
                    </p>

                    <p className="serv-fadeup">
                        We provide you with contract interviewers and specialists with
                        technical capabilities and expertise in the latest hiring technologies
                        to help overcome roadblocks. What you get in the process is a
                        streamlined and efficient HR department with time enough to attend to
                        more pressing deliverables.
                    </p>

                    {/* DIV Button */}
                    <div className="serv-btnn serv-fadeup" onClick={()=>navigate('/contact')}>
                        Talk to our Expert
                    </div>

                </div>

            </section>

            <section className="serv-quote">

                <div className="serv-quote-container">

                    <p className="serv-quote-text serv-fadeup">
                        We're head-hunters at heart, having evolved right from before
                        the Internet 2.0 days to the current disruptive technologies,
                        and in the process, we have become more creative.
                    </p>

                </div>

            </section>

            <section className="serv-contingency">

                
                <div className="serv-contingency-content">

                    <h2 className="serv-contingency-title serv-fadeup">
                        Contingency <br /> Recruitment
                    </h2>

                    <p className="serv-highlight serv-fadeup">
                        In contingency scenarios, our proprietary search engine,
                        built on a robust platform, helps us reduce our response
                        time and deliver with speed and accuracy.
                    </p>

                    <p className="serv-fadeup">
                        Our specialty is our capability to work across sectors to
                        manage need-based recruitment. Our work spanning varied
                        industries has helped us build versatility in our system
                        and the required depth to hire for varying degrees of
                        complexity.
                    </p>

                    
                    <div className="serv-btnn serv-fadeup" onClick={()=>navigate('/contact')}>
                        Talk to our Expert
                    </div>

                </div>

                
                <div className="serv-contingency-img">
                    <img src={servicebanner3} alt="Contingency Recruitment" />
                </div>

            </section>

            <section className="serv-staffing">

                {/* LEFT IMAGE */}
                <div className="serv-staffing-img">
                    <img src={servicebanner3} alt="Staffing Services" />
                </div>

                {/* RIGHT CONTENT */}
                <div className="serv-staffing-content">

                    <h2 className="serv-staffing-title serv-fadeup">
                        Staffing <br /> Services
                    </h2>

                    <p className="serv-highlight serv-fadeup">
                        We can help with hiring the right talent to work on your site,
                        manage their payroll, statutory compliances, appraisals and raises.
                    </p>

                    <p className="serv-fadeup">
                        In a nutshell, with our staffing services, we help corporates
                        efficiently manage their workforce without getting into the
                        nitty-gritties of administration, thereby freeing them for
                        core competencies.
                    </p>

                    <p className="serv-fadeup">
                        We have a 400+ member dedicated team and we are highly flexible
                        in our offerings, with both contract and contract-to-hire terms.
                    </p>


                    <div className="serv-btnn serv-fadeup" onClick={()=>navigate('/contact')}>
                        Talk to our Expert
                    </div>

                </div>

            </section>

            <section className="serv-incubating">


                <div className="serv-incubating-top">

                    <div className="serv-incubating-container">

                        <p className="serv-incubating-text serv-fadeup">
                            We've also built a vast and validated database of candidates
                            in various domains across Asia Pacific, the Middle East and
                            India that could come to your aid.
                        </p>

                        <div className="serv-incubating-link serv-fadeup" onClick={()=>navigate('/contact')}>
                            Contact Us
                        </div>

                    </div>

                </div>


                <div className="serv-incubating-banner">

                    <img src={servicebanner4} alt="Global In-House Centers" />

                    <div className="serv-incubating-overlay"></div>

                    <div className="serv-incubating-title serv-fadeup">
                        Incubating <br />
                        Global In-House <br />
                        Centers
                    </div>

                </div>

            </section>

        </>
    )
}

export default Service2