import "../../../css/app.css"
import "../../../css/restaurant.css"
const Menu = (props) => {
    return (
        <section id="menu" className="section-padding bg-blck">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="section-subtitle">
                            <span>Luxury Hotel</span>
                        </div>
                        <div className="section-title">
                            <span>Restaurant Menu</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ul class="nav nav-pills mb-3  justify-content-center" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="pills-starters-tab" data-bs-toggle="pill" data-bs-target="#pills-starters" type="button" role="tab" aria-controls="pills-starters" aria-selected="true">Starters</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-Mains-tab" data-bs-toggle="pill" data-bs-target="#pills-Mains" type="button" role="tab" aria-controls="pills-Mains" aria-selected="false">Mains</button>
                            </li>

                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-starters" role="tabpanel" aria-labelledby="pills-starters-tab" tabindex="0">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="menu-info d-block">
                                            <h5>Mozzarella Dippers
                                                <span className="price">
                                                    27$
                                                </span>
                                            </h5>
                                            <p>Fried mozzarella sticks, marinara sauce</p>
                                        </div>
                                        <div className="menu-info d-block mt-3">
                                            <h5>Onion Rings
                                                <span className="price">
                                                    32$
                                                </span>
                                            </h5>
                                            <p>Fried onion rings, smoked aioli</p>
                                        </div>
                                        <div className="menu-info d-block mt-3">
                                            <h5>Fried Jalapeno
                                                <span className="price">
                                                    52$
                                                </span>
                                            </h5>
                                            <p>Fried jalapeno pickles, cheddar sauce</p>
                                        </div>
                                        <div className="menu-info d-block mt-3">
                                            <h5>Fried Jalapeno
                                                <span className="price">
                                                    52$
                                                </span>
                                            </h5>
                                            <p>Fried jalapeno pickles, cheddar sauce</p>
                                        </div>
                                        <div className="menu-info d-block mt-3">
                                            <h5>Fried Jalapeno
                                                <span className="price">
                                                    52$
                                                </span>
                                            </h5>
                                            <p>Fried jalapeno pickles, cheddar sauce</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="tab-pane fade" id="pills-Mains" role="tabpanel" aria-labelledby="pills-Mains-tab" tabindex="0">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="menu-info d-block mt-3">
                                            <h5>Fried Jalapeno
                                                <span className="price">
                                                    52$
                                                </span>
                                            </h5>
                                            <p>Fried jalapeno pickles, cheddar sauce</p>
                                        </div>
                                        <div className="menu-info d-block mt-3">
                                            <h5>Fried Jalapeno 
                                                <span className="price">
                                                    52$
                                                </span>
                                            </h5>
                                            <p>Fried jalapeno pickles, cheddar sauce</p>
                                        </div>
                                        <div className="menu-info d-block mt-3">
                                            <h5>Fried Jalapeno 
                                                <span className="price">
                                                    52$
                                                </span>
                                            </h5>
                                            <p>Fried jalapeno pickles, cheddar sauce</p>
                                        </div>
                                        <div className="menu-info d-block mt-3">
                                            <h5>Fried Jalapeno 
                                                <span className="price">
                                                    52$
                                                </span>
                                            </h5>
                                            <p>Fried jalapeno pickles, cheddar sauce</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Menu;