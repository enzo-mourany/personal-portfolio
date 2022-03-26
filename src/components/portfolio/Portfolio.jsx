import "./portfolio.scss";
import { featuredPortfolio } from "../../data";
import { useState } from "react";

export default function Portfolio() {

    //const data = featuredPortfolio;
    return (
        <div className="portfolio" id="portfolio">
            <div className="wrapper">
                <div className="title">
                    <h2>Portfolio</h2>
                </div>
                <section className="container">

                    <ul className="project-grid">
                        <li className="item">
                            <div className="project-inner">
                                <div className="top">
                                    <div className="project-top">
                                        <div className="folder"></div>
                                        <div className="project-github"></div>
                                        <div className="project-links"></div>
                                    </div>
                                    <h3 className="project-title">test</h3>
                                    <div className="project-description"></div>
                                </div>
                                <div className="bottom">
                                    <ul className="project-tech-list"></ul>
                                </div>
                            </div>
                        </li>
                        <li className="item">
                            <div className="project-inner">
                                <div className="top">
                                    <div className="project-top">
                                        <div className="folder"></div>
                                        <div className="project-github"></div>
                                        <div className="project-links"></div>
                                    </div>
                                    <h3 className="project-title">test</h3>
                                    <div className="project-description"></div>
                                </div>
                                <div className="bottom">
                                    <ul className="project-tech-list"></ul>
                                </div>
                            </div>
                        </li>
                        <li className="item">
                            <div className="project-inner">
                                <div className="top">
                                    <div className="project-top">
                                        <div className="folder"></div>
                                        <div className="project-github"></div>
                                        <div className="project-links"></div>
                                    </div>
                                    <h3 className="project-title">test</h3>
                                    <div className="project-description"></div>
                                </div>
                                <div className="bottom">
                                    <ul className="project-tech-list"></ul>
                                </div>
                            </div>
                        </li>
                        <li className="item">
                            <div className="project-inner">
                                <div className="top">
                                    <div className="project-top">
                                        <div className="folder"></div>
                                        <div className="project-github"></div>
                                        <div className="project-links"></div>
                                    </div>
                                    <h3 className="project-title">test</h3>
                                    <div className="project-description"></div>
                                </div>
                                <div className="bottom">
                                    <ul className="project-tech-list"></ul>
                                </div>
                            </div>
                        </li>
                    </ul>

                </section>
            </div>
        </div>
    )
}
