const Promotion = (props) => {
    return (
        <div class="promotion-video container-fluid d-flex bg-md-transparent  z-2 position-relative ">
            <div class="promotion-video-info mx-auto text-center">
                <div class="rating  pb-3 ">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <h4 class="text-about-top mx-auto text-white">THE CAPPA LUXURY HOTEL</h4>
                <h1 class="promotion-video-title text-white">Promotional Video</h1>
                <div class="circle-video-out position-relative mx-auto mt-4">
                    <div class="circle-video-in position-absolute ">
                        <i class="fa-solid fa-play position-absolute"></i>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Promotion;