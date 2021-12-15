/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState, useEffect } from 'react';
import {Container} from 'react-bootstrap';

export default function TopBanner() {
    const bannerData = 
        {  
            id: 1,
            mainTitle: "Welcome to ABC School",
            mainDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima libero quos nihil voluptatum vero sit quidem saepe numquam corporis deleniti fugit, nesciunt deserunt blanditiis ad tempora velit excepturi laudantium? Iusto in, corporis quidem voluptatem ad ratione saepe! Veniam qui accusantium doloremque vel cupiditate? Totam placeat facilis et doloremque quidem quasi nemo corporis? Adipisci commodi natus nulla eaque vel dolorum sequi et doloremque doloribus fugit, quibusdam velit ipsum magnam quasi perspiciatis suscipit laudantium veritatis, sapiente exercitationem expedita ratione rerum! Qui, debitis facilis. Aliquid officiis incidunt quas quos eaque tempora illo voluptatum ipsa recusandae nam! Consectetur, eveniet enim iste soluta adipisci est!",
            mainButtonTitle: "About Us",
            mainButtonUrl: "/about"
        };

    const [state, setstate] = useState([]);

    useEffect(() => {
      setInterval(()=>{
        setstate(bannerData)
      }, 3000)
    })


    return (
        <Fragment>
            <div className="banner">
                <Container> 
                    <div>
                        <h1>{state.mainTitle}</h1>
                        <p>{state.mainDetails}</p>
                        <a href={state.mainButtonUrl} className="btn btn-success">{state.mainButtonTitle}</a>
                    </div>
                </Container>
            </div>
        </Fragment>
    )
}
