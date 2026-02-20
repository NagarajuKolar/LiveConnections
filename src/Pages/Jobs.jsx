import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { alljobs, recentjobs } from "../Data/Jobpost";

import {
    FiMapPin,
    FiCalendar,
    FiBriefcase,
    FiPlus,
    FiMinus
} from "react-icons/fi";

import {
    Crown,
    MapPin,
    Sparkles,
    CreditCard
} from "lucide-react";

import "../CSS/Jobs.css";
import HrResource from "../Components/HrResource";

function Jobs() {

    const { jobslug } = useParams();
    const navigate = useNavigate();


    const job = alljobs.find(j => j.slug === jobslug);
    if (!job) return <h2>Job not found</h2>;


    const [open, setOpen] = useState("experience");

    const toggle = (section) =>
        setOpen(prev => (prev === section ? "" : section));

    const related = recentjobs
        .map(r => alljobs.find(j => j.slug === r.slug))
        .filter(Boolean)
        .filter(j => j.slug !== jobslug)
        .slice(0, 2);

    return (

        <>
            <section className="job-page">



                <div className="job-hero">

                    <h1>{job.title}</h1>

                    <div className="hero-underline" />

                    <div className="hero-meta">

                        <button className="apply-btn">
                            Apply
                        </button>

                        <span>
                            <FiMapPin /> {job.location}
                        </span>

                        <span>
                            <FiCalendar /> Posted, {job.posted}
                        </span>

                        <span>
                            <FiBriefcase /> {job.company}
                        </span>

                    </div>

                </div>



                <div className="job-body">



                    <div className="job-left">

                        <h3>The Company</h3>
                        <p>{job.companyDetails}</p>

                        <h3>The Role</h3>

                        <ol className="role-list">
                            {job.role.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ol>


                        <div className="accordion">

                            <div
                                className={`accordion-title ${open === "experience" ? "active" : ""
                                    }`}
                                onClick={() => toggle("experience")}
                            >
                                Experience
                                {open === "experience" ? <FiMinus /> : <FiPlus />}
                            </div>

                            {open === "experience" && (
                                <p>{job.experienceDetails}</p>
                            )}

                        </div>



                        <div className="accordion">

                            <div
                                className={`accordion-title ${open === "skills" ? "active" : ""
                                    }`}
                                onClick={() => toggle("skills")}
                            >
                                Skills
                                {open === "skills" ? <FiMinus /> : <FiPlus />}
                            </div>

                            {open === "skills" && (
                                <p>{job.skills}</p>
                            )}

                        </div>



                        <div className="accordion">

                            <div
                                className={`accordion-title ${open === "education" ? "active" : ""
                                    }`}
                                onClick={() => toggle("education")}
                            >
                                Education
                                {open === "education" ? <FiMinus /> : <FiPlus />}
                            </div>

                            {open === "education" && (
                                <p>{job.education}</p>
                            )}

                        </div>



                        <span
                            className="back-link"
                            onClick={() => navigate("/jobs")}
                        >
                            Back To Job Listings
                        </span>

                    </div>



                    <div className="job-right">

                        <h2>Related Jobs</h2>

                        {related.map(item => (

                            <div key={item.id} className="related-card">

                                <h4 className="job-title">
                                    <Crown size={22} /> {item.title}
                                </h4>

                                <p className="job-company">
                                    {item.company}
                                </p>

                                <p className="job-info">
                                    <MapPin size={20} /> {item.location}
                                </p>

                                <p className="job-info">
                                    <Sparkles size={20} /> {item.experience}
                                </p>

                                <p className="job-info">
                                    <CreditCard size={20} /> {item.salary}
                                </p>

                                <div className="card-actions">

                                    <div
                                        className="apply-btn-div"
                                        onClick={() => navigate("/contact")}
                                    >
                                        Apply
                                    </div>

                                    <span
                                        className="link-underline"
                                        onClick={() =>
                                            navigate(`/jobs/${item.slug}`)
                                        }
                                    >
                                        Show More Details
                                    </span>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </section>

            <section className="connect-live-section">

                <div className="connect-live-container">

                    <h2 className="connect-live-title">
                        Did not find a suitable job. Leave your resume behind
                        and we shall find one.
                    </h2>

                    <div
                        className="connect-live-btn"
                        onClick={() => navigate("/contact")}
                    >
                        Submit Resume
                    </div>

                </div>

            </section>

            <HrResource />




        </>



    );
}

export default Jobs;
