const Booking = (props) => {
    return (
        <div className="booking z-2 bg-md-transparent">
            <div className="container ">
                <div className="row bg-transparent ">
                    <div className="booking-hotel col-lg-6 m-0 px-3">
                        <div className="rating  pb-3">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <h2 className="booking-text w-100 pe-5 mb-3">Each of our guest rooms feature a private bath, wi-fi, cable
                            television and include full breakfast.</h2>
                        <div className="booking-call w-100 mb-4">
                            <i className="fa-solid fa-phone-volume booking-call-icon "></i>
                            <h4 className="booking-about-call m-0"> Reservation <br></br> <a href="tel:+8551004444"
                                className="booking-about-callnumber">855 100 4444</a></h4>
                        </div>
                        <div className="w-100">
                            <i className="fa-solid fa-check check-icon d-inline-block">
                            </i>
                            <p className="check-text d-inline-block text-white">
                                Call us, it's toll-free
                            </p>
                        </div>

                    </div>
                    <div className="col-lg-6 ">
                        <div className="check-now z-2  form-booking">
                            <div className="container">
                                <div className="check-now-text">
                                    <h6 className="check-now-top text-secondary ">ROOMS & SUITS</h6>
                                    <h4 className="check-now-bot mb-3 text-dark mt-2 mb-3">Hotel Booking Now </h4>
                                </div>
                                <div className=" row checkin-box m-0 mt-4 ps-0 pe-0">
                                    <div className="col-8 checkin bg-white">Check in</div>
                                    <a href="#" className="col-4 icon-cal d-flex ">
                                        <i className="fa-solid fa-calendar-days ms-auto my-auto"></i>
                                    </a>

                                </div>
                                <div className="row checkout-box m-0 mt-4 ps-0 pe-0">
                                    <div className="col-8 checkout bg-white">Check out</div>
                                    <a href="#" className="col-4 icon-cal d-flex  ">
                                        <i className="fa-solid fa-calendar-days ms-auto my-auto "></i>
                                    </a>
                                </div>


                                <div className=" row p-0  mt-md-4 m-0 mt-xl-0 ">
                                    <div className="Adult  mt-4 bg-white p-0">
                                        <select className="form-select w-100 h-100 border-0 ">
                                            <option defaultValue="selected" value="0">Adult</option>
                                            <option value="1">1 Adult</option>
                                            <option value="2">2 Adults</option>
                                            <option value="3">3 Adults</option>
                                        </select>
                                    </div>
                                    <div className="child mt-4 bg-white p-0">
                                        <select className="form-select w-100 h-100 border-0 ">
                                            <option defaultValue="selected" value="0">Children</option>
                                            <option value="1">Child</option>
                                            <option value="2">2 Children</option>
                                            <option value="3">3 Children</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="check-booking mt-4 d-flex">
                                    <a href="#" className="row  mx-auto">CHECK AVAILABILITY</a>
                                </div>
                                <div className="note-booking mt-4 d-flex">
                                    <p className="px-2">One or more fields have an error. Please check and try again.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="book-img p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-6 row ">
                            <div className="col-4">
                                <img src="/images/1.png" alt="" className="book-img-item img-fluid w-100 "></img>
                            </div>
                            <div className="col-4">
                                <img src="/images/2.png" alt="" className="book-img-item img-fluid w-100"></img>
                            </div>
                            <div className="col-4">
                                <img src="/images/3.png" alt="" className="book-img-item img-fluid w-100"></img>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Booking;