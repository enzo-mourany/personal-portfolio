import "./technologies.scss";

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
                                Javascript
                            </li>
                            <li>
                                Typescript
                            </li>
                            <li>
                                React DOM
                            </li>
                            <li>
                                React Native
                            </li>
                            <li>
                                HTML
                            </li>
                            <li>
                                CSS
                            </li>
                        </ul>
                    </div>
                    <div className="container">
                        <h2>Backend</h2>
                        <ul>
                            <li>
                                Node JS
                            </li>
                            <li>
                                Java
                            </li>
                            <li>
                                C#
                            </li>
                            <li>
                                Solidity
                            </li>
                        </ul>
                    </div>
                    <div className="container">
                        <h2>Tools</h2>
                        <ul>
                            <li>
                                Visual Studio Code
                            </li>
                            <li>
                                Vim
                            </li>
                            <li>
                                IntelliJ
                            </li>
                            <li>
                                Git
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
