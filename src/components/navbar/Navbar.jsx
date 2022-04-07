import React from 'react';
import './navbar.scss';

export default function Navbar({ selectedPage, setSelectedPage }) {
    return (
        <nav className="navbar">
            <ul className="menlist">
                <li>
                    <a href="#intro" className={"nav-link" + (selectedPage && "active")}></a>
                </li>
                <li>
                    <a href="#about" className="nav-link"></a>
                </li>
                <li>
                    <a href="#technologies" className="nav-link"></a>
                </li>
                <li>
                    <a href="#portfolio" className="nav-link"></a>
                </li>
                <li>
                    <a href="#contact" className="nav-link"></a>
                </li>
            </ul>
        </nav>
    )
}
