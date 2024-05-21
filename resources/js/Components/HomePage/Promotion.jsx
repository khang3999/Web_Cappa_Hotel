const Promotion = (props) => {
    return (
        <div className="promotion-video container-fluid d-flex bg-md-transparent  z-2 position-relative ">
            <div className="promotion-video-info mx-auto text-center">
                <div className="rating  pb-3 ">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <h4 className="text-about-top mx-auto text-white">THE CAPPA LUXURY HOTEL</h4>
                <h1 className="promotion-video-title text-white">Promotional Video</h1>
                <div className="circle-video-out position-relative mx-auto mt-4">
                    <div className="circle-video-in position-absolute ">
                        <i className="fa-solid fa-play position-absolute"></i>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Promotion;