import React, { Fragment} from 'react';
import { Container } from 'react-bootstrap';
import Student from '../Student/Student';
import Teachers from '../Teachers/Teachers';

const Gallery = () => {
    return (
        <Fragment>
            <Container>
                <h1 className="title">Gallery</h1>
                <h2 className="subtitle text-center">Our Teacher</h2>
                <Teachers></Teachers>
                <h2 className="subtitle text-center mt-5">Our Students</h2>
                <Student></Student>
            </Container>
        </Fragment>
    )
}

export default Gallery;
