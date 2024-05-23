import Banner from "@/Components/RestaurantPage/Banner";
import Introduction from "@/Components/RestaurantPage/Introduction";
import Menu from "@/Components/RestaurantPage/Menu";

const restaurant = (props) => {
    return (
        <>
       <Banner></Banner>
       <Introduction></Introduction>
       <Menu></Menu>
       </>
    );
}

export default restaurant;