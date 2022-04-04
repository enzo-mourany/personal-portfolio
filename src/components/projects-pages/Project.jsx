import "./project.scss";
import "../portfolio/Portfolio";
import { featuredPortfolio } from "../../data";

export default function Project({ project }) {
    const title = featuredPortfolio[project].title;
    return (
        <div className="project" id="project">
            <p>{title}</p>
        </div>
    )
}