const Testimonial = (props) => {
    return (
        <div class="testimonials container-fluid d-flex bg-md-transparent  z-2 position-relative">
            <div class="container">
                <div class="testimonials-title text-white ">
                    <h5 class="testimonials-top  ">TESTIMONIALS</h5>
                    <h4 class="testimonials-bot mt-2 ">What's Client Say?</h4>
                    <div class="line-author mb-3"></div>
                    <p class="testimonials-text">
                        Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat
                        erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien the miss drana inc
                        fermen norttito sit space, mus nellentesque habitan.
                    </p>
                    <div class="testimonials-info mt-3 d-flex">
                        <div class="author">
                        </div>
                        <div class="author-info ps-3">
                            <div class="rating ">
                                <i class="fa-solid fa-star fa-star-author"></i>
                                <i class="fa-solid fa-star fa-star-author"></i>
                                <i class="fa-solid fa-star fa-star-author"></i>
                                <i class="fa-solid fa-star fa-star-author"></i>
                                <i class="fa-solid fa-star fa-star-author"></i>
                            </div>
                            <p class="author-name ">EMILY BROWN</p>
                            <p class="author-role">Guest review</p>
                        </div>
                    </div>
                    <div class="cirle-author mt-5 d-flex">
                        <div class="mx-auto d-flex">
                            <div class="circle mx-2"></div>
                            <div class="circle mx-2"></div>
                            <div class="circle mx-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;