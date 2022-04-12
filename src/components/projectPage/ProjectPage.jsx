import React, { useContext } from 'react';
import "./projectPage.scss";
import "../portfolio/Portfolio";
import { featuredPortfolio } from "../../data";
import { SelectedProjectContext } from "../SelectedProjectContext";


export default function ProjectPage() {
    const selectedProject = useContext(SelectedProjectContext);
    return (
        <div className="project" id="project">
            <p>{featuredPortfolio[selectedProject].title}</p>
            <p>Hello World</p>
        </div>
    )
}