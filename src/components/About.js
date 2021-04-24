import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Image from 'react-bootstrap/Image';
import profile from './../components/static/images/profile.jpg';

const About = () => {
    return (
        <>
        <h1 className="titles">Welcome!</h1>
            <Row className="justify-content-md-center aboutrow">
                <Col>
                    <Image src={profile} roundedCircle thumbnail /> <br/>

                   <div className="description">
                   <h2>Jessica Au</h2> <br/>
                   </div>
                   <div className="description2">
                    Full-Stack Software Engineer | Web Developer
                   </div>
                </Col>
                <Col>
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
