import React, { Fragment, useState, useEffect } from 'react';
import { Container, Table, Row, Col, Form, Button } from 'react-bootstrap';

const StudentList = () => {


    const [student, setStudent] = useState([
        { id: '1', name: 'Rahim' },
        { id: '2', name: 'Karim' },
        { id: '3', name: 'Alex' },
        { id: '4', name: 'John' },
        { id: '5', name: 'Rubiz' }
    ])
    

    const nameAdd=(e)=>{
        setStudent(e.target.value);
    }

    const dataPush = () => {
        let arr = student.concat(nameAdd)
        setStudent(arr);
    }

    useEffect(() => {}, [])
    return ( 
        <Fragment>
            <h1 className="title">Add Student</h1>
            <Container>
                <Row>
                    <Col lg={6} md={6}>
                        <Form className="gray_form">
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                            <Form.Control type="text"/>
                            </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Student ID</Form.Label>
                                    <Form.Control type="number"/>
                            </Form.Group>
                            <Button variant="primary" onClick={dataPush}>Submit</Button>
                        </Form>
                    </Col>
                    <Col lg={6} md={6}>
                        {/* <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Student Name</th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                student.map(result=>{
                                     <tr key={result.id}>
                                                <td>{result.name}</td>
                                            </tr>
                                })
                                }
                        </tbody>
                        </Table> */}
                        <h3 className="subtitle">All Student</h3>
                        <ul>
                            {
                                student.map(result=>(
                                    <li key={result.id}>{result.name}</li>
                                ))
                            }
                            <li></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default StudentList