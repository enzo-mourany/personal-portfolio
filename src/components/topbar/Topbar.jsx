import "./topbar.scss";
import { LinkedIn, Mail, GitHub } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Enzo Mourany</a>
                    <div className="itemContainer">
                        <a href="https://www.linkedin.com/in/enzo-mourany-9b4a37228/" target="_blank" rel="noreferrer">
                            <LinkedIn className="icon" />
                        </a>
                    </div>
                    <div className="itemContainer">
                        <a href="https://github.com/enzo-mourany/" target="_blank" rel="noreferrer">
                            <GitHub className="icon" />
                        </a>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
