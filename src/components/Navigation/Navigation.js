import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar, Nav, Row} from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import logo from  "../../assets/images/school.png";

export default function Navigation() {
    return ( 
        <Fragment >
            <Container fluid={true}>
               <Row>
                    <Navbar fixed="top" expand="lg">
                        <Navbar.Brand href="/">
                            <img src={logo} className="img-fluid" alt=""/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav >
                            <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/about">About</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/event">Event</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/gallery">Gallery</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/post">Blog</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/notice">Notice Board</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/admission">Online Admission</NavLink></Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Navbar>
               </Row>
            </Container>
        </Fragment>
    )
}
