const Slidebar = (props) => {
    return (

        <div class="banner position-relative ">
            <div id="carouselExampleCaptions" class="carousel slide position-relative ">
                <div class="carousel-indicators z-3 d-none d-lg-block">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <div class="img-slideshow ">
                            <img src="public/images/slide1.jpg" class="d-block w-100 img-slide img-fluid" alt="..."></img>
                        </div>
                        <div class="carousel-caption d-none d-sm-block m-auto z-2">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <h4 class="m-4 text-top ">LUXURY HOTEL AND BEST RESORT</h4>
                            <h1 class="text-bot">ENJOY A LUXURY <br></br> EXPERIENCE</h1>
                            <button class="btn-mid">
                                <span class="btn-mid-text">ROOMS & SUITES</span>
                            </button>
                        </div>
                        <div class="call">
                            <h4 class="call-text">RESERVATION</h4>
                            <a href="tel:+8551004444" class="call-number">855 100 4444</a>
                        </div>
                        <div class="icon-call z-2">
                            <i class="fa-solid fa-phone-volume fa-beat z-2"></i>
                        </div>


                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <div class="img-slideshow">
                            <img src="public/images/slide2.jpg" class="d-block w-100 img-slide - img-fluid" alt="..."></img>

                        </div>
                        <div class="carousel-caption d-none d-sm-block m-auto ">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <h4 class="m-4 text-top ">LUXURY HOTEL AND BEST RESORT</h4>
                            <h1 class="text-bot">ENJOY A LUXURY <br></br> EXPERIENCE</h1>
                            <button class="btn-mid">
                                <span class="btn-mid-text">ROOMS & SUITES</span>
                            </button>
                        </div>
                        <div class="call">
                            <h4 class="call-text">RESERVATION</h4>
                            <a href="tel:+8551004444" class="call-number">855 100 4444</a>
                        </div>
                        <div class="icon-call">
                            <i class="fa-solid fa-phone-volume fa-beat"></i>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="img-slideshow">

                            <img src="public/images/slide3.jpg" class="d-block w-100 img-slide img-fluid" alt="..."></img>
                        </div>
                        <div class="carousel-caption d-none  d-sm-block m-auto ">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <h4 class="m-4 text-top ">LUXURY HOTEL AND BEST RESORT</h4>
                            <h1 class="text-bot">ENJOY A LUXURY <br></br> EXPERIENCE</h1>
                            <button class="btn-mid">
                                <span class="btn-mid-text">ROOMS & SUITES</span>
                            </button>
                        </div>
                        <div class="call">
                            <h4 class="call-text">RESERVATION</h4>
                            <a href="tel:+8551004444" class="call-number">855 100 4444</a>
                        </div>
                        <div class="icon-call">
                            <i class="fa-solid fa-phone-volume fa-beat"></i>
                        </div>
                    </div>
                </div>
                <div class="btn-slide d-none  d-md-block z-3">

                    <button class="carousel-control-prev mt-auto  " type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon " aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next mt-auto  " type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>

                </div>

            </div>
        </div>

    )
}

export default Slidebar;