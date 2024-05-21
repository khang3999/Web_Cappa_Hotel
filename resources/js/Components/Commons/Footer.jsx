const Footer = (props) => {
    return (
        <div>
            <div class="footer-top ">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 mb-4">
                            <h3 class="footer-title text-white">About Hotel</h3>
                            <p class="footer-about-text mb-4">Welcome to the best five-star deluxe hotel in New York. Hotel elementum
                                sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat.</p>
                            <div class="select-lan d-flex text-secondary">
                                <select class="form-select w-100 bg-transparent border-0 text-bg-secondary bg-dank">
                                    <option value="1" class="bg-dark">Vietnamese</option>
                                    <option value="2" class="bg-dark">English</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-4 d-flex mb-4 ">
                            <div class="explore-title mx-md-auto">
                                <h3 class="footer-title text-white ">Explore</h3>
                                <div class="explore-list">
                                    <div class="point  mb-1">
                                    </div>
                                    <a href="#" class="explore-item ">Home</a>
                                </div>
                                <div class="explore-list">
                                    <div class="point  mb-1">
                                    </div>
                                    <a href="#" class="explore-item ">Rooms & Suites</a>
                                </div>
                                <div class="explore-list">
                                    <div class="point  mb-1">
                                    </div>
                                    <a href="#" class="explore-item ">Restaurant</a>
                                </div>
                                <div class="explore-list">
                                    <div class="point  mb-1">
                                    </div>
                                    <a href="#" class="explore-item ">Spa & Wellness</a>
                                </div>
                                <div class="explore-list">
                                    <div class="point  mb-1">
                                    </div>
                                    <a href="#" class="explore-item ">About Hotel</a>
                                </div>
                                <div class="explore-list">
                                    <div class="point  mb-1">
                                    </div>
                                    <a href="#" class="explore-item ">Contact</a>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="contact">
                                <h3 class="footer-title text-white">Contact</h3>
                                <p class="contact-text">
                                    1616 Broadway NY, New York 10001 <br></br>
                                        United States of America
                                </p>
                                <div class="phone mb-3">
                                    <i class="fa-solid fa-phone-volume phone-contact d-inline-block"></i>
                                    <p class="phone-text d-inline-block">855 100 4444</p>
                                </div>
                            </div>
                            <a href="" class="mail-contact ">
                                info@luxuryhotel.com
                            </a>
                            <div class="social mt-4">
                                <a href="#">

                                    <i class="fa-brands fa-instagram social-icon"></i>
                                </a>
                                <a href="#">

                                    <i class="fa-brands fa-twitter social-icon"></i>
                                </a>
                                <a href="#">

                                    <i class="fa-brands fa-youtube social-icon"></i>
                                </a>
                                <a href="#">

                                    <i class="fa-brands fa-facebook social-icon"></i>
                                </a>
                                <a href="#">

                                    <i class="fa-brands fa-pinterest social-icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p class="footer-bot-text mx-auto">&copy; Copyright 2023 by <a href="#">Shtheme</a></p>
            </div>
            <a href="#" class="sticky-button">
                <p>^</p>
            </a>
        </div>
    )
}

export default Footer;