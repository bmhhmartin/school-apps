import React, { Fragment } from 'react';
import { Container, Col, Row, ListGroup } from 'react-bootstrap';
import history from '../../assets/images/history.jpg';
import { FaDiaspora, FaConfluence, FaEdge, FaMizuni } from "react-icons/fa";

export default function History() {
    const historyData = [
        {   variant: "primary",
            icon: <div className="text-center"><FaDiaspora/></div>,
            list: "Shaheed police Smrity College is one of the most prominent a"
        },
        {   variant: "secondary",
            icon: <div className="text-center"><FaConfluence/></div>,
            list: "asdfasdfaefasdfasdf asf asdf asf asdf afnt a"
        },
        {   variant: "warning",
            icon: <div className="text-center"><FaEdge/></div>,
            list: "taffs makes this institution highly desirable to students and p"
        },
        {   variant: "danger",
            icon: <div className="text-center"><FaMizuni/></div>,
            list: "Being such a behemoth and idyllic institution, Shaheed police Smrity College felt the requirement to be integrated with the current era of information technology. Today the major means of communication of an organization depends upon the use of media technology and related gadgets."
        }
    ];


    const historyView = historyData.map(result=>{
        return <ListGroup.Item action variant={result.variant}>
        {result.icon}{result.list}
    </ListGroup.Item>
    });
    return (
        <Fragment>
            <Container>
                <Row>
                    <h2 className="title">School History</h2>
                    <Col lg={6} md={6}>
                        <div className="history_image">
                            <img src={history} className="img-fluid" alt="" />
                        </div>
                    </Col>
                    <Col lg={6} md={6}>
                        <ListGroup>{historyView}</ListGroup>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
