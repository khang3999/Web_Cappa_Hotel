import Footer from "@/Components/Commons/Footer";
import About from "@/Components/HomePage/About";
import Banner from "@/Components/HomePage/Banner";
import Blog from "@/Components/HomePage/Blog";
import Booking from "@/Components/HomePage/Booking";
import ExtraService from "@/Components/HomePage/ExtraService";
import Facilities from "@/Components/HomePage/Facilities";
import Promotion from "@/Components/HomePage/Promotion";
import RoomAndSuite from "@/Components/HomePage/RoomAndSuite";
import Testimonial from "@/Components/HomePage/Testimonial";
import Utility from "@/Components/HomePage/Utility";
import Loader from "@/Components/Loader";
import { Head } from "@inertiajs/react";
import React, { useState, useEffect } from 'react';

const Home = () => {
    const pageName = "home"
    const [isLoading, setIsLoading] = React.useState(true)

    useEffect(() => {
        // Simulate a loading process
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);
    
    return (
        <div>
            {isLoading ? (<Loader />) : (
                <>
                    <Head title="Cappa Luxury Hotel" />
                    <div className="img-base z-n1 fixed-top ">
                        <img src="/images/banner-home-1.jpg" alt="" className="w-100 img-fluid" />
                    </div>
                    <Banner pageName={pageName}></Banner>

                    <About></About>

                    <RoomAndSuite></RoomAndSuite>

                    <ExtraService></ExtraService>

                    <Promotion></Promotion>

                    <Facilities></Facilities>

                    {/* <CheckRoom></CheckRoom> */}

                    <Testimonial></Testimonial>

                    <Utility></Utility>

                    <Blog></Blog>

                    <Booking></Booking>

                    <Footer></Footer>
                </>
            )}
        </div>
    )
}

export default Home;