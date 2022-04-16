import "./topbar.scss";
import { LinkedIn, Mail, GitHub } from "@material-ui/icons";
import { Fade } from 'react-reveal';

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <Fade top distance="20px" delay={200} duration={500}>
                        <a href="#intro" className="logo">Enzo</a>

                    </Fade>
                    <Fade top distance="20px" delay={300} duration={500}>
                        <div className="itemContainer">
                            <a href="https://www.linkedin.com/in/enzo-mourany-9b4a37228/" target="_blank" rel="noreferrer">
                                <LinkedIn className="icon" />
                            </a>
                        </div>

                    </Fade>
                    <Fade top distance="20px" delay={400} duration={500}>
                        <div className="itemContainer">
                            <a href="https://github.com/enzo-mourany/" target="_blank" rel="noreferrer">
                                <GitHub className="icon" />
                            </a>
                        </div>

                    </Fade>
                    <Fade top distance="20px" delay={500} duration={500}>

                        <div className="itemContainer">
                            <a href="mailto:enzo.mourany@outlook.com">
                                <Mail className="icon" />
                            </a>
                        </div>
                    </Fade>
                </div>
                <div className="right">
                    <Fade top distance="20px" delay={600} duration={500}>

                        <div
                            className="hamburger"
                            onClick={() => setMenuOpen(!menuOpen)}

                        >
                            <span className="line1"></span>
                            <span className="line2"></span>
                            <span className="line3"></span>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
}
