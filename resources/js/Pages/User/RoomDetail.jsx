import Navbar from "@/Components/Commons/Navbar";
import { Head } from "@inertiajs/react";
import '../../../css/roomDetail.css'
import Footer from "@/Components/Commons/Footer";

const RoomDetail = ({ room, utilities }) => {
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    return (
        <>
            <Head title="Cappa Luxury Hotel" />
            <div className="header img-base position-relative">
                <Navbar></Navbar>
                <img src="/images/contact-slide-1.jpg" alt="" className="banner w-100 img-fluid" />
            </div>

            {/* Form */}
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 justify-content-center d-flex">
                        <img className="img-fluid" src={`/images/${room.photo}`}></img>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="rating pb-3">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-8">
                        <h4 className="text-about-top ">THE CAPPA LUXURY HOTEL</h4>
                        <h3>{room.price}$ / Night</h3>
                        <h2>{room.name}</h2>
                        <p>{room.description}</p>
                        <div className="row mt-5">
                            <div className="col-6">
                                <h4 className="mb-3">Check-in</h4>
                                <ul>
                                    <li>Check-in from 13:00</li>
                                    <li>Early check-in subject to availability</li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <h4 className="mb-3">Check-out</h4>
                                <ul>
                                    <li>Check-out before noon</li>
                                    <li>Express check-out</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <h4>Utilities</h4>
                        <p>
                            <span className="hotel-facilities-icon flaticon-group fs-3 me-3"></span>
                            <span className="fs-6 utility-name">1-2 Persons</span>
                        </p>
                        <p>
                            <span className="hotel-facilities-icon flaticon-wifi fs-3 me-3"></span>
                            <span className="fs-6 utility-name">Free Wifi</span>
                        </p>
                        <p>
                            <span className="hotel-facilities-icon flaticon-clock-1 fs-3 me-3"></span>
                            <span className="fs-6 utility-name">200 sqft room</span>
                        </p>
                        <p>
                            <span className="hotel-facilities-icon flaticon-breakfast fs-3 me-3"></span>
                            <span className="fs-6 utility-name">Breakfast</span>
                        </p>
                        <p>
                            <span className="hotel-facilities-icon flaticon-towel fs-3 me-3"></span>
                            <span className="fs-6 utility-name">Towels</span>
                        </p>
                        <p>
                            <span className="hotel-facilities-icon flaticon-swimming fs-3 me-3"></span>
                            <span className="fs-6 utility-name">Swimming Pool</span>
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-8">
                        <div className="row mb-5">
                            <h4>Special check-in instructions</h4>
                            <p>Guests will receive an email 5 days before arrival with check-in instructions; front desk staff will greet guests on arrival For more details, please contact the property using the information on the booking confirmation.</p>
                        </div>
                        <div className="row mb-5">
                            <h4>Pets</h4>
                            <p>Pets not allowed</p>
                        </div>
                        <div className="row mb-5">
                            <h4>Children and extra beds</h4>
                            <p>Children are welcome Kids stay free! Children stay free when using existing bedding; children may not be eligible for complimentary breakfast Rollaway/extra beds are available for $ 10 per day.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <form className="check-booking-form z-2 py-5 px-4 mb-5" method="post" action={route('checkRoomAndSave')}>
                        <input type="hidden" name="_token" value={csrfToken} />

                        <div className="container">
                            <div className="check-now-text">
                                <h6 className="check-now-top">ROOMS & SUITS</h6>
                                <h4 className="check-now-bot mb-3 text-dark mt-2 mb-3 fs-2">Hotel Booking Form </h4>
                                <div className="line w-100"></div>
                            </div>
                            {/* Hidden */}
                            <input hidden name="userId" value="1" />
                            <input hidden name="roomId" value={room.id} />
                            <div className="mt-4 px-0">
                                <label htmlFor="input-checkin" className="form-label px-1">Check in</label>
                                <div className="position-relative">
                                    <input id="input-checkin" type="date" className="checkin bg-white form-control position-relative" name="checkin" />
                                </div>
                            </div>

                            <div className="mt-4 px-0">
                                <label htmlFor="input-checkout" className="px-1 form-label">Check out</label>
                                <div className="position-relative">
                                    <input id="input-checkout" type="date" className="checkout bg-white form-control position-relative" placeholder="24-05-2024" name="checkout" />
                                </div>
                            </div>

                            <div className="row mt-4 px-0">
                                <div className="col-lg-6">
                                    <label htmlFor="select-adults" className="form-label px-1">Adults</label>
                                </div>
                                <div className="col-lg-6">
                                    <label htmlFor="select-children" className="form-label px-1">Children</label>
                                </div>
                            </div>

                            <div className="row px-0">
                                <div className="col-lg-6">
                                    <select id='select-adults' className="form-select border-1">
                                        <option value="1" defaultValue="selected">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div>
                                <div className="col-lg-6">
                                    <select id='select-children' className="form-select border-1">
                                        <option value="1" defaultValue="selected">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mt-5">
                                <button type='submit' className="btn-check-booking w-100 border-0">Booking</button>
                            </div>
                            {/* <div className="note-booking mt-4 d-flex">
                                    <p className="px-2">One or more fields have an error. Please check and try again.</p>
                                </div> */}
                        </div>
                    </form>
                </div>
            </div>
            {/* Footer */}
            <Footer></Footer>
        </>
    )
}
export default RoomDetail;