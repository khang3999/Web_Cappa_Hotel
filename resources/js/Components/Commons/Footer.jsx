const Footer = (props) => {
    return (
        <div>
            <div className="footer-top ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <h3 className="footer-title text-white">About Hotel</h3>
                            <p className="footer-about-text mb-4">Welcome to the best five-star deluxe hotel in New York. Hotel elementum
                                sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat.</p>
                            <div className="select-lan d-flex text-secondary">
                                <select className="form-select w-100 bg-transparent border-0 text-bg-secondary bg-dank">
                                    <option value="1" className="bg-dark">Vietnamese</option>
                                    <option value="2" className="bg-dark">English</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex mb-4 ">
                            <div className="explore-title mx-md-auto">
                                <h3 className="footer-title text-white ">Explore</h3>
                                <div className="explore-list">
                                    <div className="point  mb-1">
                                    </div>
                                    <a href="#" className="explore-item ">Home</a>
                                </div>
                                <div className="explore-list">
                                    <div className="point  mb-1">
                                    </div>
                                    <a href="#" className="explore-item ">Rooms & Suites</a>
                                </div>
                                <div className="explore-list">
                                    <div className="point  mb-1">
                                    </div>
                                    <a href="#" className="explore-item ">Restaurant</a>
                                </div>
                                <div className="explore-list">
                                    <div className="point  mb-1">
                                    </div>
                                    <a href="#" className="explore-item ">Spa & Wellness</a>
                                </div>
                                <div className="explore-list">
                                    <div className="point  mb-1">
                                    </div>
                                    <a href="#" className="explore-item ">About Hotel</a>
                                </div>
                                <div className="explore-list">
                                    <div className="point  mb-1">
                                    </div>
                                    <a href="#" className="explore-item ">Contact</a>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="contact">
                                <h3 className="footer-title text-white">Contact</h3>
                                <p className="contact-text">
                                    1616 Broadway NY, New York 10001 <br></br>
                                        United States of America
                                </p>
                                <div className="phone mb-3">
                                    <i className="fa-solid fa-phone-volume phone-contact d-inline-block"></i>
                                    <p className="phone-text d-inline-block">855 100 4444</p>
                                </div>
                            </div>
                            <a href="" className="mail-contact ">
                                info@luxuryhotel.com
                            </a>
                            <div className="social mt-4">
                                <a href="#">

                                    <i className="fa-brands fa-instagram social-icon"></i>
                                </a>
                                <a href="#">

                                    <i className="fa-brands fa-twitter social-icon"></i>
                                </a>
                                <a href="#">

                                    <i className="fa-brands fa-youtube social-icon"></i>
                                </a>
                                <a href="#">

                                    <i className="fa-brands fa-facebook social-icon"></i>
                                </a>
                                <a href="#">

                                    <i className="fa-brands fa-pinterest social-icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="footer-bot-text mx-auto">&copy; Copyright 2023 by <a href="#">Shtheme</a></p>
            </div>
            <a href="#" className="sticky-button">
                <p>^</p>
            </a>
        </div>
    )
}

export default Footer;