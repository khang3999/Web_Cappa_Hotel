import { useEffect, useState } from "react";
import "../../../css/navbar.css"
const Navbar = () => {
    // const [isVisible, setIsVisible] = useState(false);

    // const handleScroll = () => {
    //     const currentScrollY = window.scrollY;
    //     if (currentScrollY < 100) {
    //       setIsVisible(false);
    //     } else {
    //       setIsVisible(true);
    //     }
    //   };

    // useEffect(()=>{
    //     window.addEventListener('scroll', handleScroll);

    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
    // },[])

    return (
        <nav className="navbar navbar-expand-xl z-3 position-absolute w-100 mt-3">
            <div className="container">
                <a className="navbar-brand" href={route('indexUser')}>
                    <img src="/images/logo.png" alt="THE CAPPA" className="logo-img"></img>
                </a>
                <button className="navbar-toggler navbar-dark me-3" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon navbar-dark"></span>
                </button>
                <div className="collapse navbar-collapse  z-3 w-100 " id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <div className="d-flex h-100">
                                <a className="nav-link mx-2 p-2 my-auto" aria-current="page" href={route('indexUser')}>HOME</a>
                            </div>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link mx-2 p-2" aria-current="page" href="#">ABOUT</a>
                        </li>

                        <li className="nav-item ">
                            <a className="nav-link  mx-2 p-2 " aria-current="page" href="#">ROOMS & SUITES <i
                                className="fa-solid fa-angle-down icon-down"></i></a>
                            <ul className="dropdown-menu ">
                                <li><a className="dropdown-item" href="#">Rooms & suites 1</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Rooms & suites 2</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Rooms & suites 3</a></li>

                            </ul>
                        </li>

                        <li className="nav-item ">
                            <a className="nav-link  mx-2 p-2 " aria-current="page" href="#">PAGES <i
                                className="fa-solid fa-angle-down icon-down"></i></a>
                            <ul className="dropdown-menu ">
                                <li><a className="dropdown-item" href="#">Pages 1</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Pages 2</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Pages 3</a></li>

                            </ul>
                        </li>

                        <li className="nav-item ">
                            <a className="nav-link mx-2 p-2 " aria-current="page" href="#">SHOP <i
                                className="fa-solid fa-angle-down icon-down"></i></a>
                            <ul className="dropdown-menu ">
                                <li><a className="dropdown-item" href="#">Shop 1</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Shop 2</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Shop 3</a></li>
                            </ul>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link mx-2 p-2 " aria-current="page" href="#">NEWS <i
                                className="fa-solid fa-angle-down icon-down"></i></a>
                            <ul className="dropdown-menu ">
                                <li><a className="dropdown-item" href="#">News 1</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">News 2</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">News 3</a></li>

                            </ul>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link ms-2 p-2 " aria-current="page" href="#">CONTACT </a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    )
}

export default Navbar;