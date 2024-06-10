const CheckRoom = (props) => {
    return (
        <div className="check-now z-2 position-relative  ">
            <div className="container box animate-on-scroll">
                <div className="check-now-text">
                    <h4 className="check-now-top text-secondary ">CHECK NOW</h4>
                    <h1 className="check-now-bot mb-3 text-dark mt-2 mb-3">Search Rooms</h1>
                </div>
                <div className="row ">
                    <div className="col-xl-6 row p-0 m-0 ">
                        <div className="col-md-6 row checkin-box m-0 mt-4 ps-0 pe-0">
                            <div className="col-8 checkin bg-white">Check in</div>
                            <a href="#" className="col-4 icon-cal d-flex ">
                                <i className="fa-solid fa-calendar-days ms-auto my-auto"></i>
                            </a>

                        </div>
                        <div className="col-md-6 row checkout-box m-0 mt-4 ps-0 pe-0">
                            <div className="col-8 checkout bg-white">Check out</div>
                            <a href="#" className="col-4 icon-cal d-flex  ">
                                <i className="fa-solid fa-calendar-days ms-auto my-auto "></i>
                            </a>
                        </div>

                    </div>
                    <div className="col-xl-6 row p-0  mt-md-4 m-0 mt-xl-0 ">
                        <div className="Adult col-md-3 mt-4 bg-white p-0">
                            <select className="form-select w-100 h-100 border-0 ">
                                <option defaultValue="selected" value="0">Adult</option>
                                <option value="1">1 Adult</option>
                                <option value="2">2 Adults</option>
                                <option value="3">3 Adults</option>
                            </select>
                        </div>
                        <div className="child col-md-3 mt-4 bg-white p-0">
                            <select className="form-select w-100 h-100 border-0 ">
                                <option defaultValue="selected" value="0">Children</option>
                                <option value="1">Child</option>
                                <option value="2">2 Children</option>
                                <option value="3">3 Children</option>
                            </select>
                        </div>
                        <div className="room col-md-3 mt-4 bg-white p-0">
                            <select className="form-select w-100 h-100 border-0 ">
                                <option defaultValue="selected" value="0">Room</option>
                                <option value="1">1 Room</option>
                                <option value="2">2 Rooms</option>
                                <option value="3">3 Rooms</option>
                            </select>

                        </div>
                        <a href="#" className="check col-md-3 mt-4">CHECK NOW</a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckRoom;