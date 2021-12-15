import React, {Fragment} from 'react';
import Navigation from "../components/Navigation/Navigation";
import TopBanner from "../components/TopBanner/TopBanner";
import SchoolCard from '../components/SchoolCard/SchoolCard';
import Footer from '../components/Footer/Footer';
import Charts from '../components/Charts/Charts';
import Partner from '../components/Partner/Partner';

export default function HomePage() {
    return (
        <Fragment>
            <Navigation></Navigation>
            <TopBanner></TopBanner>
            <SchoolCard></SchoolCard>
            <Charts></Charts>
            <Partner></Partner>
            <Footer></Footer>
        </Fragment>
    )
}