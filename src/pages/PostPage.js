import React, {Fragment} from 'react';
import Navigation from "../components/Navigation/Navigation";
import CommonBanner from '../components/CommonBanner/CommonBanner';
import Posts from '../components/Posts/Posts';
import Partner from '../components/Partner/Partner';
import Footer from '../components/Footer/Footer';

const PostPage = () => {
    return (
        <Fragment>
            <Navigation></Navigation>
            <CommonBanner></CommonBanner>
            <Posts></Posts>
            <Partner></Partner>
            <Footer></Footer>
        </Fragment>
    )
}

export default PostPage;
