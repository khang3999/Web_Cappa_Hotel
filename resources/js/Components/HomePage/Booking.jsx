const Booking = (props) => {
    return (
        <div class="booking z-2 bg-md-transparent">
            <div class="container ">
                <div class="row bg-transparent ">
                    <div class="booking-hotel col-lg-6 m-0 px-3">
                        <div class="rating  pb-3">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <h2 class="booking-text w-100 pe-5 mb-3">Each of our guest rooms feature a private bath, wi-fi, cable
                            television and include full breakfast.</h2>
                        <div class="booking-call w-100 mb-4">
                            <i class="fa-solid fa-phone-volume booking-call-icon "></i>
                            <h4 class="booking-about-call m-0"> Reservation <br></br> <a href="tel:+8551004444"
                                class="booking-about-callnumber">855 100 4444</a></h4>
                        </div>
                        <div class="w-100">
                            <i class="fa-solid fa-check check-icon d-inline-block">
                            </i>
                            <p class="check-text d-inline-block text-white">
                                Call us, it's toll-free
                            </p>
                        </div>

                    </div>
                    <div class="col-lg-6 ">
                        <div class="check-now z-2  form-booking">
                            <div class="container">
                                <div class="check-now-text">
                                    <h6 class="check-now-top text-secondary ">ROOMS & SUITS</h6>
                                    <h4 class="check-now-bot mb-3 text-dark mt-2 mb-3">Hotel Booking Now </h4>
                                </div>
                                <div class=" row checkin-box m-0 mt-4 ps-0 pe-0">
                                    <div class="col-8 checkin bg-white">Check in</div>
                                    <a href="#" class="col-4 icon-cal d-flex ">
                                        <i class="fa-solid fa-calendar-days ms-auto my-auto"></i>
                                    </a>

                                </div>
                                <div class="row checkout-box m-0 mt-4 ps-0 pe-0">
                                    <div class="col-8 checkout bg-white">Check out</div>
                                    <a href="#" class="col-4 icon-cal d-flex  ">
                                        <i class="fa-solid fa-calendar-days ms-auto my-auto "></i>
                                    </a>
                                </div>


                                <div class=" row p-0  mt-md-4 m-0 mt-xl-0 ">
                                    <div class="Adult  mt-4 bg-white p-0">
                                        <select class="form-select w-100 h-100 border-0 ">
                                            <option selected>Adult</option>
                                            <option value="1">1 Adult</option>
                                            <option value="2">2 Adults</option>
                                            <option value="3">3 Adults</option>
                                        </select>
                                    </div>
                                    <div class="child mt-4 bg-white p-0">
                                        <select class="form-select w-100 h-100 border-0 ">
                                            <option selected>Children</option>
                                            <option value="1">Child</option>
                                            <option value="2">2 Children</option>
                                            <option value="3">3 Children</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="check-booking mt-4 d-flex">
                                    <a href="#" class="row  mx-auto">CHECK AVAILABILITY</a>
                                </div>
                                <div class="note-booking mt-4 d-flex">
                                    <p class="px-2">One or more fields have an error. Please check and try again.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="book-img p-3">
                <div class="container">
                    <div class="row">
                        <div class="col-6 row ">
                            <div class="col-4">
                                <img src="public/images/1.png" alt="" class="book-img-item img-fluid w-100 "></img>
                            </div>
                            <div class="col-4">
                                <img src="public/images/2.png" alt="" class="book-img-item img-fluid w-100"></img>
                            </div>
                            <div class="col-4">
                                <img src="public/images/3.png" alt="" class="book-img-item img-fluid w-100"></img>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Booking;