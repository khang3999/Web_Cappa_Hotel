const Testimonial = (props) => {
    return (
        <div className="testimonials container-fluid d-flex bg-md-transparent  z-2 position-relative ">
            <div className="container">
                <div className="testimonials-title text-white ">
                    <h5 className="testimonials-top  ">TESTIMONIALS</h5>
                    <h4 className="testimonials-bot mt-2 ">What's Client Say?</h4>
                    <div className="line-author mb-3"></div>
                    <p className="testimonials-text">
                        Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat
                        erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien the miss drana inc
                        fermen norttito sit space, mus nellentesque habitan.
                    </p>
                    <div className="testimonials-info mt-3 d-flex">
                        <div className="author">
                        </div>
                        <div className="author-info ps-3">
                            <div className="rating ">
                                <i className="fa-solid fa-star fa-star-author"></i>
                                <i className="fa-solid fa-star fa-star-author"></i>
                                <i className="fa-solid fa-star fa-star-author"></i>
                                <i className="fa-solid fa-star fa-star-author"></i>
                                <i className="fa-solid fa-star fa-star-author"></i>
                            </div>
                            <p className="author-name ">EMILY BROWN</p>
                            <p className="author-role">Guest review</p>
                        </div>
                    </div>
                    <div className="cirle-author mt-5 d-flex">
                        <div className="mx-auto d-flex">
                            <div className="circle mx-2"></div>
                            <div className="circle mx-2"></div>
                            <div className="circle mx-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;