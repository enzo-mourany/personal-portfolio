import "./about.scss";
import { motion } from "framer-motion";

export default function About() {
    const variants = {
        visible: {
            opacity: 1,
            translateY: -30,
        },
        hidden: { opacity: 0, y: 30, },
    }
    return (
        <div className="about" id="about">
            <div className="wrapper">
                <div className="right">
                </div>
                <div className="left">
                    <motion.h2
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ delay: 1.1, duration: 1, ease: "easeOut" }}
                    >About Me</motion.h2>
                    <p>
                        I’m french developer and first year computer science
                        student. I working on web 3.0 projects with
                        technologies like React, Node JS and more.
                        I also develop blockchain projects with solidity.
                        <br />
                        <br />
                        I am very interested in cryptocurrencies as well as
                        its issues and projects
                        During several projects I was able to develop my relationship.
                        I am comfortable leading a team.
                        <br />
                        <br />
                        I keep up to date on new technologies, especially those related to web 3.0
                        <br />
                        <br />
                        I am working to become a fullstack JS developer as well as a blockchain developer.
                        I would also like to be part of the Ethereum project
                    </p>
                </div>
            </div>
        </div>
    )
}
