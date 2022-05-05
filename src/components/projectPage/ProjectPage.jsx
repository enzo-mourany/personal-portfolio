//import React, { useContext, useEffect } from 'react';
import "./projectPage.scss";
import "../portfolio/Portfolio";
import { featuredPortfolio } from "../../data";
//import { SelectedProjectContext } from "../../context/SelectedProjectContext";
import { Link } from "react-router-dom";

export default function ProjectPage() {



    //const selectedProject = useContext(SelectedProjectContext);
    return (
        <div className="project" id="project">
            <div className="wrapper">
                <h2>{featuredPortfolio[1].title}</h2>
                <p>Hello World</p>
                <Link to="/">Back</Link>
            </div>
        </div>
    )
}