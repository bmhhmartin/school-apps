import React, { Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { MdBookmarkAdded,MdDataExploration,MdHotelClass,MdVerified } from "react-icons/md";

export default function SchoolCard() {

    const schoolData = [
        {
            icon: <MdBookmarkAdded/>,
            title: "Total Teacher",
            subtitle: 150,
            details: "Moreover, you will get highly trained and well-mannered staffs always ready to ensure necessary demands of you and your parents."
        },
        {
            icon: <MdDataExploration/>,
            title: "Total Students",
            subtitle: 7689,
            details: "Its campus will provide you a green, neat and clean environment along with a large playground where you can take fresh breath. Being guided by the experienced sports teachers, you can avail of the opportunity of playing various outdoor games and sports."
        },
        {
            icon: <MdHotelClass/>,
            title: "Total Achievement",
            subtitle: 40,
            details: "In addition, students can engage themselves in multiple socio-cultural clubs, debating and science clubs for their co-curricular activities. Again, this institution provides library and laboratory facility for enhancement of both bookish and practical knowledge."
        },
        {
            icon: <MdVerified/>,
            title: "Total Schollarship",
            subtitle: 134,
            details: "This institution aims at developing a student up to the limit by taking utmost care of their personal issues and addressing their psychological obstacles for their usual mental growth. It provides all amenities and tools for ensuring education both in modern and digital way to fulfill the goals of vision 2021-making the students educated in the fullest sense."
        },
        {
            icon: <MdVerified/>,
            title: "Last Year A+",
            subtitle: 567,
            details: "This institution aims at developing a student up to the limit by taking utmost care of their personal issues and addressing their psychological obstacles for their usual mental growth. It provides all amenities and tools for ensuring education both in modern and digital way to fulfill the goals of vision 2021-making the students educated in the fullest sense."
        }
    ]


    return (
        <Fragment>
            <Container>
                <h1 className="title">School Card</h1>
                <Row>
                    {
                        schoolData.slice(0,4).map(result=>{
                            return <Col lg={3} md={6}>
                            <Card className="text-center">
                                <Card.Body>
                                    <div className="icon">{result.icon}</div>
                                    <Card.Title className="subtitle pb-0">{result.title}</Card.Title>
                                    <Card.Text className="title p-0">{result.subtitle}</Card.Text>
                                    <div className="details">{result.details.substr(0, 80)}...</div>
                                </Card.Body>
                            </Card>
                        </Col>
                        })
                    }
                </Row>
            </Container>
        </Fragment>
    )
}
