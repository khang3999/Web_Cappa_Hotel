const Blog = (props) => {
    return (
        <div class="hotel-blog z-2">
            <div class="container">
                <h5 class="services-text-top mb-2">HOTEL BLOG</h5>
                <h1 class="services-text-bot mb-3">Our News</h1>
                <div class="row">
                    <div class="col-lg-4 col-md-6 position-relative hotel-blog-img ">
                        <div class="overflow-hidden">
                            <a href="#">

                                <img src="public/images/wine.jpg" alt="" class="w-100 hotel-blog-img-desc"></img>
                            </a>
                        </div>
                        <div class="tag-date">
                            <p class="monthnow"> APR</p>
                            <p class="daynow"> 25</p>
                        </div>
                        <div class="tag-desc ">
                            <p class="check-now-top text-secondary tag-desc-title">RESTAURANT</p>
                            <p class="check-now-bot  text-dark tag-desc-text">Historic restaurant revovated</p>

                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 d-none d-md-block position-relative hotel-blog-img">
                        <div class="overflow-hidden">
                            <a href="#">

                                <img src="public/images/spa.jpg" alt="" class="w-100 hotel-blog-img-desc"></img>
                            </a>
                        </div>
                        <div class="tag-date">
                            <p class="monthnow"> APR</p>
                            <p class="daynow"> 25</p>
                        </div>
                        <div class="tag-desc ">
                            <p class="check-now-top text-secondary tag-desc-title">SPA</p>
                            <p class="check-now-bot  text-dark tag-desc-text">Benefits of Spa Treatments</p>

                        </div>
                    </div>
                    <div class="col-lg-4 d-none d-lg-block position-relative  hotel-blog-img">
                        <div class="overflow-hidden">

                            <a href="#">

                                <img src="public/images/toire.jpg" alt="" class="w-100 hotel-blog-img-desc"></img>
                            </a>

                        </div>
                        <div class="tag-date">
                            <p class="monthnow"> APR</p>
                            <p class="daynow"> 25</p>
                        </div>
                        <div class="tag-desc ">
                            <p class="check-now-top text-secondary tag-desc-title">BATHROOMS</p>
                            <p class="check-now-bot  text-dark tag-desc-text">Hotel Bathroom Collections</p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Blog;