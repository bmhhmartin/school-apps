import React, { Fragment, useContext } from 'react';
import { Container } from 'react-bootstrap';
import { FaAffiliatetheme,FaBitbucket,FaGooglePlay,FaAppleAlt,FaFileImport } from "react-icons/fa";
import ContextAPI from '../../context/ContextAPI';

export default function Events() {
    const eventData = [
        {
            startDate: "01-01-2022",
            endDate: "02-02-2022",
            icon: <FaAffiliatetheme/>,
            eventName: "Annual Festival",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima libero quos nihil voluoremque quidem quasi nemo corporis? Adipisci commodi natus nulla eaque vel dolorum sequi et doloremque"
        },
        {
            startDate: "05-06-2022",
            endDate: "12-07-2022",
            icon: <FaBitbucket/>,
            eventName: "Science Fair",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima libero quos nihil voluptatum vero sit quidem saepe numquam corporis deleniti fugit, nesciunt oremque quidem quasi nemo corporis? Adipisci commodi natus nulla eaque vel dolorum sequi et doloremque"
        },
        {
            startDate: "05-06-2022",
            endDate: "12-07-2022",
            icon: <FaFileImport/>,
            eventName: "Book Fair",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima libero quos nihil voluptatum vero sit quidem saepe numquam corporis deleniti fugit, nesciunt oremque quidem quasi nemo corporis? Adipisci commodi natus nulla eaque vel dolorum sequi et doloremque"
        },
        {
            startDate: "05-06-2022",
            endDate: "12-07-2022",
            icon: <FaGooglePlay/>,
            eventName: "Sports Event",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima libero quos nihil voluptatum vero sit quidem saepe numquam corporis deleniti fugit, nesciunt oremque quidem quasi nemo corporis? Adipisci commodi natus nulla eaque vel dolorum sequi et doloremque"
        },
        {
            startDate: "05-06-2022",
            endDate: "12-07-2022",
            icon: <FaAppleAlt/>,
            eventName: "Winter Event",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima libero quos nihil voluptatum vero sit quidem saepe numquam corporis deleniti fugit, nesciunt oremque quidem quasi nemo corporis? Adipisci commodi natus nulla eaque vel dolorum sequi et doloremque"
        }
    ];

    const {data} = useContext(ContextAPI);

    
    const View = eventData.map(result=>{
        return <div className="timeline">
                    <div className="timeline-content">
                        <div className="timeline-icon">
                            {result.icon}
                        </div>
                        <div className="timeline-year">
                            <div className="year-details">
                                <h4>{result.startDate}</h4>
                                <h5>To</h5>
                                <h6>{result.endDate}</h6>
                            </div>
                        </div>
                        <h3 className="timelineTitle">{result.eventName}</h3>
                        <p className="timelineDescription">
                            {result.details}
                        </p>
                    </div>
                </div>
    })



    return (
        <Fragment>
            <Container>
                <h2 className="title">Upcoming Events</h2>
                <h2 className="subtitle">User: {data.user}, Role: {data.role}</h2>
                <div className="main-timeline">
                    {View}
                 </div>
            </Container>
        </Fragment>
    )
}
