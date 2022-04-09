import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./about.scss";


export default function About() {

    window.addEventListener('scroll', reveal);

    function reveal() {
        var reveals = document.querySelectorAll('.reveal');
        for (const element of reveals) {
            var windowHeight = window.innerHeight;
            var revealTop = element.getBoundingClientRect().top;
            var revealPoint = 150;

            if (revealTop < windowHeight - revealPoint) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        }
    }


    return (
        <div className="about" id="about">
            <div className="wrapper">
                <span className="big-text">ABOUT ME</span>
                <div className="container">

                    <h2 className="title reveal" ><span>Profesional</span> Profile</h2>

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
