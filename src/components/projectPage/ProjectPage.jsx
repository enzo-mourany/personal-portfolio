import React, { useContext, useEffect } from 'react';
import "./projectPage.scss";
import "../portfolio/Portfolio";
import { featuredPortfolio } from "../../data";
import { SelectedProjectContext } from "../../context/SelectedProjectContext";


export default function ProjectPage() {



    const selectedProject = useContext(SelectedProjectContext);
    return (
        <div className="project" id="project">
            <div className="wrapper">
                <h2>{featuredPortfolio[1].title}</h2>
                <p>Hello World</p>
            </div>
        </div>
    )
}