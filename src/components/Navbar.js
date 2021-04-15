import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = (props) => {
    console.log('inside navbar')
    return (
        <nav className="navbar">
            <div className="navHomeLink">
                <NavLink exact to="/">Home</NavLink>
            </div>
            <div className="navAboutLink">
                <NavLink to="/about">About</NavLink>
            </div>
            <div className="navResumeLink">
                <NavLink to="/resume">Resume</NavLink>
            </div>
            <div className="navProjectsLink">
                <NavLink to="/projects">Projects</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
