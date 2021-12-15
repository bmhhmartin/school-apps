import React, {Fragment} from 'react';
import Navigation from "../components/Navigation/Navigation";
import CommonBanner from '../components/CommonBanner/CommonBanner';
import About from "../components/About/About";
import History from "../components/History/History";
import Footer from "../components/Footer/Footer";
import Partner from '../components/Partner/Partner';
import AllThings from '../components/AllThings/AllThings';

export default function AboutPage() {
    return (
        <Fragment>
            <Navigation></Navigation>
            <CommonBanner></CommonBanner>
            <AllThings></AllThings>
            <About></About>
            <History></History>
            <Partner></Partner>
            <Footer></Footer>
        </Fragment>
    )
}