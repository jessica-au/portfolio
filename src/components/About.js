import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Image from 'react-bootstrap/Image';
import profile from './../components/static/images/profile.jpg';

const About = () => {
    return (
        <>
        <h1 className="titles">Welcome!</h1>
            <Row className="justify-content-md-center aboutrow">
                <Col sm={6} md={5} lg={5}>
                   <div className="description">
                    <Image src={profile} roundedCircle thumbnail /> <br/>

                   <h2>Jessica Au</h2> <br/>
                   
                    Full-Stack Software Engineer | Web Developer
                   </div>
                </Col>
                <Col sm={6} md={5} lg={5}>
                    <div className="about">
                    <h2>About Me</h2>
                    <p>
                        Current full-stack software engineer, previously a high school English teacher.  One of my greatest passions in life is 
                        </p>
        </div>
                </Col>
            </Row>
        </>
    );
}

export default About;
