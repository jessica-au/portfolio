import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';


const NavbarContainer = (props) => {
    
    return (
        <>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Jessica Au</Navbar.Brand>
            <Nav className="mr-auto">
                <div className="navlink">
                    <NavLink to="/skills">Skills</NavLink>
                </div>
                <div className="navlink">
                    <NavLink to="/resume">Resume</NavLink>
                </div>
                <div className="navlink">
                    <NavLink to="/projects">Projects</NavLink>
                </div>
            </Nav>
        </Navbar>
        </>
    );
}

export default NavbarContainer;
