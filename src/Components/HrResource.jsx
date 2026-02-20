import React from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/HrResource.css";
import { articles } from "../Data/articlesData";

function HrResource() {
    const navigate = useNavigate();


    const handleRead = (slug) => {
        navigate(`/article/${slug}`);
    };

    return (
        <section className="hr-section">

            <h1 className="hr-title">HR Bytes (Resources)</h1>

            <div className="hr-grid">


                {articles.map((article) => (
                    <div className="hr-card" key={article.id}>

                        <div className="hr-image-wrapper">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="hr-image"
                            />
                        </div>

                        <h3 className="hr-card-title">
                            {article.title}
                        </h3>

                       
                        <div className="hr-footer">

                            <div className="hr-meta">
                                <span>{article.date}</span>
                                <span className="read-time">{article.readTime}</span>
                            </div>

                            <button
                                className="hr-read-btn"
                                onClick={() => handleRead(article.slug)}
                            >
                                Read Report
                            </button>

                        </div>

                    </div>
                ))}


            </div>

        </section>
    );
}

export default HrResource;
