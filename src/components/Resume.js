import React from 'react';
import { Row, Col} from 'react-bootstrap';
import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';

import resume from './static/pdfs/aujessicaresume.pdf';
import download from './static/images/download.svg';

function Resume() {

    return (
        <>
        <h1 class="titles">Resume</h1>
            <Row sm={2} className="justify-content-md-center">
                <Col className="ResumeCol">
                
                <a href={resume} download target="_blank" rel="noreferrer">
                <img className="icons" src={download} alt="Bootstrap" width="32" height="32" />
                </a>
                    <Document file={resume} className="Resume">
                        <Page pageNumber={1} />
                    </Document>
                </Col>
            </Row>
        </>
    );
}

export default Resume;