import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';

import resume from './static/pdfs/aujessicaresume.pdf';

function Resume() {

    return (
        <>
        <h1 class="titles">Resume</h1>
            <Row sm={2} className="justify-content-md-center">
                <Col className="ResumeCol">
                    <Document file={resume} className="Resume">
                        <Page pageNumber={1} />
                    </Document>
                </Col>
            </Row>
        </>
    );
}

export default Resume;