import React, { useState } from "react";
import { Link } from "react-router-dom";
import { alljobs } from "../Data/Jobpost";
import {
    FaCrown,
    FaMapMarkerAlt,
    FaUserTie,
    FaWallet
} from "react-icons/fa";
import '../CSS/JobLists.css'


function JobLists() {
    const [visibleCount, setVisibleCount] = useState(6);

    const loadMore = () => {
        setVisibleCount(alljobs.length);
    };
    return (
        <>
            <section className="live-jobs-section">

                <div className="live-jobs-container">

                    <h2 className="live-jobs-heading">
                        Found <span>{alljobs.length} Jobs</span>
                    </h2>

                    <div className="live-jobs-underline"></div>


                    <div className="live-jobs-grid">

                        {alljobs.slice(0, visibleCount).map((job) => (

                            <div className="live-job-card" key={job.id}>

                                <div className="live-job-title-row">
                                    <FaCrown />
                                    <h3>{job.title}</h3>
                                </div>

                                <p className="live-company">{job.company}</p>

                                <div className="live-job-info">
                                    <FaMapMarkerAlt />
                                    <span>{job.location}</span>
                                </div>

                                <div className="live-job-info">
                                    <FaUserTie />
                                    <span>{job.experience}</span>
                                </div>

                                <div className="live-job-info">
                                    <FaWallet />
                                    <span>{job.salary}</span>
                                </div>

                                

                                <div className="live-job-actions">

                                    <Link
                                        to={`/jobs/${job.slug}`}
                                        className="live-apply-btn"
                                    >
                                        Apply
                                    </Link>

                                    <Link
                                        to={`/jobs/${job.slug}`}
                                        className="live-details-link"
                                    >
                                        Show More Details
                                    </Link>

                                </div>

                            </div>
                        ))}

                    </div>

                   

                    {visibleCount < alljobs.length && (
                        <div className="live-loadmore-wrapper">
                            <button
                                onClick={loadMore}
                                className="live-loadmore-btn"
                            >
                                Load More
                            </button>
                        </div>
                    )}

                </div>

            </section>
        </>
    )
}

export default JobLists