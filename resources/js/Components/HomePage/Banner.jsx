import { useEffect, useState } from "react";
import Navbar from "../Commons/Navbar";
import Slidebar from "../Commons/Slidebar";
const Banner = ({pageName}) => {
    return (
        <div className="header z-2 position-relative">
            <Navbar ></Navbar>
            <Slidebar pageName = {pageName}></Slidebar>
        </div>
    )
}

export default Banner;