import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

const Skills = () => {
    return (
        <>
            <h1 class="titles">Skills</h1>
            <Col fluid>
                <Row className="skillRow">
                    <Container className="skillContainer">
                        <h2>Languages</h2>
                        <p>
                        JavaScript, Python, HTML, CSS
                        </p>
                    </Container>
                </Row>
                <Row className="skillRow">
                    <Container className="skillContainer">
                        <h2>Frameworks</h2>
                        <p>
                        React.js, Express, Node.js, Django, Bootstrap
                        </p>
                    </Container>
                </Row>
                <Row className="skillRow">
                    <Container className="skillContainer">
                        <h2>Databases</h2>
                        <p>
                        Sequelize.js, PostGreSQL, SQL, MongoDB
                        </p>
                    </Container>
                </Row>
                <Row className="skillRow">
                    <Container className="skillContainer">
                        <h2>Other</h2>
                        <p>
                        Git, Github, Heroku, Selenium, Atlas
                        </p>
                    </Container>
                </Row>
            </Col>
        </>
    );
}

export default Skills;
