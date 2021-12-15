import axios from 'axios'
import React, {Fragment, useEffect, useState} from 'react';
import { Card } from 'react-bootstrap';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import Loading from '../Loading/Loading';

const Teachers = () => {

    const [teacher, setTeacher] = useState([]);
    const [loading, setLoading] = useState(true)



    useEffect(() => {
       setTimeout(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(response=>{
            setTeacher(response.data);
            setLoading(false)
        })
       }, 1000)
    }, [])


    if (loading===true) {
        return <Loading></Loading>
    }else{
        return (
            <Fragment>
               <ResponsiveMasonry columnsCountBreakPoints={{350: 2, 750: 4, 900: 4}}>
                        <Masonry gutter={"15px"}>
                            {
                                teacher.map(result=>{
                                    return <Card className="darkCard">
                                                <Card.Body>
                                                    <Card.Title className="subtitle p-0">{result.name}</Card.Title>
                                                    <p className="text-primary p-0 m-0 text-left">Email: {result.email}</p>
                                                    <Card.Text className="details p-0 m-0 text-left ">
                                                        Address: {result.address.street}, {result.address.city}, {result.address.zipcode}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                                
                                })
                            }
                      </Masonry>
                    </ResponsiveMasonry>
            </Fragment>
        )
    }



    
}

export default Teachers
