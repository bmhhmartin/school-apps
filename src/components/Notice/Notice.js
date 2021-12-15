import React, { Fragment } from 'react';
import {Container, Card} from 'react-bootstrap';
import { FaAtlassian, FaAws,FaDelicious, FaJoomla } from "react-icons/fa";
import { GiAbstract031, GiAmethyst,GiArrowsShield, GiCarpetBombing } from "react-icons/gi";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

export default function Notice() {
    const noticeData=[
        {
            icon: <div className="icon"><FaAtlassian/></div>,
            title: "Annual Tour 2022", 
            description: "Why study at SPSC: Shaheed Police Smrity College, a centre of excellence in education, can be"
        },
        {
            icon: <div className="icon"><FaAws/></div>,
            title: "Online Addmision", 
            description: "As a student of Shaheed Police Smrity College, you can find all highly qualified teachers with an unequivocal part of your academic career. A part from quality education, the institution aims at developing morality and flourishing other necessary humane virtues."
        },
        {
            icon: <div className="icon"><FaDelicious/></div>,
            title: "Study Tour 2022", 
            description: "As a student of Shaheed Police Smrity College, you can find all highly qualified teachers with highest academic achievements caring you with immaculate love and affection."
        },
        {
            icon: <div className="icon"><FaJoomla/></div>,
            title: "Class Party", 
            description: "This college is governed by Police Headquarters which allows you pursuing academic excellence in a safe, secured and sound environment."
        },
        {
            icon: <div className="icon"><GiAbstract031/></div>,
            title: "Winter Event", 
            description: "This college is governed by Police Headquarters which allows you pursuing academic excellence in a safe, secured and sound environment."
        },
        {
            icon: <div className="icon"><GiAmethyst/></div>,
            title: "Annual Picnic 2022", 
            description: "This college is governed by Police Headquarters which allows you pursuing academic excellence in a safe, secured This college is governed by Police Headquarters which allows you pursuing academic excellence in a safe, secured This college is governed by Police Headquarters which allows you pursuing academic excellence in a safe, secured and sound environment."
        },
        {
            icon: <div className="icon"><GiArrowsShield/></div>,
            title: "Annual Tour 2022", 
            description: "This college is governed by Police Headquarters which allows you pursuing academic"
        },
        {
            icon: <div className="icon"><GiCarpetBombing/></div>,
            title: "Summer Vacation", 
            description: "This college is governed by Police Headquarters which allows you pursuing academic"
        }
    ];
    
    const noticeView = noticeData.map(result=>{
        return <Card>
                    {result.icon}
                    <Card.Body>
                        <Card.Title className="subtitle text-center p-0">{result.title}</Card.Title>
                        <Card.Text className="details text-center">
                        {result.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
    })


    return (
        <Fragment>
            <Container>
                <h1 className="title">Notice Board</h1>
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                    <Masonry gutter={"15px"}>
                        {noticeView}
                    </Masonry>
                </ResponsiveMasonry>
            </Container>
        </Fragment>
    )
}
