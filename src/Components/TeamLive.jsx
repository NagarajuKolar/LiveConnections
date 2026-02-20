import React from 'react'
import Teambanner from '../assets/teamcc.png'
import '../CSS/TeamLive.css'

function TeamLive() {
    return (
        <>
            <section
                className="teamlive-container"
                style={{ backgroundImage: `url(${Teambanner})` }}
            >
                <div className="overlay"></div>

                <div className="teamlive-content">
                    <h1 className="team-title">Team LiveC</h1>

                    <div className="underline"></div>

                    <p className="team-description">
                        A passion for people, for building and nurturing relationships is what
                        each member of Team LiveC holds in the highest regard. It’s helped us
                        stay with our clients over the long term and truly deliver tangible
                        value.
                    </p>

                    <button className="cta-btn">Know More</button>
                </div>
            </section>

            <section className="opportunities-section">
                <div className="opp-content">
                    <h1 className="opp-title">Opportunities Now</h1>

                    <div className="opp-underline"></div>

                    <p className="opp-text">
                        In a world that is progressively reimagining the way people work and do
                        business, LiveC remains committed to help organizations source the very
                        best talent and help hires in securing perfect opportunities in their
                        professional journey.
                    </p>

                    <h2 className="recent-title">Recently Added Job Postings</h2>
                </div>
            </section>

        </>
    )
}

export default TeamLive