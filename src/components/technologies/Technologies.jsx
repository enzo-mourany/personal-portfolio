import "./technologies.scss";
import { frontendLanguages, backendLanguages, tools } from "../../data";
import ProgressBar from "@ramonak/react-progress-bar";
import { motion } from "framer-motion";

export default function Technologies() {
    return (
        <div className="technologies" id="technologies">
            <div className="wrapper">
                <div className="title">
                    <h2>Technologies I Use</h2>
                </div>
                <div className="blocs">
                    <div className="container">
                        <h2>Frontend</h2>
                        <ul>
                            {frontendLanguages.map((item) => (
                                <li>
                                    <div className="name">
                                        {item.name}
                                    </div>
                                    <div className="progressBar">
                                        <ProgressBar
                                            completed={item.level}
                                            maxCompleted={100}
                                            customLabel=" "
                                            bgColor="#43FFD5"
                                            baseBgColor="#0B1829"
                                            height={10}
                                            width={100}
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="container">
                        <h2>Backend</h2>
                        <ul>
                            {backendLanguages.map((item) => (
                                <li>
                                    <div className="name">

                                        {item.name}
                                    </div>
                                    <div className="progressBar">

                                        <ProgressBar
                                            completed={item.level}
                                            maxCompleted={100}
                                            customLabel=" "
                                            bgColor="#43FFD5"
                                            baseBgColor="#0B1829"
                                            height={10}
                                            width={100}
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="container">
                        <h2>Tools</h2>
                        <ul>
                            {tools.map((item) => (
                                <li>
                                    <div className="name">

                                        {item.name}
                                    </div>
                                    <div className="progressBar">

                                        <ProgressBar
                                            completed={item.level}
                                            maxCompleted={100}
                                            customLabel=" "
                                            bgColor="#43FFD5"
                                            baseBgColor="#0B1829"
                                            height={10}
                                            width={100}
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
