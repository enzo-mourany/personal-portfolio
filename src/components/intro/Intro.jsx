import "./intro.scss";

export default function Intro() {

    return (
        <div className="intro" id="intro">
            <div className="discover">
                <p className="explore">EXPLORE</p>
                <div className="bar"></div>
            </div>
            <div className="left">
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>
                        <span>Enzo</span> Mourany
                    </h1>
                    <h3>French / Frontend Developer</h3>

                </div>
                <div className="buttons">
                    <div className="learnMore">
                        <a className="learnMoreBtn" href="#about">
                            Learn More
                        </a>
                    </div>
                    <div className="downloadPdf">
                        <a href="#">Download CV</a>
                    </div>
                </div>
            </div>

        </div>

    )
}
