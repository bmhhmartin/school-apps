import React, {useState} from 'react';
import {Routes,Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import NoticePage from "../pages/NoticePage";
import GalleryPage from "../pages/GalleryPage";
import AdmissionPage from '../pages/AdmissionPage';
import EventPage from '../pages/EventPage';
import PostPage from '../pages/PostPage';
import ContextAPI from '../context/ContextAPI';


export default function AppRoute() {

    const [state, setstate] = useState(
        {user: "Mr Rahim", role: "admin"}
    );


    console.log(state);


    return (
        <ContextAPI.Provider value={{state}}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/event" element={<EventPage />} />
                <Route path="/notice" element={<NoticePage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/admission" element={<AdmissionPage />} />
                <Route path="/post" element={<PostPage />} />
            </Routes>
        </ContextAPI.Provider>
    )
}