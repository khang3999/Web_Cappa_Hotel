import '../../../css/booking.css'
const Booking = (props) => {
    return (
        <div className="booking z-2 bg-md-transparent">
            <div className="container ">
                <div className="row bg-transparent ">
                    <div className="col-lg-6">
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
                        <form className="check-booking-form z-2 py-5 px-4 ms-5 mb-5">
                            <div className="container">
                                <div className="check-now-text">
                                    <h6 className="check-now-top">ROOMS & SUITS</h6>
                                    <h4 className="check-now-bot mb-3 text-dark mt-2 mb-3 fs-2">Hotel Booking Form </h4>
                                    <div className="line w-100"></div>
                                </div>
                                <div className="mt-4 px-0">
                                    <label htmlFor="input-checkin" className="form-label px-1">Check in</label>
                                    <div className="position-relative">
                                        <input id="input-checkin" type='date' className="checkin bg-white form-control position-relative" placeholder="24-05-2024" />
                    
                                    </div>
                                </div>
                                <div className="mt-4 px-0">
                                    <label htmlFor="input-checkout" className="px-1 form-label">Check out</label>
                                    <div className="position-relative">
                                        <input id="input-checkout" type='date' className="checkout bg-white form-control position-relative" placeholder="24-05-2024" />
    
                                    </div>
                                </div>

                                <div className="row mt-4 px-0">
                                    <div className="col-lg-6">
                                        <label htmlFor="select-adults" className="form-label px-1">Adults</label>
                                    </div>
                                    <div className="col-lg-6">
                                        <label htmlFor="select-children" className="form-label px-1">Children</label>
                                    </div>
                                </div>

                                <div className="row px-0">
                                    <div className="col-lg-6">
                                        <select id='select-adults' className="form-select border-1">
                                            <option value="1" defaultValue="selected">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6">
                                        <select id='select-children' className="form-select border-1">
                                            <option value="1" defaultValue="selected">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <button type='submit' className="btn-check-booking w-100 border-0">CHECK AVAILABILITY</button>
                                </div>
                                {/* <div className="note-booking mt-4 d-flex">
                                    <p className="px-2">One or more fields have an error. Please check and try again.</p>
                                </div> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="book-img p-3 mb-5">
                <div className="container">
                    <div className="row parent">
                        <div className="col-4 ">
                            <div className="box-wrap d-flex justify-content-center">
                                <div class="left-top place">
                                </div>
                                <div class="top place">
                                </div>
                                <div class="right-top place">
                                </div>
                                <div class="left place">
                                </div>
                                <div class="right place">
                                </div>
                                <div class="left-bottom place">
                                </div>
                                <div class="bottom place">
                                </div>
                                <div class="right-bottom place">
                                </div>
                                <div className="div img-wrap">
                                    <img src="/images/1.png " alt="" className="book-img-item img-fluid"></img>
                                </div>
                            </div>
                        </div>

                        <div className="col-4 ">
                            <div className="box-wrap d-flex justify-content-center">
                                <div class="left-top place">
                                </div>
                                <div class="top place">
                                </div>
                                <div class="right-top place">
                                </div>
                                <div class="left place">
                                </div>
                                <div class="right place">
                                </div>
                                <div class="left-bottom place">
                                </div>
                                <div class="bottom place">
                                </div>
                                <div class="right-bottom place">
                                </div>
                                <div className="div img-wrap">
                                    <img src="/images/2.png " alt="" className="book-img-item img-fluid"></img>
                                </div>
                            </div>
                        </div>

                        <div className="col-4 ">
                            <div className="box-wrap d-flex justify-content-center">
                                <div class="left-top place">
                                </div>
                                <div class="top place">
                                </div>
                                <div class="right-top place">
                                </div>
                                <div class="left place">
                                </div>
                                <div class="right place">
                                </div>
                                <div class="left-bottom place">
                                </div>
                                <div class="bottom place">
                                </div>
                                <div class="right-bottom place">
                                </div>
                                <div className="div img-wrap">
                                    <img src="/images/3.png " alt="" className="book-img-item img-fluid"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Booking;