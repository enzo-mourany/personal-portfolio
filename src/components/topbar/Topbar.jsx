import "./topbar.scss"
import { LinkedIn, Mail, GitHub } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar" + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">main</a>
                    <div className="itemContainer">
                        <LinkedIn className="icon" />
                    </div>
                    <div className="itemContainer">
                        <GitHub className="icon" />
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                    </div>
                </div>
                <div className="right">
                    <div className="burgerMenu" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
