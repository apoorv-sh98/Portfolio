import "./Resume.css"
import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../images/ApoorvSharma_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Height } from "@mui/icons-material";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const Resume = () => {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
    setWidth(window.innerWidth);
    }, []);

    return (
        <div>
            <Container fluid className="resume-section">
                <Row style={{ justifyContent: "center", position: "relative", paddingTop: "30px" }}>
                    <Button
                    variant="primary"
                    href={pdf}
                    target="_blank"
                    style={{ maxWidth: "250px", backgroundColor: "#B0C4DE", padding: "7px", color: "black", borderRadius: "10px" }}
                    >
                    <AiOutlineDownload />
                    &nbsp;Download CV
                    </Button>
                </Row>

                <Row className="resume">
                    <Document file={pdf} className="resume_window">
                        <Page pageNumber={1} scale={width > 1286 ? 1.7 : 0.6} style={{"maxHeight": "100%"}}/>
                    </Document>
                </Row>

                <Row style={{ justifyContent: "center", position: "relative", paddingTop: "50px" }}>
                    <Button
                    variant="primary"
                    href={pdf}
                    target="_blank"
                    style={{ maxWidth: "250px", backgroundColor: "#B0C4DE", padding: "7px", color: "black", borderRadius: "10px" }}
                    >
                    <AiOutlineDownload />
                    &nbsp;Download CV
                    </Button>
                </Row>  
            </Container>
        </div>
    );
}

export default Resume;