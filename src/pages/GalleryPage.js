import React, { Fragment } from 'react';
import Navigation from '../components/Navigation/Navigation';
import CommonBanner from '../components/CommonBanner/CommonBanner';
import Gallery from '../components/Gallery/Gallery';
import Partner from '../components/Partner/Partner';
import Footer from '../components/Footer/Footer';

export default function GalleryPage() {
    return (
        <Fragment>
            <Navigation></Navigation>
            <CommonBanner></CommonBanner>
            <Gallery></Gallery>
            <Partner></Partner>
            <Footer></Footer>
        </Fragment>
    )
}
