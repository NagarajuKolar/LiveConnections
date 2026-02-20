import React from "react";
import { Crown, MapPin, Sparkles, CreditCard } from "lucide-react";
import "../CSS/Jobpostings.css";
import { alljobs } from "../Data/Jobpost";
import { useNavigate } from "react-router-dom";

function Jobposting({ jobs }) {

  const navigate = useNavigate();


  //mapping the id of recent in alljobs getting the complete details
  const recentfullJobs = jobs.map(r =>
    alljobs.find(job => job.slug === r.slug)
  );

  const handleApply = () => {
    navigate("/contact");
  };

  return (
    <section className="job-section">


      <div className="job-header">

        <div className="job-header-item">
          <Crown className="header-icon" /> Title
        </div>

        <div className="job-header-item">
          <MapPin className="header-icon" /> Location
        </div>

        <div className="job-header-item">
          <Sparkles className="header-icon" /> Experience
        </div>

        <div className="job-header-item">
          <CreditCard className="header-icon" /> Remuneration
        </div>

        <div></div>
      </div>

   

      {recentfullJobs.map((job) => (
        <div className="job-card" key={job.id}>

         
          <div className="job-col jobpost-title">
            <Crown className="job-icon" />
            <div>
              <h3>{job.title}</h3>
              <p>{job.company}</p>
            </div>
          </div>

          
          <div className="job-col">
            <MapPin className="job-icon" />
            <span>{job.location}</span>
          </div>

          
          <div className="job-col">
            <Sparkles className="job-icon" />
            <span>{job.experience}</span>
          </div>

          
          <div className="job-col">
            <CreditCard className="job-icon" />
            <span>{job.salary}</span>
          </div>

          <div className="job-actions">

            <div className="job-apply-btn" onClick={handleApply}>
              Apply
            </div>

            <div
              className="job-details-btn"
              onClick={() => navigate(`/jobs/${job.slug}`)}
            >
              Show More Details
            </div>

          </div>

        </div>
      ))}

   
      <div className="show-all-container">
        <div
          className="show-all-btn"
          onClick={() => navigate("/jobs")}
        >
          Show All Jobs
        </div>
      </div>

    </section>
  );
}

export default Jobposting;
