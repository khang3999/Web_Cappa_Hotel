import "../../../css/blog.css"
const Blog = (props) => {
    return (
        <div className="hotel-blog z-2 ">
            <div className="container box animate-on-scroll">
                <h5 className="services-text-top mb-2">HOTEL BLOG</h5>
                <h1 className="services-text-bot mb-3">Our News</h1>
                <div className="row">
                    <div className="col-lg-4 col-md-6 position-relative hotel-blog-img d-flex justify-content-center">
                        <div className="overflow-hidden">
                            <a href="#">
                                <img src="/images/wine.jpg" alt="" className="w-100 hotel-blog-img-desc"></img>
                            </a>
                        </div>
                        <div className="tag-date">
                            <p className="monthnow"> APR</p>
                            <p className="daynow"> 25</p>
                        </div>
                        <div className="tag-desc">
                            <p className="check-now-top text-secondary tag-desc-title">RESTAURANT</p>
                            <p className="check-now-bot  text-dark tag-desc-text">Historic restaurant revovated</p>

                        </div>
                    </div>              
                </div>
            </div>

        </div>
    )
}

export default Blog;