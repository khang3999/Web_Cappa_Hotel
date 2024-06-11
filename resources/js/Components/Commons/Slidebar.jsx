import { useEffect, useState } from "react";
import "../../../css/slidebar.css"


const Slidebar = ({pageName}) => {
    // Khai bao bien su dung cho toan bo trang
    const [banners, setBanners] = useState([]);
    useEffect(() => {
        fetch(route('api.banners',{type: pageName}))
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch banner data');
                }
                return response.json();
            })
            .then(data => {
                setBanners(data);
            })
            .catch(error => {
                console.error('Error fetching banner data:', error);
            });
    }, []);

    return (
        <div className="banner position-relative ">
            <div id="carouselExampleIndicators" className="carousel slide position-relative" data-bs-ride="carousel">
                <div className="carousel-indicators z-3 d-none d-lg-block">
                    {banners.map((banner, index) => {
                        return (
                            <button key={index} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className={`dot ${(index == 0) ? 'active' : ''}`}
                                aria-current="true" aria-label={`Slide ${index + 1}`}></button>
                        )
                    })}
                </div>
                <div className="carousel-inner">
                    {banners.map((banner, index) => {
                        return (
                            <div key={index} className={`carousel-item ${(index == 0) ? 'active' : ''}`} data-bs-interval="10000">
                                <div className="img-slideshow ">
                                    <img src={`/images/banner-home-${index + 1}.jpg`} className="d-block w-100 img-slide img-fluid" alt="..."></img>
                                </div>
                                <div className="carousel-caption d-none d-sm-block m-auto z-2">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <h4 className="m-4 text-top text-light">{banner.title}</h4>
                                    <h1 className="text-bot text-light">{banner.description.toUpperCase()}</h1>
                                    <button className="btn-mid">
                                        <span className="btn-mid-text">ROOMS & SUITES</span>
                                    </button>
                                </div>
                                <div className="call">
                                    <h4 className="call-text">RESERVATION</h4>
                                    <a href="tel:+8551004444" className="call-number">855 100 4444</a>
                                </div>
                                <div className="icon-call z-2">
                                    <i className="fa-solid fa-phone-volume fa-beat z-2"></i>
                                </div>
                            </div>
                        )
                    })}
                </div>


                <div className="btn-slide d-none  d-md-block z-3">
                    <button className="carousel-control-prev mt-auto  " type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next mt-auto  " type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>

                </div>

            </div>
        </div>

    )
}

export default Slidebar;