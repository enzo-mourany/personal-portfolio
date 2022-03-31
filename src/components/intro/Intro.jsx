import "./intro.scss";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Intro({ setLoading }) {

    const container = {
        show: {
            transition: {
                staggerChildren: 0.35,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 200 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 1.6,
            },
        },
        exit: {
            opacity: 0,
            y: -200,
            transition: {
                ease: "easeInOut",
                duration: 0.8,
            },
        },
    };
    /*
        const loader = ({ setLoading }) => {
            useEffect(() => {
                const timer = setTimeout(() => {
                    setLoading(false);
                }, 4000);
                return () => clearTimeout(timer);
            });
    
            return ()
        }
        */

    return (
        <div className="intro" id="intro">
            <div className="left">
            </div>
            <motion.div
                className="right"
                variants={container}
                onAnimationComplete={() => setLoading(false)}
                initial="hidden"
                animate="show"
                exit="exit"
            >
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Enzo Mourany</h1>
                    <h3>
                        Frontend Developer
                    </h3>
                </div>
                <div className="buttons">
                    <div className="learnMore" variants={item}>
                        <a className="learnMoreBtn" href="#about">
                            Learn More
                        </a>
                    </div>
                    <div className="downloadPdf">
                        <a href="#">Download CV</a>
                    </div>
                </div>
            </motion.div>

        </div>

    )
}
