import React, {Fragment} from 'react';
import Navigation from "../components/Navigation/Navigation";
import Notice from "../components/Notice/Notice";
import CommonBanner from "../components/CommonBanner/CommonBanner";
import Footer from "../components/Footer/Footer";
import Partner from '../components/Partner/Partner';

export default function NoticePage() {
    return (
        <Fragment>
            <Navigation></Navigation>
            <CommonBanner></CommonBanner>
            <Notice></Notice>
            <Partner></Partner>
            <Footer></Footer>
        </Fragment>
    )
}