import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const App = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: "smooth" });
    };

    const buttonHoverStyle = {
        backgroundColor: "lightgreen",
        borderColor: "#007bff",
        border: "none",
        padding: "10px",
        display: "block",
        width: "max-width",
        margin: "auto",
        color: "white",
    };

    return (
        <Container fluid>
            <Row
                id="homePage"
                className="justify-content-center align-items-center 
                            bg-primary text-white"
                style={{ minHeight: "99vh", textAlign: "center" }}>
                <Col>
                    <h1 className="text-success">GeeksforGeeks</h1>
                    <p>A computer science portal</p>
                    <Button
                        variant="primary"
                        className="mt-4"
                        style={buttonHoverStyle}
                        onClick={() => scrollToSection("section1")}
                    >
                        Section 1
                    </Button>
                </Col>
            </Row>
            <Row
                id="section1"
                className="justify-content-center align-items-center"
                style={{ minHeight: "100vh", backgroundColor: "gray", textAlign: "center", padding: "10px" }}>
                <Col>
                    <h2>Section One</h2>
                    <p>
                        JavaScript is a lightweight, cross-platform, single-threaded, and
                        interpreted compiled programming language. It is also known as the
                        scripting language for webpages. It is well-known for the
                        development of web pages, and many non-browser environments
                        also use it.
                    </p>
                    <Button
                        variant="primary"
                        className="mt-4"
                        style={buttonHoverStyle}
                        onClick={() => scrollToSection("section2")}
                    >
                        Scroll to Section 2
                    </Button>
                </Col>
            </Row>
            <Row
                id="section2"
                className="justify-content-center align-items-center"
                style={{ minHeight: "100vh", backgroundColor: "pink", textAlign: "center", padding: "10px" }}>
                <Col>
                    <h2>Section Two</h2>
                    <p>
                        ReactJS is a declarative, efficient, and flexible JavaScript
                        library for building user interfaces. It is an open-source,
                        component-based front-end library that is responsible
                        only for the view layer of the application.
                    </p>
                    <Button
                        variant="primary"
                        className="mt-4"
                        style={buttonHoverStyle}
                        onClick={() => scrollToSection("homePage")}
                    >
                        Scroll to Home
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default App;
