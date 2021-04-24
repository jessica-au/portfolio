import React from 'react';
import { Carousel, Col, Row, Card, Button } from 'react-bootstrap';

import mathblaster from "./static/images/mathblaster.png";
import selene from "./static/images/selene.gif";
import selenestill from "./static/images/selene.png";
import nipponrunner from "./static/images/nipponrunner.gif";
import nipponrunnerstill from "./static/images/nipponrunner.png";
import binmediares from "./static/images/binmediares.png";


const Projects = () => {

    return (
        <>
        <h1 class="titles">Projects</h1>
            <Row sm={8} md={{ span: 6, offset: 6 }} lg={{ span: 9, offset: 3 }} className="justify-content-md-center" >
                <Carousel fade nextLabel=" " prevLabel=" " className="justify-content-md-center">
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-image"
                            src={selene}
                            alt="Selene"
                        />                       
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-image"
                            src={nipponrunner}
                            alt="Homeworld Bound"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-image"
                            src={binmediares}
                            alt="Bin Media Res"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-image"
                            src={mathblaster}
                            alt="Mathblaster: Homeworld Bound"
                        />
                    </Carousel.Item>
                </Carousel>
            </Row>
            <Row className="justify-content-md-center">
                <Col sm={12} md={6} lg={3}>
                    <Card border="secondary" style={{ width: '19rem' }}>
                        <Card.Img variant="top" src= { selenestill } />
                        <Card.Body>
                            <Card.Title>Selene</Card.Title>
                            <Card.Text>
                                <p>An e-commerce application focused on user experience and inventory management. <br /><br />
                                Stack: Python, Django, PostgreSQL, Heroku</p>
                            </Card.Text>
                            <Button variant="outline-secondary" href="https://seleneshop.herokuapp.com/" target="_blank">Go to Site</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col  sm={12} md={6} lg={3}>
                <Card border="secondary" style={{ width: '19rem' }}>
                        <Card.Img variant="top" src= { nipponrunnerstill } />
                        <Card.Body>
                            <Card.Title>Nippon Runner</Card.Title>
                            <Card.Text>
                            <p>An online language learning application designed to help users learn hiragana, the Japanese alphabet. <br /><br />
                            Stack: React, Express, MongoDB, Node.js, Heroku, Atlas</p>
                            </Card.Text>
                            <Button variant="outline-secondary" href="https://nipponrunner.herokuapp.com/" target="_blank">Go to Site</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={3}>
                <Card border="secondary" style={{ width: '19rem' }}>
                        <Card.Img variant="top" src= { binmediares } />
                        <Card.Body>
                            <Card.Title>Bin Media Res</Card.Title>
                            <Card.Text>
                            <p>An online media category application designed to help organize your favorite podcasts. <br /><br />
                            Stack: Javascript, Express, SQL, Node.js, Heroku</p>
                            </Card.Text>
                            <Button variant="outline-secondary" href="https://bin-media-res.herokuapp.com/" target="_blank">Go to Site</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col  sm={12} md={6} lg={3}>
                <Card border="secondary" style={{ width: '19rem' }}>
                        <Card.Img variant="top" src= { mathblaster } />
                        <Card.Body>
                            <Card.Title>Math Blaster</Card.Title>
                            <Card.Text>
                            <p>A fun and engaging learning application paying homage to the late ‘90s game of the same name. <br /><br />
                            Stack: HTML, CSS, Javascript, GitHub Pages</p>
                            </Card.Text>
                            <Button variant="outline-secondary" href="https://jessica-au.github.io/mathblaster/" target="_blank">Go to Site</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            
        </>
    );
}

export default Projects;
