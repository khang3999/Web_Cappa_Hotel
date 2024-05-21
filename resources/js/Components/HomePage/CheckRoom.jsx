const CheckRoom = (props) => {
    return (
        <div class="check-now z-2 position-relative ">
            <div class="container">
                <div class="check-now-text">
                    <h4 class="check-now-top text-secondary ">CHECK NOW</h4>
                    <h1 class="check-now-bot mb-3 text-dark mt-2 mb-3">Search Rooms</h1>
                </div>
                <div class="row ">
                    <div class="col-xl-6 row p-0 m-0 ">
                        <div class="col-md-6 row checkin-box m-0 mt-4 ps-0 pe-0">
                            <div class="col-8 checkin bg-white">Check in</div>
                            <a href="#" class="col-4 icon-cal d-flex ">
                                <i class="fa-solid fa-calendar-days ms-auto my-auto"></i>
                            </a>

                        </div>
                        <div class="col-md-6 row checkout-box m-0 mt-4 ps-0 pe-0">
                            <div class="col-8 checkout bg-white">Check out</div>
                            <a href="#" class="col-4 icon-cal d-flex  ">
                                <i class="fa-solid fa-calendar-days ms-auto my-auto "></i>
                            </a>
                        </div>

                    </div>
                    <div class="col-xl-6 row p-0  mt-md-4 m-0 mt-xl-0 ">
                        <div class="Adult col-md-3 mt-4 bg-white p-0">
                            <select class="form-select w-100 h-100 border-0 ">
                                <option selected>Adult</option>
                                <option value="1">1 Adult</option>
                                <option value="2">2 Adults</option>
                                <option value="3">3 Adults</option>
                            </select>
                        </div>
                        <div class="child col-md-3 mt-4 bg-white p-0">
                            <select class="form-select w-100 h-100 border-0 ">
                                <option selected>Children</option>
                                <option value="1">Child</option>
                                <option value="2">2 Children</option>
                                <option value="3">3 Children</option>
                            </select>
                        </div>
                        <div class="room col-md-3 mt-4 bg-white p-0">
                            <select class="form-select w-100 h-100 border-0 ">
                                <option selected>Room</option>
                                <option value="1">1 Room</option>
                                <option value="2">2 Rooms</option>
                                <option value="3">3 Rooms</option>
                            </select>

                        </div>
                        <a href="#" class="check col-md-3 mt-4">CHECK NOW</a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckRoom;