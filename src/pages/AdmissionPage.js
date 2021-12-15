import React from 'react'
import CommonBanner from '../components/CommonBanner/CommonBanner'
import Footer from '../components/Footer/Footer'
import Navigation from '../components/Navigation/Navigation'
import OnlineAdmission from '../components/OnlineAdmission/OnlineAdmission'
import Partner from '../components/Partner/Partner'
import StudentList from '../components/StudentList/StudentList'

export default function AdmissionPage() {
    return (
        <div>
            <Navigation></Navigation>
            <CommonBanner></CommonBanner>
            <OnlineAdmission></OnlineAdmission>
            <StudentList></StudentList>
            <Partner></Partner>
            <Footer></Footer>
        </div>
    )
}
