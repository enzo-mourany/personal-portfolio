import "./portfolio.scss";
import { featuredPortfolio } from "../../data";
import { useState } from "react";

export default function Portfolio() {

    const [data, setData] = useState([]);
    return (
        <div className="portfolio" id="portfolio">
            <div className="wrapper">
                <div className="title">
                    <h2>Portfolio</h2>
                </div>
                <div className="container">
                    {data.map((d) => (
                        <div className="item">
                            <img
                                src={d.img}
                                alt=""
                            />
                            <h3>{d.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
