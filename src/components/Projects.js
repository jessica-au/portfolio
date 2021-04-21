import React from 'react';
import { Carousel } from 'react-bootstrap';

import mathblaster from "./../images/mathblaster.png";
import selene from "./../images/selene.gif";

const Projects = () => {

    return (
        <>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image"
                        src={selene}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Selene</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image"
                        src={mathblaster}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>NipponRunner</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image"
                        src={mathblaster}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Bin Media Res</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image"
                        src={mathblaster}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Math Blaster</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default Projects;
