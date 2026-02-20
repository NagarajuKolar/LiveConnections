import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { articles } from "../Data/articlesData";
import "../CSS/Article.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import HrResource from "../Components/HrResource";



function Article() {
    const { articleslug } = useParams();
    const navigate = useNavigate();

    const article = articles.find((item) => item.slug === articleslug);

    if (!article) return <h2>Article not found</h2>;

    const recent = articles
        .filter((item) => item.slug !== articleslug)
        .slice(0, 2);


    return (
        <>
            <section className="article-section">


                <div className="article-hero">

                    <div className="article-left">
                        <h1>{article.title}</h1>

                        <p className="article-desc">
                            {article.description}
                        </p>

                        <div className="article-meta">
                            <span>{article.date}</span>
                            <span>{article.readTime}</span>
                        </div>
                    </div>

                    <div className="article-right">
                        <img src={article.image} alt={article.title} />
                    </div>

                </div>

                <div className="article-body">


                    <div className="article-content">
                        {article.content.map((para, index) => (
                            <p key={index}>{para}</p>
                        ))}
                    </div>

                    <div className="recent-section">

                        <h2>Recent Blogs</h2>

                        <div className="recent-grid">
                            {recent.map((item) => (
                                <div
                                    className="recent-card"
                                    key={item.id}
                                    onClick={() => navigate(`/article/${item.slug}`)}
                                >
                                    <img src={item.image} alt={item.title} />

                                    <div className="recent-info">
                                        <h4>{item.title}</h4>

                                        <div className="recent-meta">
                                            <span>{item.date}</span>
                                            <span>{item.readTime}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>


                <div className="article-share">

                    <span>Share</span>

                    <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebookF />
                    </a>

                    <a
                        href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTwitter />
                    </a>

                    <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedinIn />
                    </a>

                </div>



            </section>
            <HrResource />
        </>
    );
}

export default Article;
