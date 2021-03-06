import React from "react";
import "./about.scss";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const textsAnimations = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export default function About() {
    return (
        <div className="about" id="about">
            <div className="wrapper">
                <span className="big-text">ABOUT ME</span>
                <div className="container">
                    <Reveal keyframes={textsAnimations} onVisibilityChange={true} triggerOnce={true} duration={800}>

                        <h2 className="title" ><span>Profesional</span> Profile</h2>
                    </Reveal>

                    <Reveal keyframes={textsAnimations} onVisibilityChange={true} triggerOnce={true} delay={300} duration={800}>

                        <p className="text-about">
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
                    </Reveal>

                </div>
            </div>
        </div>
    )
}
