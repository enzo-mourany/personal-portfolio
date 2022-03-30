import "./technologies.scss";
import { frontendLanguages, backendLanguages, tools } from "../../data";
import ProgressBar from "@ramonak/react-progress-bar";

export default function Technologies() {
    return (
        <div className="technologies" id="technologies">
            <div className="wrapper">
                <div className="title">
                    <h1>Technologies I Use</h1>
                </div>
                <div className="blocs">
                    <div className="container">
                        <h2>Frontend</h2>
                        <ul>
                            <li>
                                {frontendLanguages[0].name}
                                <ProgressBar
                                    completed={frontendLanguages[0].level}
                                    maxCompleted={100}
                                    customLabel=" "
                                    bgColor="#43FFD5"
                                    baseBgColor="#0B1829" />
                            </li>
                            <li>
                                {frontendLanguages[1].name}
                            </li>
                            <li>
                                {frontendLanguages[2].name}
                            </li>
                            <li>
                                {frontendLanguages[3].name}
                            </li>
                            <li>
                                {frontendLanguages[4].name}
                            </li>
                            <li>
                                {frontendLanguages[5].name}
                            </li>
                        </ul>
                    </div>
                    <div className="container">
                        <h2>Backend</h2>
                        <ul>
                            <li>
                                {backendLanguages[0].name}
                            </li>
                            <li>
                                {backendLanguages[1].name}
                            </li>
                            <li>
                                {backendLanguages[2].name}
                            </li>
                            <li>
                                {backendLanguages[3].name}
                            </li>
                        </ul>
                    </div>
                    <div className="container">
                        <h2>Tools</h2>
                        <ul>
                            <li>
                                {tools[0].name}
                            </li>
                            <li>
                                {tools[1].name}
                            </li>
                            <li>
                                {tools[2].name}
                            </li>
                            <li>
                                {tools[3].name}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
