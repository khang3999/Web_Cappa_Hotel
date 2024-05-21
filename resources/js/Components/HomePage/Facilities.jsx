const Facilities = (props) => {
    return (
        <div className="hotel-facilities z-2 position-relative bg-white">
            <div className="container">
                <div className="hotel-facilities-text">
                    <h4 className="hotel-facilities-top text-secondary mb-3">OUR SERVICES</h4>
                    <h1 className="hotel-facilities-bot text-dark mt-2 mb-3">Hotel Facilities</h1>
                </div>

                <div className="row ">
                    <div className="col-md-4 p-3  ">
                        <div className="hotel-facilities-item">
                            <i className="fa-solid fa-earth-asia hotel-facilities-icon"></i>
                            <h3 className="hotel-facilities-item-title">Pick Up & Drop</h3>
                            <p className="hotel-facilities-item-text text-secondary">We’ll pick up from airport while you comfy on your
                                ride, mus nellentesque habitant.</p>
                        </div>
                    </div>
                    <div className="col-md-4 p-3  ">
                        <div className="hotel-facilities-item ">
                            <i className="fa-solid fa-car hotel-facilities-icon"></i>
                            <h3 className="hotel-facilities-item-title">Parking Space</h3>
                            <p className="hotel-facilities-item-text text-secondary">Fusce tincidunt nis ace park norttito sit amet space,
                                mus nellentesque habitant.</p>
                        </div>
                    </div>
                    <div className="col-md-4 p-3  ">
                        <div className="hotel-facilities-item">
                            <i className="fa-solid fa-bed hotel-facilities-icon"></i>
                            <h3 className="hotel-facilities-item-title">Room Service</h3>
                            <p className="hotel-facilities-item-text text-secondary">Room tincidunt nis ace park norttito sit amet space,
                                mus nellentesque habitant.</p>
                        </div>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-md-4 p-3  ">
                        <div className="hotel-facilities-item">
                            <i className="fa-solid fa-water-ladder hotel-facilities-icon"></i>
                            <h3 className="hotel-facilities-item-title">Swimming Pool</h3>
                            <p className="hotel-facilities-item-text text-secondary">Swimming pool tincidunt nise ace park norttito sit
                                space, mus nellentesque habitant.</p>
                        </div>
                    </div>
                    <div className="col-md-4 p-3  ">
                        <div className="hotel-facilities-item">
                            <i className="fa-solid fa-wifi hotel-facilities-icon"></i>
                            <h3 className="hotel-facilities-item-title">Fibre Internet</h3>
                            <p className="hotel-facilities-item-text text-secondary">Wifi tincidunt nis ace park norttito sit amet space,
                                mus nellentesque habitant.

                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 p-3  ">
                        <div className="hotel-facilities-item">
                            <i className="fa-solid fa-utensils hotel-facilities-icon"></i>
                            <h3 className="hotel-facilities-item-title">Breakfast</h3>
                            <p className="hotel-facilities-item-text text-secondary">Eat tincidunt nisa ace park norttito sit amet space,
                                mus nellentesque habitant</p>
                            <i className=""></i>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Facilities;