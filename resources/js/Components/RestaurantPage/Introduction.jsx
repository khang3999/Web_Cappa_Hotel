import "../../../css/app.css"
import "../../../css/restaurant.css"
const Introduction = (props) => {
    return (
        <section className="mb-5">
        <div className="container d-block mt-7">
            <div className="row">
                <div className="col-md-12 text-left">
                    <span>
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>
                    </span>
                    <div className="mt-2 text-secondary section-subtitle">AN EXPERIENCE FOR THE SENSES</div>
                    <div className="section-title">The Restaurant</div>
                </div>
                <div className="col-12-md">
                    <p className="mb-3 text-secondary">
                        Led by Chef de Micheal Martin, The Restaurant is celebrated for its excellent cuisine and unique ambience. The gorgeous dining room features three open studio kitchens, allowing you to enjoy the sights and sounds of the culinary artistry on display. The menu showcases both Asian and European influences, with a tempting selection of classic favorites and creative dishes for you to sample. Cheese connoisseurs will be drawn to the The Wine and Cheese Cellar, housed in five-meter-high glass walls, where our knowledgeable staff can introduce you to some of New York's greatest culinary treasures.
                    </p>
                    <h6 className="mb-3">Hours</h6>
                    <ul>
                        <li>
                            <div className="d-flex position-relative">
                                <span className="me-3">
                                    <i class="fa-regular fa-clock "></i>
                                </span>
                            </div>
                            <div>
                                <p className="text-secondary">
                                    Breakfast: 7.00 am – 11.00 am (daily)
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex position-relative">
                                <span className="me-3">
                                    <i class="fa-regular fa-clock "></i>
                                </span>
                            </div>
                            <div>
                                <p className="text-secondary">
                                    Lunch: 12.00 noon – 2.00 pm (daily)
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex position-relative">
                                <span className="me-3">
                                    <i class="fa-regular fa-clock "></i>
                                </span>
                            </div>
                            <div>
                                <p className="text-secondary">
                                    Dinner: open from 6.30 pm, last order at 10.00 pm (daily)
                                </p>
                            </div>
                        </li>
                    </ul>

                    <h6 className="mb-3">Dress Code</h6>
                    <p className="mb-3 text-secondary">
                        Smart casual (no shorts, hats, or sandals permitted)
                    </p>

                    <h6 className="mb-3">Terrace</h6>
                    <p className="mb-3 text-secondary">
                        Open for drinks only
                    </p>
                </div>

            </div>
        </div>
     </section>
    )
}

export default Introduction;