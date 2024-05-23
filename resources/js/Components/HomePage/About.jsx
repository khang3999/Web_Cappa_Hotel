import '../../../css/about.css'
const About = (props) => {
    return (
        <div className="content-about z-2 position-relative bg-white">
            <div className="container ">
                <div className="row ">
                    <div className="col-md-6 ">
                        <div className="rating  pb-3">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <h4 className="text-about-top ">THE CAPPA LUXURY HOTEL</h4>
                        <h1 className="text-about-bot mb-3">Enjoy a Luxury <br></br> Experience</h1>
                        <p className="text-about">
                            Welcome to the best five-star deluxe hotel in New York. Hotel elementum sesue the aucan vestibulum aliquam
                            justo in sapien rutrum volutpat. Donec in quis the pellentesque velit. Donec id velit ac arcu posuere blane.
                        </p>
                        <p className="text-about">
                            Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque
                            penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine.
                        </p>
                        <div className="text-call">
                            <i className="fa-solid fa-phone-volume call-icon "></i>
                            <h4 className="about-call m-0"> Reservation <br></br> <a href="tel:+8551004444" className="about-callnumber">855 100
                                4444</a></h4>

                        </div>
                    </div>
                    <div className="col col-md-3 ">
                        <div className="img-1 overflow-hidden">
                            <img src="/images/wine.jpg" alt="" className="w-100 img-fluid img-hover"></img>

                        </div>
                    </div>
                    <div className="col col-md-3">
                        <div className="img-2 overflow-hidden">
                            <img src="/images/2-1.jpg" alt=" " className="w-100 img-fluid h-auto img-hover"></img>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About;