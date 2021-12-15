import React, { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from  "../../assets/images/school.png";

export default function Footer() {
    return (
        <Fragment>
            <footer>
                <Container>
                    <Row>
                        <Col lg={4} md={6}>
                            <a href="/">
                                <img src={logo} className="img-fluid pb-3" alt="" />
                            </a>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima libero quos nihil</p>
                        </Col>
                        <Col lg={4} md={6}>
                            <h3 className="footer_title">Address</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima libero quos nihil</p>
                        </Col>
                        <Col lg={4} md={6}>
                            <h3 className="footer_title">All Options</h3>
                            <ul className="all_option">
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/notice">Notice</a></li>
                                <li><a href="/admission">Admission</a></li>
                            </ul>
                        </Col>
                        
                    </Row>
                </Container>
            </footer>
        </Fragment>
    )
}
