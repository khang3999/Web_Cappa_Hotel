import { useEffect, useState } from 'react';
import '../../../css/extraService.css'
const ExtraService = (props) => {
    const [extraServices, setExtraServices] = useState([])
    useEffect(()=>{
        
    },[])
    return (
        <div className="extra-services z-2 position-relative  ">
            <div className="container ">
                <div className="row ">
                    <div className="col-lg-4 col-md-6">
                        <div className="services-text">
                            <h5 className="services-text-top mb-3">BEST PRICES</h5>
                            <h1 className="services-text-bot mb-3">Extra Services</h1>
                            <p className="services-text">The best prices for your relaxing vacation. The utanislen quam nestibulum ac quame
                                odion elementum sceisue the aucan.</p>
                            <p className="services-text">Orci varius natoque penatibus et magnis disney parturient monte nascete ridiculus
                                mus nelle etesque habitant morbine.</p>
                            <div className="text-call">
                                <i className="fa-solid fa-phone-volume call-icon "></i>
                                <h4 className="about-call m-0"> For information <br></br> <a href="tel:+8551004444" className="about-callnumber">855
                                    100 4444</a></h4>

                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 p-2 ">
                        <a href="#">
                            <img src="public/images/1.jpg" alt="" className="img-fluid "></img>
                        </a>
                        <div className="services-price">

                            <h5 className="services-title">Room cleaning </h5>
                            <p className="prices-num">$50 <span className="prices-info">/month</span></p>
                            <p className="list-info"><i className="fa-solid fa-check pe-3"></i>Hotel ut nisan the duru</p>
                            <p className="list-info mt-2"><i className="fa-solid fa-check pe-3"></i>Orsi miss natoque vasa ince</p>
                            <p className="list-info mt-2"><i className="fa-solid fa-xmark pe-3"></i>Clean sorem ipsum morbin</p>

                        </div>
                        <div className="circle mt-4 ms-auto d-none d-lg-block"></div>
                        <div className="circle mt-4 mx-auto d-md-block d-lg-none"></div>

                    </div>
                    <div className="col-md-4 d-none d-lg-block p-2">
                        <a href="#">


                            <img src="public/images/2-2.jpg" alt="" className="img-fluid"></img>
                        </a>
                        <div className="services-price">

                            <h5 className="services-title">Drinks included </h5>
                            <p className="prices-num">$30 <span className="prices-info">/daily</span></p>
                            <p className="list-info"><i className="fa-solid fa-check pe-3"></i>Hotel ut nisan the duru</p>
                            <p className="list-info mt-2"><i className="fa-solid fa-check pe-3"></i>Orsi miss natoque vasa ince</p>
                            <p className="list-info mt-2"><i className="fa-solid fa-xmark pe-3"></i>Clean sorem ipsum morbin</p>

                        </div>
                        <div className="circle mt-4 d-none d-md-block"></div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default ExtraService;