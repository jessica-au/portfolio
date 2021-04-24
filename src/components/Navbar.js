import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';

import github from './static/images/github.svg';
import linkedin from './static/images/linkedin.svg';

const NavbarContainer = () => {
    
    return (
        <>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/portfolio/">Jessica Au</Navbar.Brand>
            <Nav className="mr-auto">
                <div className="navlink">
                    <NavLink to="/portfolio/projects">Projects</NavLink>
                </div>
                <div className="navlink">
                    <NavLink to="/portfolio/skills">Skills</NavLink>
                </div>
                <div className="navlink">
                    <NavLink to="/portfolio/resume">Resume</NavLink>
                </div>
                <div className="glyphs">
                <a href="https://github.com/jessica-au" target="_blank" rel="noreferrer">
                <img className="icons" src={github} alt="Bootstrap" width="32" height="32" />
                </a>
                <a href="https://linkedin.com/in/jessica-m-au/" target="_blank" rel="noreferrer">
                <img className="icons" src={linkedin} alt="Bootstrap" width="32" height="32" />
                </a>
                </div>
            </Nav>
        </Navbar>
        </>
    );
}

export default NavbarContainer;
