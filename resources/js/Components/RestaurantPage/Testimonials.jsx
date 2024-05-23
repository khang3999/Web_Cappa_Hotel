import "../../../css/app.css"
import "../../../css/restaurant.css"
const Testimonial = (props) => {
    return (
        <section id="testimonials">
            <div className="bg-fixed bg-testimonial  text-start">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 w-100">
                            <div className="testimonials-box mt-5">
                                <h6>Testimonials</h6>
                                <h4>What's Client's Say ?</h4>                                
                            </div>
                            <div className="col-md-12">
                                <div id="carouselTestimonialIndicators" class="carousel slide">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselTestimonialIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselTestimonialIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselTestimonialIndicators" data-bs-slide-to="2"
                                            aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, necessitatibus exercitationem, iure debitis ab nostrum minima quidem molestiae alias omnis suscipit aspernatur nihil natus cumque illum impedit officiis asperiores magni?</p>
                                            <div className="info">
                                                <img className="author-img" src="../images/1-1.jpg" />
                                                <span className="ms-4">
                                                    <i className="fa-solid fa-star star-color"></i>
                                                    <i className="fa-solid fa-star star-color"></i>
                                                    <i className="fa-solid fa-star star-color"></i>
                                                    <i className="fa-solid fa-star star-color"></i>
                                                    <i className="fa-solid fa-star star-color"></i>
                                                </span>
                                                <span className="d-block author-name">Emily Brown</span>
                                                <span className="d-block">CEO, ABC Company</span>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                        <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, necessitatibus exercitationem, iure debitis ab nostrum minima quidem molestiae alias omnis suscipit aspernatur nihil natus cumque illum impedit officiis asperiores magni?</p>
                                            <div className="info">
                                                <img className="author-img" src="../images/1-1.jpg" />
                                                <span className="ms-4">
                                                    <i className="fa-solid fa-star star-color"></i>
                                                    <i className="fa-solid fa-star star-color"></i>
                                                    <i className="fa-solid fa-star star-color"></i>
                                                    <i className="fa-solid fa-star star-color"></i>
                                                    <i className="fa-solid fa-star star-color"></i>
                                                </span>
                                                <span className="d-block author-name">Emily Brown</span>
                                                <span className="d-block">CEO, ABC Company</span>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                        <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, necessitatibus exercitationem, iure debitis ab nostrum minima quidem molestiae alias omnis suscipit aspernatur nihil natus cumque illum impedit officiis asperiores magni?</p>
                                            <div className="info">
                                                <img className="author-img" src="../images/1-1.jpg" />
                                                <span className="ms-4">
                                                    <i className="fa-solid fa-star star-color"></i>
                                                    <i className="fa-solid fa-star star-color"></i>
                                                    <i className="fa-solid fa-star star-color"></i>
                                                    <i className="fa-solid fa-star star-color"></i>
                                                    <i className="fa-solid fa-star star-color"></i>
                                                </span>
                                                <span className="d-block author-name">Emily Brown</span>
                                                <span className="d-block">CEO, ABC Company</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Testimonial;
