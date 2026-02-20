import React from 'react'
import '../CSS/Contact.css'
import contactBg from '../assets/contactbanner.png'
import { officeData } from '../Data/OfficeData'
import {
    User,
    Mail,
    Building2,
    Phone
} from "lucide-react";
import ContactForms from './ContactForms';
import HrResource from '../Components/HrResource';
function Contact() {
    return (
        <>
            <section
                className="cont-hero"
                style={{ backgroundImage: `url(${contactBg})` }}
            >


                <div className="cont-container">

                    
                    <h1 className="cont-title serv-fadeup">
                        Let’s Together, Unlock Brighter
                        <br />
                        Possibilities
                    </h1>

                    
                    <div className="cont-grid">

                        
                        <div className="cont-item serv-fadeup">
                            <h3>Job Seekers</h3>
                            <p>Send Resume to</p>
                            <span>resumes@livecjobs.com</span>
                        </div>

                        
                        <div className="cont-item serv-fadeup">
                            <h3>New Business</h3>
                            <p>Let’s Talk</p>
                            <span>+91 44 24896910</span>
                        </div>

                        
                        <div className="cont-item serv-fadeup">
                            <h3>Hello!</h3>
                            <p>For General Enquiries</p>
                            <span>Send us a message</span>
                        </div>

                    </div>

                </div>
            </section>


            <section className="cont-offices">

                <h2 className="cont-offices-heading serv-fadeup">
                    We’re happy to help you! Get in touch
                    with our officials near you.
                </h2>

                <div className="cont-offices-grid">

                    {officeData.map((office) => (
                        <div key={office.id} className="cont-office-card serv-fadeup">

                            
                            <div className="cont-office-title">
                                <h3>{office.title}</h3>
                            </div>

                          
                            <div className="cont-office-col">
                                <User size={50} className="cont-icon" />

                                {office.people.map((p, i) => (
                                    <div key={i}>
                                        <p className="cont-label">{p.role}</p>
                                        <p className="cont-value">{p.name}</p>
                                    </div>
                                ))}
                            </div>

                            
                            <div className="cont-office-col">
                                <Mail size={40} className="cont-icon" />

                                {office.emails.map((e, i) => (
                                    <div key={i}>
                                        <p className="cont-label">{e.label}</p>
                                        <p className="cont-value">{e.value}</p>
                                    </div>
                                ))}
                            </div>

                            
                            <div className="cont-office-col">
                                <Building2 size={40} className="cont-icon" />
                                <p className="cont-value">{office.address}</p>
                            </div>

                           
                            <div className="cont-office-col">
                                <Phone size={38} className="cont-icon" />
                                {office.phone && (
                                    <p className="cont-value">{office.phone}</p>
                                )}

                                <div className="cont-directions">
                                    Get Location Directions
                                </div>
                            </div>

                        </div>
                    ))}

                </div>

            </section>

            <ContactForms/>
 

            <section className="serv-follow ">

                <div className="serv-follow-container">

                    <p className="serv-follow-label">Follow Us</p>

                    <div className="serv-follow-links serv-fadeup">

                        <a
                            href="https://www.linkedin.com/company/live-connections/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Linkedin
                        </a>

                        <a
                            href="https://www.youtube.com/JobsJukebox"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            YouTube
                        </a>

                        <a
                            href="https://www.facebook.com/weplacepeoplefirst/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Facebook
                        </a>

                        <a
                            href="https://www.instagram.com/live_connections/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Instagram
                        </a>

                    </div>

                </div>

            </section>

<HrResource/>


        </>
    )
}

export default Contact