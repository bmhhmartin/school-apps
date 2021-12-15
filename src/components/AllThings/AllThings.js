import axios from 'axios';
import React, { Fragment, useState, useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'

const AllThings = () => {

    const [info, setInfo] = useState();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(response=>{
            setInfo(response.data)
        })
    }, []);

    console.log(info);


    return (
        <Fragment>
            <Container>
                <h1 className="title">All Information</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                        </tr>
                    </tbody>
                    </Table>
            </Container>
            
        </Fragment>
    )
}

export default AllThings
