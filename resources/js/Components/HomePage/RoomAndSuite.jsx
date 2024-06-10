import { useEffect, useState } from "react";
import '../../../css/roomAndSuite.css'
const RoomAndSuite = () => {
    const [roomsStandard, setRoomsStandard] = useState([]);
    const [roomsLarge, setRoomsLarge] = useState([]);

    const loadMore = () => {
        fetch(route('api.rooms', { type: 'standard' }))
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch banner data');
                }
                return response.json();
            })
            .then(data => {
                setRoomsStandard(data);
            })
            .catch(error => {
                console.error('Error fetching banner data:', error);
            });
    }

    useEffect(() => {
        loadMore();
    }, []);
    
    useEffect(() => {
        fetch(route('api.rooms', { type: 'large' }))
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch banner data');
                }
                return response.json();
            })
            .then(data => {
                setRoomsLarge(data);
            })
            .catch(error => {
                console.error('Error fetching banner data:', error);
            });
    }, []);
    return (
        <div className="rooms-suites z-2 position-relative">
            <div className="container">
                <h4 className="text-about-top mb-3">THE CAPPA LUXURY HOTEL</h4>
                <h1 className="text-about-bot mb-3">Rooms & Suites</h1>
                <div className="row">
                    {roomsStandard.map((roomStandard, index) => {
                        return (
                            <div key={index} className="col-md-4 my-4">
                                <div className="position-relative rooms-suites-img overflow-hidden">
                                    <div className="overflow-hidden">
                                        <img src={`/images/${roomStandard.photo}`} alt="" className="w-100 img-fluid img-hover"></img>
                                    </div>
                                    <div className="tag-book text-center">BOOK</div>
                                    <div className="rooms-suites-info">
                                        <a href="" className="rooms-suites-price text-start">{roomStandard.price}$ / NIGHT</a>
                                        <a href="" className="rooms-suites-name text-start">{roomStandard.name}</a>
                                        <div className="line"></div>
                                        <div className="d-flex">
                                            <div className="rooms-suites-listicon">
                                                <span className="flaticon-world rooms-suites-icon"></span>
                                                <span className="flaticon-car rooms-suites-icon"></span>
                                                <span className="flaticon-bed rooms-suites-icon"></span>
                                                <span className="flaticon-breakfast rooms-suites-icon"></span>
                                            </div>
                                            <div className="ms-auto">
                                                <div className="rooms-suites-detail ms-auto">
                                                    <a href={route('room.detail',roomStandard.id)} className="rooms-suites-detail-text">DETAILS</a>
                                                    <i className="fa-solid fa-arrow-right rooms-suites-icon"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="overlay">
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>


                <div className="row ">
                    {roomsLarge.map((roomLarge, index) => {
                        return (
                            <div key={index} className="col-md-6 my-4">
                                <div className="position-relative rooms-suites-img overflow-hidden">
                                    <div className="overflow-hidden">
                                        <img src={`/images/${roomLarge.photo}`} alt="" className="w-100 img-fluid img-hover"></img>
                                    </div>
                                    <div className="tag-book text-center">BOOK</div>
                                    <div className="rooms-suites-info rooms-suites-info-large">
                                        <a href="" className="rooms-suites-price text-start">{roomLarge.price}$ / NIGHT</a>
                                        <a href="" className="rooms-suites-name text-start">{roomLarge.name}</a>
                                        <div className="line"></div>
                                        <div className="d-flex">
                                            <div className="rooms-suites-listicon">
                                                <span className="flaticon-world rooms-suites-icon"></span>
                                                <span className="flaticon-car rooms-suites-icon"></span>
                                                <span className="flaticon-bed rooms-suites-icon"></span>
                                                <span className="flaticon-breakfast rooms-suites-icon"></span>
                                            </div>
                                            <div className="ms-auto">
                                                <div className="rooms-suites-detail ms-auto">
                                                    <a href={route('room.detail',roomLarge.id)} className="rooms-suites-detail-text">DETAILS</a>
                                                    <i className="fa-solid fa-arrow-right rooms-suites-icon"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="overlay">
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    {/* <div className="col-md-6 p-2 rooms-suites-img">
                        <div className="overflow-hidden">
                            <img src="/images/3-4.jpg" alt="" className="w-100 img-fluid img-hover"></img>
                        </div>
                        <div className="tag-book mt-2">BOOK</div>
                        <a href="" className="rooms-suites-price pb-2">300$ / NIGHT</a>
                        <a href="" className="rooms-suites-name">Duluxe Room</a>
                        <div className="rooms-suites-hidden row ">
                            <div className="rooms-suites-listicon col-6">
                                <i className="fa-solid fa-earth-asia rooms-suites-icon"></i>
                                <i className="fa-solid fa-car rooms-suites-icon"></i>
                                <i className="fa-solid fa-bed rooms-suites-icon"></i>
                                <i className="fa-solid fa-utensils rooms-suites-icon"></i>

                            </div>
                            <div className="rooms-suites-detail col-6 ms-auto">
                                <a href="#" className="rooms-suites-detail-text">DETAILS</a>
                                <i className="fa-solid fa-arrow-right rooms-suites-icon"></i>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="overlay">
                        </div>
                    </div>
                    <div className="col-md-6 p-2 rooms-suites-img">
                        <div className="overflow-hidden">
                            <img src="/images/7-1.jpg" alt="" className="w-100 img-fluid img-hover"></img>
                        </div>
                        <div className="tag-book mt-2">BOOK</div>
                        <a href="" className="rooms-suites-price pb-2">350$ / NIGHT</a>
                        <a href="" className="rooms-suites-name ">Superior Room</a>
                        <div className="rooms-suites-hidden row ">
                            <div className="rooms-suites-listicon col-6">
                                <i className="fa-solid fa-earth-asia rooms-suites-icon"></i>
                                <i className="fa-solid fa-car rooms-suites-icon"></i>
                                <i className="fa-solid fa-bed rooms-suites-icon"></i>
                                <i className="fa-solid fa-utensils rooms-suites-icon"></i>

                            </div>
                            <div className="rooms-suites-detail col-6 ms-auto">
                                <a href="#" className="rooms-suites-detail-text">DETAILS</a>
                                <i className="fa-solid fa-arrow-right rooms-suites-icon"></i>
                            </div>
                        </div>
                        <div className="line "></div>
                        <div className="overlay">
                        </div>
                    </div> */}
                </div>

                <div className="d-flex justify-content-center mt-4">
                    <div className="btn-wrap btn-bg-img">
                        <button className="btn-mid my-0">
                            <span className="btn-mid-text">ROOMS & SUITES</span>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RoomAndSuite;