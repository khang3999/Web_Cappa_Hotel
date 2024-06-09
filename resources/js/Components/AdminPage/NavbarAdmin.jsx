import { useEffect, useState } from "react";
import "../../../css/navbar.css"
const NavbarAdmin = () => {
    return (
        <>
            <nav className="navbar navbar-expand-xl z-3 w-100 bg-dark">
                <div className="container">
                    <a className="navbar-brand me-5" href={route('indexUser')}>
                        <img src="/images/logo.png" alt="THE CAPPA" className="logo-img"></img>
                    </a>
                    <button className="navbar-toggler navbar-dark me-3" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon navbar-dark"></span>
                    </button>
                    <div className="collapse navbar-collapse z-3 w-100 me-auto" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link mx-2 p-2 my-auto nav-item-bookings" href={route('booking.admin')} aria-current="page">Bookings</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2 p-2 my-auto  nav-item-rooms" href={route('rooms.admin')} >Rooms</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2 p-2 my-auto" href={route('accounts.admin')}>Accounts</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2 p-2 my-auto" href={route('services.admin')}>Services</a>
                            </li>
                        </ul>
                        {/* Login Logout */}
                        <div className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Username</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#"><i className="bi bi-box-arrow-right"></i></a>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavbarAdmin;