import { useEffect, useState } from "react";

const Facilities = () => {
    const [facilities, setFacilities] = useState([])
    useEffect(() => {
        fetch(route('api.utilities', { type: 'common' }))
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch banner data');
                }
                return response.json();
            })
            .then(data => {
                setFacilities(data);
            })
            .catch(error => {
                console.error('Error fetching banner data:', error);
            });
    }, []);
    return (
        <div className="hotel-facilities z-2 position-relative bg-white ">
            <div className="container ">
                <div className="hotel-facilities-text">
                    <h4 className="hotel-facilities-top text-secondary mb-3">OUR SERVICES</h4>
                    <h1 className="hotel-facilities-bot text-dark mt-2 mb-3">Hotel Facilities</h1>
                </div>

                <div className="row">
                    <div className="col-md-4 p-3  ">
                        <div className="hotel-facilities-item">
                            <span className="hotel-facilities-icon flaticon-world"></span>
                            <h3 className="mt-3 hotel-facilities-item-title">Pick Up & Drop</h3>
                            <p className="hotel-facilities-item-text text-secondary">We’ll pick up from airport while you comfy on your
                                ride, mus nellentesque habitant.</p>
                        </div>
                    </div>
                    <div className="col-md-4 p-3  ">
                        <div className="hotel-facilities-item ">
                            <span className="hotel-facilities-icon flaticon-car"></span>
                            <h3 className="mt-3 hotel-facilities-item-title">Parking Space</h3>
                            <p className="hotel-facilities-item-text text-secondary">Fusce tincidunt nis ace park norttito sit amet space,
                                mus nellentesque habitant.</p>
                        </div>
                    </div>
                    <div className="col-md-4 p-3  ">
                        <div className="hotel-facilities-item">
                            <span className="hotel-facilities-icon flaticon-bed"></span>
                            <h3 className="mt-3 hotel-facilities-item-title">Room Service</h3>
                            <p className="hotel-facilities-item-text text-secondary">Room tincidunt nis ace park norttito sit amet space,
                                mus nellentesque habitant.</p>
                        </div>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-md-4 p-3  ">
                        <div className="hotel-facilities-item">
                            <span className="hotel-facilities-icon flaticon-swimming"></span>
                            <h3 className="mt-3 hotel-facilities-item-title">Swimming Pool</h3>
                            <p className="hotel-facilities-item-text text-secondary">Swimming pool tincidunt nise ace park norttito sit
                                space, mus nellentesque habitant.</p>
                        </div>
                    </div>
                    <div className="col-md-4 p-3  ">
                        <div className="hotel-facilities-item">
                            <span className="hotel-facilities-icon flaticon-wifi"></span>
                            <h3 className="mt-3 hotel-facilities-item-title">Fibre Internet</h3>
                            <p className="hotel-facilities-item-text text-secondary">Wifi tincidunt nis ace park norttito sit amet space,
                                mus nellentesque habitant.

                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 p-3  ">
                        <div className="hotel-facilities-item">
                            <span className="hotel-facilities-icon flaticon-breakfast"></span>
                            <h3 className="mt-3 hotel-facilities-item-title">Breakfast</h3>
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