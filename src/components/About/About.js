import React, { Fragment, useState,useEffect } from 'react';
import {Container, Row, Col } from 'react-bootstrap';


export default function About() {
    const aboutData = [
        {
            title: "About our School",
            details: "Shaheed police Smrity College is one of the most prominent and renowned College of Dhaka. It is situated in police complex at Mirpur the midst of a serene and peaceful environment. The aristocratic history, gigantic green campus along with the dedicated teaching staffs makes this institution highly desirable to students and parents and an institute to be proud of. Currently, there are approximately 8000 students studying under 200 dedicated. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
    ];

    const [title, setTitle] = useState([]);

    const getAboutData=()=>{
        setTitle(aboutData)
    };


    useEffect(()=>{
        getAboutData();
    })

    const view = title.map(result=>{
        return <div>
        <h1 className="title">{result.title}</h1>
        <p className="details">{result.details}</p>
    </div>
    })
        

    return (
        <Fragment>
            <Container>
                <Row>
                    <Col lg={12}>
                        {view}
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
