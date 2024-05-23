import Banner from "@/Components/RestaurantPage/Banner";
import Introduction from "@/Components/RestaurantPage/Introduction";
import Menu from "@/Components/RestaurantPage/Menu";
import Testimonial from "@/Components/RestaurantPage/Testimonials";

const restaurant = (props) => {
    return (
        <>
       <Banner></Banner>
       <Introduction></Introduction>
       <Menu></Menu>
       <Testimonial></Testimonial>
       <div className="mt-7"></div>
       </>
    );
}

export default restaurant;