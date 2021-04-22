import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Image from 'react-bootstrap/Image';
import profile from './../components/static/images/profile.jpg';

const About = () => {
    return (
        <>
          <Row className="justify-content-md-center">
    <Col sm={3}>
    <Image src= { profile } roundedCircle thumbnail/></Col>

    <Col sm={3}>
    <div className="about">
            I am an educator turned full-stack developer who maintains a strong passion for teaching and creating equitable opportunities for learning. I value developing ed tech tools that augment and transform the learning experience, and I hope to lend my prior teaching experience to the development of tools that create greater educational equity.
        </div>
        </Col>
  </Row>
        </>
    );
}

export default About;
