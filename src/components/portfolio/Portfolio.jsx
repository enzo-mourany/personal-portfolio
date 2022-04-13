import "./portfolio.scss";
import { featuredPortfolio } from "../../data";
import { useState, useContext, useRef } from "react";
import { SelectedProjectContext } from "../SelectedProjectContext";
import useIntersection from '../useIntersection';
import { useNavigate } from "react-router-dom";
import { OpenedProjectContext } from "../OpenedProjectContext";
import { motion } from "framer-motion";

export default function Portfolio() {

    const setSelectedProject = useContext(SelectedProjectContext);
    //const setOpenedProject = useContext(OpenedProjectContext);

    const ref = useRef();
    const inViewport = useIntersection(ref, '0px');

    var reveals = document.querySelectorAll('.reveal');
    for (const element of reveals) {
        if (inViewport) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    }


    return (
        <div className="portfolio" id="portfolio">
            <div className="wrapper">
                <span className="big-text">PORTFOLIO</span>
                <section className="container">
                    <div className="title">
                        <h2 className="title">My <span>Works</span></h2>
                        <p className="text">Some of my personal projects and for studies</p>
                    </div>
                    <ul className="project-grid">
                        {featuredPortfolio.map((item) => (
                            <li
                                className="item"
                                whileHover={{ translateY: -10 }}
                            >
                                <div className="project-inner">
                                    <div className="top">
                                        <div className="project-top">
                                            <div className="folder">
                                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder">
                                                    <title>Folder</title>
                                                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                                                </svg>
                                            </div>
                                            <div className="project-links">
                                                <a href={item.githubLink} aria-label="GitHub Link" target="_blank" rel="noopener noreferrer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
                                                        <title>GitHub</title>
                                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                                        </path>
                                                    </svg>
                                                </a>
                                                <a href="https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c" aria-label="External Link" class="external" target="_blank" rel="noopener noreferrer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link">
                                                        <title>External Link</title>
                                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                        <polyline points="15 3 21 3 21 9"></polyline>
                                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <h3 className="project-title">
                                            <a href="#"
                                                onClick={() => setSelectedProject(item.id)}>
                                                {item.title}
                                            </a>
                                        </h3>
                                        <div className="project-description">
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <ul className="project-tech-list">
                                            {item.tech.map((t) => <li>{t}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div >
    )
}
