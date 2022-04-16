import "./topbar.scss";
import { LinkedIn, Mail, GitHub } from "@material-ui/icons";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const iconsAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">

                    <a href="#intro" className="logo">Enzo</a>

                    <Reveal keyframes={iconsAnimation} delay={300} duration={500}>
                        <div className="itemContainer">
                            <a href="https://www.linkedin.com/in/enzo-mourany-9b4a37228/" target="_blank" rel="noreferrer">
                                <LinkedIn className="icon" />
                            </a>
                        </div>

                    </Reveal>
                    <Reveal keyframes={iconsAnimation} delay={400} duration={500}>
                        <div className="itemContainer">
                            <a href="https://github.com/enzo-mourany/" target="_blank" rel="noreferrer">
                                <GitHub className="icon" />
                            </a>
                        </div>

                    </Reveal>
                    <Reveal keyframes={iconsAnimation} delay={500} duration={500}>

                        <div className="itemContainer">
                            <a href="mailto:enzo.mourany@outlook.com">
                                <Mail className="icon" />
                            </a>
                        </div>
                    </Reveal>
                </div>
                <div className="right">
                    <Reveal keyframes={iconsAnimation} delay={600} duration={500}>

                        <div
                            className="hamburger"
                            onClick={() => setMenuOpen(!menuOpen)}

                        >
                            <span className="line1"></span>
                            <span className="line2"></span>
                            <span className="line3"></span>
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}
