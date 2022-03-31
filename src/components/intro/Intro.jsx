import "./intro.scss";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Intro({ setLoading }) {


    const variants = {
        visible: {
            opacity: 1,
            y: 30,
            translateY: -30,
        },
        hidden: { opacity: 0 },
    }

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


    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000);
        return () => clearTimeout(timer);
    });

    return (
        <motion.div className="intro" id="intro">
            <div className="left">
            </div>
            <motion.div
                className="right"

            >
                <div className="wrapper">

                    <motion.h2
                        style={{ originY: 20 }}
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ delay: 1, duration: 1 }}
                    >Hi There, I'm</motion.h2>
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ delay: 1.5, duration: 1 }}
                    >Enzo Mourany</motion.h1>
                    <motion.h3
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ delay: 2, duration: 1 }}
                    >Frontend Developer</motion.h3>

                </div>
                <div className="buttons">
                    <motion.div
                        className="learnMore"
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ delay: 2.5, duration: 1 }}
                    >
                        <a className="learnMoreBtn" href="#about">
                            Learn More
                        </a>
                    </motion.div>
                    <motion.div
                        className="downloadPdf"
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ delay: 2.7, duration: 1 }}
                    >
                        <a href="#">Download CV</a>
                    </motion.div>
                </div>
            </motion.div>

        </motion.div>

    )
}
