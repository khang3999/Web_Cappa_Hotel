import Navbar from "../Commons/Navbar";
import Slidebar from "../Commons/Slidebar";
const Banner = (props) => {
    return (
         <div className="header z-2 position-relative">
            <Navbar></Navbar>
            <Slidebar></Slidebar>
         </div>  
    )
}

export default Banner;