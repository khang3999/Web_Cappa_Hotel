import { useEffect } from "react";
import video from '../../../../public/images/Y2meta.app-NABE SPA official commercial 2019 HD-(720p50).mp4'
const Promotion = (props) => {
    useEffect(() => {
        const play = document.querySelector('.fa-play');
        play.addEventListener('click', function () {
            console.log("aaaa");
        })
    }, []);
    return (
        <div className="promotion-video container-fluid d-flex bg-md-transparent  z-2 position-relative">
            <div className="promotion-video-info mx-auto text-center box animate-on-scroll">
                <div className="rating  pb-3 ">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <h4 className="text-about-top mx-auto text-white">THE CAPPA LUXURY HOTEL</h4>
                <h1 className="promotion-video-title text-white">Promotional Video</h1>
                <div className="circle-video-out position-relative mx-auto mt-4 " data-bs-toggle="modal"
                    data-bs-target="#exampleModal" >
                    <div className="circle-video-in position-absolute ">
                        <i className=" bi bi-play fa-solid fa-play position-absolute"></i>
                    </div>
                </div>
            </div>

            <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="false">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-transparent">
                            <button type="button" className="btn-close text-dark" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body ">
                            <div className="hero-section">
                                <video autoPlay muted loop>
                                    <source src={video} type="video/mp4"/>
                                </video>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>



        </div>

    )
}

export default Promotion;