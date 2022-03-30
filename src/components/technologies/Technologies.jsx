import "./technologies.scss";
import { frontendLanguages, backendLanguages, tools } from "../../data";
import ProgressBar from "@ramonak/react-progress-bar";

export default function Technologies() {
    //const [data, setData] = useState([]);
    /*const list = [
        {
            id: "frontendLanguages",
            title: "FrontendLanguages",
        },
        {
            id: "backendLanguages",
            title: "BackendLanguages",
        },
        {
            id: "tools",
            title: "Tools",
        },
    ]
    */
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
                            {frontendLanguages.map((item) => (
                                <li>
                                    {item.name}
                                    <ProgressBar
                                        completed={item.level}
                                        maxCompleted={100}
                                        customLabel=" "
                                        bgColor="#43FFD5"
                                        baseBgColor="#0B1829"
                                        height={10}
                                        width={100}
                                    />
                                </li>
                            ))}
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
