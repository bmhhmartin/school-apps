import axios from 'axios';
import React, { Fragment, useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";



const Posts = () => {

    const[post, setPost] = useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/photos").then(response=>{
            setPost(response.data);
        }).catch(error=>{
            setPost(error)
        })
    });

    return (
        <Fragment>
            <Container>
                <h1 className="title">All posts</h1>
                <ResponsiveMasonry columnsCountBreakPoints={{350: 2, 750: 4, 900: 6}}>
                    <Masonry gutter={"15px"}>
                        {
                            post.slice(0, 20).map(result=>{
                                return <Card>
                                            <Card.Img variant="top" src={result.url} />
                                            <Card.Body>
                                                <Card.Title className="subtitle text-center p-0">{result.title}</Card.Title>
                                                <Card.Text className="details text-center">
                                                    {result.body}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                            })
                        }
                    </Masonry>
                </ResponsiveMasonry>
            </Container>
        </Fragment>
    )
}

export default Posts
