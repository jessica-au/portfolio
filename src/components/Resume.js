import React from 'react';
import { Row, Col} from 'react-bootstrap';
import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';

import resume from './static/pdfs/aujessicaresume.pdf';

function Resume() {

    return (
        <>
        <h1 class="titles">Resume</h1>
            <Row sm={2} className="justify-content-md-center">
                <Col className="ResumeCol">
                <a href={resume} download>Download a copy here</a>
                    <Document file={resume} className="Resume">
                        <Page pageNumber={1} />
                    </Document>
                </Col>
            </Row>
        </>
    );
}

export default Resume;