import Footer from "@/Components/Commons/Footer";
import Navbar from "@/Components/Commons/Navbar";
import Banner from "@/Components/HomePage/Banner";
import RoomAndSuite from "@/Components/HomePage/RoomAndSuite";
import { Head } from "@inertiajs/react";
import '../../../css/roomAndSuite.css'

const RoomSearch = ({roomsStandard, roomsLarge}) => {

    const pageName = "home";
    return (
        <>
            <Head title="Cappa Luxury Hotel" />
            <Banner pageName={pageName}></Banner>
            <div className="rooms-suites z-2 position-relative ">
            <div className="container">
                <h4 className="text-about-top mb-3">THE CAPPA LUXURY HOTEL</h4>
                <h1 className="text-about-bot mb-3">Rooms & Suites</h1>
                <div className="row">
                    {roomsStandard.map((roomStandard, index) => {
                        return (
                            <div key={index} className="col-md-4 my-4">
                                <div className="position-relative rooms-suites-img overflow-hidden">
                                    <div className="overflow-hidden">
                                        <img src={`/${roomStandard.photo}`} alt="" className="w-100 img-fluid img-hover"></img>
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
                                        <img src={`/${roomLarge.photo}`} alt="" className="w-100 img-fluid img-hover"></img>
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
                    
                </div>

                {/* <div className="d-flex justify-content-center mt-4">
                    <div className="btn-wrap btn-bg-img">
                        <button className="btn-mid my-0">
                            <span className="btn-mid-text">ROOMS & SUITES</span>
                        </button>
                    </div>
                </div> */}
            </div>
        </div>
            <Footer></Footer>


        </>
    )
}
export default RoomSearch;
