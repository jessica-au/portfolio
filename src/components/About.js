import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Image from 'react-bootstrap/Image';
import profile from './../components/static/images/profilenew.jpeg';

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
                        I am an educator turned full-stack developer who maintains a strong passion for teaching and utilizing my critical thinking skills to solve tough problems. I value developing tools that augment and transform the user experience, and I hope to lend my prior experience to the development of tools and applications that are elegant and thoughtfully designed. 
                        </p>
        </div>
                </Col>
            </Row>
        </>
    );
}

export default About;
