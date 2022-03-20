import "./topbar.scss"
import { LinkedIn, Mail, GitHub } from "@material-ui/icons";

export default function topbar() {
    return (
        <div className="topbar">
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
                </div>
            </div>
        </div>
    )
}
