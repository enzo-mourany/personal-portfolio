import React from 'react';
import './navbar.scss';

export default function Navbar({ selectedPage, setSelectedPage }) {
    return (
        <nav className="navbar">
            <ul className="menlist">
                <li>
                    <a href="#intro" className={"nav-link " + (selectedPage && "active")}>Intro</a>
                </li>
                <li>
                    <a href="#about" className={"nav-link " + (selectedPage && "active")}>About</a>
                </li>
                <li>
                    <a href="#technologies" className={"nav-link " + (selectedPage && "active")}>Technologies</a>
                </li>
                <li>
                    <a href="#portfolio" className={"nav-link " + (selectedPage && "active")}>Portfolio</a>
                </li>
                <li>
                    <a href="#contact" className={"nav-link " + (selectedPage && "active")}>Contact</a>
                </li>
            </ul>
        </nav>
    )
}
