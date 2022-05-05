import React, { useContext, useEffect } from 'react';
import "./projectPage.scss";
import "../portfolio/Portfolio";
import { featuredPortfolio } from "../../data";
import { SelectedProjectContext } from "../../context/SelectedProjectContext";
import { Link } from "react-router-dom";

export default function ProjectPage() {



    const selectedProject = useContext(SelectedProjectContext);
    let defaultId = 0;

    if (selectedProject >= 0) {
        defaultId = selectedProject;
    }
    console.log(selectedProject + " selected");
    console.log(defaultId + " s");
    return (
        <div className="project" id="project">
            <div className="wrapper">
                <h2>{featuredPortfolio[defaultId].title}</h2>
                <p>Hello World</p>
                <Link to="/" onClick={console.log('test4')}>Back</Link>
            </div>
        </div>
    )
}