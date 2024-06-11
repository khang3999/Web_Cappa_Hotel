import Banner from "@/Components/ContactPage/Banner";
import "../../../css/contact.css"
import { Head } from "@inertiajs/react";
import Introduction from "@/Components/ContactPage/Introduction";
import ContactForm from "@/Components/ContactPage/ContactForm";
import Map from "@/Components/ContactPage/Map";
import Loader from "@/Components/Loader";
import React, { useState, useEffect } from 'react';
const Contact = () => {
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
                <div className="img-base z-n1 fixed-top">
                    <img src="/images/contact-slide-1.jpg" alt="" className="w-100 img-fluid" />
                </div>
                <Banner></Banner>
                <Introduction></Introduction>
                <ContactForm></ContactForm>
                <Map></Map>

            </>
              )}
        </div>
    )
}
export default Contact;