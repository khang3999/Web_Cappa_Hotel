import Banner from "@/Components/RestaurantPage/Banner";
import Introduction from "@/Components/RestaurantPage/Introduction";
import Menu from "@/Components/RestaurantPage/Menu";
import Testimonial from "@/Components/RestaurantPage/Testimonials";
import Loader from "@/Components/Loader";
import React, { useState, useEffect } from 'react';
const restaurant = (props) => {
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
                <Banner></Banner>
                <Introduction></Introduction>
                <Menu></Menu>
                <Testimonial></Testimonial>
                <div className="mt-7"></div>
            </>
             )}
        </div>
    );
}

export default restaurant;