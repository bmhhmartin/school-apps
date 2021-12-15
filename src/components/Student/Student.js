import axios from 'axios';
import React, { Fragment, useState, useEffect } from 'react'
import {InputGroup,FormControl, Container, Row, Col} from 'react-bootstrap';
import Loading from '../Loading/Loading';

const Student = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState('#eaeaea');

    const increment=()=>{
        setCount(count + 1);
    }
    const decrement=()=>{
        setCount(count - 1);
    }

    const nameAdd=(e)=>{
        setName(e.target.value);
    }

    const highlight=()=>{
        setColor('#000000');
    }

    const textShow=()=>{
        document.getElementById("mytext").innerHTML = "Scholarship Result 2021";
    }

    const textNormal=()=>{
        document.getElementById("mytext").innerHTML = "Student name given below:";
    }

    useEffect(()=>{
       setTimeout(()=>{
            axios.get('https://jsonplaceholder.typicode.com/users').then(response=>{
                setLoading(false);
                setNews(response.data);
            })
       }, 4000)
        document.title=`Your Name: ${name}`;
        console.log("UseEffect working");
    },[count])
    
    if(loading===true){
        return <Loading></Loading>
    }else{
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div class="separateCard">
                                <h1>Count: {count}</h1>
                                <button className="btn btn-success" onClick={increment}>+</button>
                                <button className="btn btn-danger" onClick={decrement}>-</button>
                            </div>
                            <div class="separateCard">
                                <h2>My Name: {name}</h2>
                                <InputGroup>
                                    <InputGroup.Text >Enter your Name</InputGroup.Text>
                                    <FormControl onChange={nameAdd} placeholder="Your Name" aria-label="Username" aria-describedby="basic-addon1"/>
                                </InputGroup>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="separateCard">
                            <h5 id="mytext" onMouseOver={textShow} onMouseOut={textNormal} className="text-center mb-3">Mouse Over</h5>
                                <div className="d-flex justify-content-between">
                                    <h4 className="subtitle pb-0">Student Names:</h4>
                                    <button className="btn btn-primary" onClick={highlight}>Highlight Text</button>
                                </div>

                                <ul>
                                    {
                                        news.map((result)=>{
                                            return <li key={result.id} className=" pb-1" style={{color: `${color}`}}> Roll: {result.id}, Name: {result.name}</li>
                                        })
                                    }
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
                
            </Fragment>
        )
    }
    

    
}

export default Student
