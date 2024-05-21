const About = (props) => {
    return (

        <div class="content-about z-2 position-relative bg-white">
            <div class="container ">
                <div class="row ">
                    <div class="col-md-6 ">
                        <div class="rating  pb-3">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <h4 class="text-about-top ">THE CAPPA LUXURY HOTEL</h4>
                        <h1 class="text-about-bot mb-3">Enjoy a Luxury <br></br> Experience</h1>
                        <p class="text-about">
                            Welcome to the best five-star deluxe hotel in New York. Hotel elementum sesue the aucan vestibulum aliquam
                            justo in sapien rutrum volutpat. Donec in quis the pellentesque velit. Donec id velit ac arcu posuere blane.
                        </p>
                        <p class="text-about">
                            Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque
                            penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine.
                        </p>
                        <div class="text-call">
                            <i class="fa-solid fa-phone-volume call-icon "></i>
                            <h4 class="about-call m-0"> Reservation <br></br> <a href="tel:+8551004444" class="about-callnumber">855 100
                                4444</a></h4>

                        </div>
                    </div>
                    <div class="col col-md-3 ">
                        <div class="img-1 overflow-hidden">
                            <img src="public/images/wine.jpg" alt="" class="w-100 img-fluid img-hover"></img>

                        </div>
                    </div>
                    <div class="col col-md-3">
                        <div class="img-2 overflow-hidden">
                            <img src="public/images/2-1.jpg" alt=" " class="w-100 img-fluid h-auto img-hover"></img>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About;