import React, { Fragment } from 'react';
import {Container} from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function Partner() {

    const partnerData = [
        {
            image: "https://www.bangladeshyp.com/img/bd/e/1616235475-51-creative-it-institute.png",
            name: "Creative IT Institute",
            details: "Lorem ips deleniti fugit, nesciunt deserunt blanditiis ad tempora velit excepturi laudantium? Iusto in, corporis quidem voluptatem ad ratione saepe!"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7YgWW41emK_wEuAWk6YxwaPJrdqvL6ai_GyifjJt4VG3CoxX3IAnSBD2iRhLgx_M7pjk&usqp=CAU",
            name: "ABC School",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima libero quos nihil voluptatum"
        },
        {
            image: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2013/06/03.png?auto=format&q=60&fit=max&w=930",
            name: "XYZ Program",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima libero quos nihil voluptatum verofugit, nesciunt deserunt blanditiis ad tempora velit excepturi laudantium? Iusto in, corporis quidem voluptatem ad ratione saepe!"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU",
            name: "The Scholastica School",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima libero quos nihil voluptatum vero sit quidem saepe "
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRepdpNS6rtWXImlfV5Zb5-6L_VoYU3pGi6DA&usqp=CAU",
            name: "CXS Group",
            details: "Lorem ipsuit, nesciunt deserunt blanditiis ad tempora velit excepturi laudantium? Iusto in, corporis quidem voluptatem ad ratione saepe!"
        }
    ]


    var settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    var View = partnerData.map(result=>{
        return <div class="partnerSection">
                <div className="picture">
                    <img src={result.image} class="img-fluid" alt="partner logo"/>
                </div>
                <h3 className="subtitle">{result.name}</h3>
                <p className="details text-center">{result.details.substr(0, 100)}...</p>
            </div>
    })

    return (
        <Fragment>
            <Container>
                <h2 className="title">Our Partner</h2>
                <Slider {...settings}>
                    {View}    
                </Slider>
            </Container>
        </Fragment>
    )
}
