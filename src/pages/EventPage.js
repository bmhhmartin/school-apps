import React from 'react'
import CommonBanner from '../components/CommonBanner/CommonBanner'
import Events from '../components/Events/Events'
import Footer from '../components/Footer/Footer'
import Navigation from '../components/Navigation/Navigation'
import Partner from '../components/Partner/Partner'

const EventPage = () => {
    return (
        <div>
            <Navigation></Navigation>
            <CommonBanner></CommonBanner>
            <Events></Events>
            <Partner></Partner>
            <Footer></Footer>
        </div>
    )
}

export default EventPage
