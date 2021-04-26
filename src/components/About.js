import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Image from 'react-bootstrap/Image';
import profile from './../components/static/images/profile.jpg';

const About = () => {
    return (
        <>
        <h1 className="titles">Welcome!</h1>
            <Row className="justify-content-md-center aboutrow">
                <Col sm={7} md={6} lg={5}>
                   <div className="description">
                    <Image src={profile} roundedCircle thumbnail />
                   <h2>Jessica Au</h2>
                   
                    Full-Stack Software Engineer | Web Developer <br/>
                    au.jessica.m@gmail.com <br/> <br/>
                   </div>
                </Col>
                <Col sm={8} md={6} lg={6}>
                    <div className="about">
                    <h2>About Me</h2>
                        <p>
                        <br/>
                        Current full-stack software engineer, previously a high school English teacher. 
                        </p>
                        {/* One of my greatest passions in life is creating equitable opportunity for educational access through the use of technology.   */}
        </div>
                </Col>
            </Row>
        </>
    );
}

export default About;
