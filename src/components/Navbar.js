import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';

import github from './static/images/github.svg';
import linkedin from './static/images/linkedin.svg';

const NavbarContainer = (props) => {
    
    return (
        <>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Jessica Au</Navbar.Brand>
            <Nav className="mr-auto">
                <div className="navlink">
                    <NavLink to="/projects">Projects</NavLink>
                </div>
                <div className="navlink">
                    <NavLink to="/skills">Skills</NavLink>
                </div>
                <div className="navlink">
                    <NavLink to="/resume">Resume</NavLink>
                </div>
                <div className="glyphs">
                <img className="icons" src={github} alt="Bootstrap" width="32" height="32"/>
                <img className="icons" src={linkedin} alt="Bootstrap" width="32" height="32"/>
                </div>
            </Nav>
        </Navbar>
        </>
    );
}

export default NavbarContainer;
