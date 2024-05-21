import "../../../css/slidebar.css"
const Slidebar = (props) => {
    return (
        <div className="banner position-relative ">
            <div id="carouselExampleCaptions" className="carousel slide position-relative ">
                <div className="carousel-indicators z-3 d-none d-lg-block">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="dot active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className="dot"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className="dot"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <div className="img-slideshow ">
                            <img src="./images/slide1.jpg" className="d-block w-100 img-slide img-fluid" alt="..."></img>
                        </div>
                        <div className="carousel-caption d-none d-sm-block m-auto z-2">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <h4 className="m-4 text-top ">LUXURY HOTEL AND BEST RESORT</h4>
                            <h1 className="text-bot">ENJOY A LUXURY <br></br> EXPERIENCE</h1>
                            <button className="btn-mid">
                                <span className="btn-mid-text">ROOMS & SUITES</span>
                            </button>
                        </div>
                        <div className="call">
                            <h4 className="call-text">RESERVATION</h4>
                            <a href="tel:+8551004444" className="call-number">855 100 4444</a>
                        </div>
                        <div className="icon-call z-2">
                            <i className="fa-solid fa-phone-volume fa-beat z-2"></i>
                        </div>


                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <div className="img-slideshow">
                            <img src="/images/slide2.jpg" className="d-block w-100 img-slide - img-fluid" alt="..."></img>

                        </div>
                        <div className="carousel-caption d-none d-sm-block m-auto ">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <h4 className="m-4 text-top ">LUXURY HOTEL AND BEST RESORT</h4>
                            <h1 className="text-bot">ENJOY A LUXURY <br></br> EXPERIENCE</h1>
                            <button className="btn-mid">
                                <span className="btn-mid-text">ROOMS & SUITES</span>
                            </button>
                        </div>
                        <div className="call">
                            <h4 className="call-text">RESERVATION</h4>
                            <a href="tel:+8551004444" className="call-number">855 100 4444</a>
                        </div>
                        <div className="icon-call">
                            <i className="fa-solid fa-phone-volume fa-beat"></i>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="img-slideshow">

                            <img src="/images/slide3.jpg" className="d-block w-100 img-slide img-fluid" alt="..."></img>
                        </div>
                        <div className="carousel-caption d-none  d-sm-block m-auto ">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <h4 className="m-4 text-top ">LUXURY HOTEL AND BEST RESORT</h4>
                            <h1 className="text-bot">ENJOY A LUXURY <br></br> EXPERIENCE</h1>
                            <button className="btn-mid">
                                <span className="btn-mid-text">ROOMS & SUITES</span>
                            </button>
                        </div>
                        <div className="call">
                            <h4 className="call-text">RESERVATION</h4>
                            <a href="tel:+8551004444" className="call-number">855 100 4444</a>
                        </div>
                        <div className="icon-call">
                            <i className="fa-solid fa-phone-volume fa-beat"></i>
                        </div>
                    </div>
                </div>
                <div className="btn-slide d-none  d-md-block z-3">

                    <button className="carousel-control-prev mt-auto  " type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next mt-auto  " type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>

                </div>

            </div>
        </div>

    )
}

export default Slidebar;