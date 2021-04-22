import React from 'react';
import { Carousel, Container, Col, Row} from 'react-bootstrap';

import mathblaster from "./static/images/mathblaster.png";
import selene from "./static/images/selene.gif";
import nipponrunner from "./static/images/nipponrunner.png";
import binmediares from "./static/images/binmediares.png";

const Projects = () => {

    return (
        <>
            <Row sm={2} className="justify-content-md-center" >
            <Carousel fade nextLabel=" " prevLabel=" " >
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image"
                        src={selene}
                        alt="Selene"
                    />
                    <Carousel.Caption>
                        <h3>Selene</h3>
                        <p>An e-commerce application focused on user experience and inventory management. <br/>
Stack: Python, Django, PostgreSQL, Heroku</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image"
                        src={nipponrunner}
                        alt="Homeworld Bound"
                    />

                    <Carousel.Caption>
                        <h3>NipponRunner</h3>
                        <p>An online language learning application designed to help users learn hiragana, the Japanese alphabet. <br/>
Stack: React, Express, MongoDB, Node.js, Heroku, Atlas</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image"
                        src={ binmediares }
                        alt="Bin Media Res"
                    />

                    <Carousel.Caption>
                        <h3>Bin Media Res</h3>
                        <p>An online media category application designed to help organize your
favorite podcasts. <br/>
Stack: Javascript, Express, SQL, Node.js, Heroku</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image"
                        src={ mathblaster }
                        alt="Mathblaster: Homeworld Bound"
                    />

                    <Carousel.Caption>
                        <h3>Mathblaster: Homeworld Bound</h3>
                        <p>A fun and engaging learning application paying homage to the late ‘90s
game of the same name. <br/>
Stack: HTML, CSS, Javascript, GitHub Pages</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    </Row>
        </>
    );
}

export default Projects;
