const Header = (props) => {
    return (

        <nav class="navbar navbar-expand-xl z-3 position-absolute w-100 mt-3 ">
            <div class="container-fluid p-0 ">
                <a class="navbar-brand ms-5 ps-5" href="#">
                    <img src="public/images/logo.png" alt="THE CAPPA" class="logo-img"></img>
                </a>
                <button class="navbar-toggler navbar-dark me-3" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon navbar-dark"></span>
                </button>
                <div class="collapse navbar-collapse  z-3 w-100 " id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item ">
                            <div class="d-flex h-100">
                                <a class=" main m-1 p-2 my-auto" aria-current="page" href="#">HOME <i
                                    class="fa-solid fa-angle-down icon-down"></i></a>
                            </div>

                            <ul class="dropdown-menu ">
                                <li><a class="dropdown-item" href="#">Home 1</a></li>
                                <li><a class="dropdown-item" href="#">Home 2</a></li>
                                <li><a class="dropdown-item" href="#">Home 3</a></li>

                            </ul>

                        </li>

                        <li class="nav-item ">
                            <a class="nav-link m-1 p-2" aria-current="page" href="#">ABOUT</a>
                        </li>

                        <li class="nav-item ">
                            <a class="nav-link  m-1 p-2 " aria-current="page" href="#">ROOMS & SUITES <i
                                class="fa-solid fa-angle-down icon-down"></i></a>
                            <ul class="dropdown-menu ">
                                <li><a class="dropdown-item" href="#">Rooms & suites 1</a></li>
                                <li><a class="dropdown-item" href="#">Rooms & suites 2</a></li>
                                <li><a class="dropdown-item" href="#">Rooms & suites 3</a></li>

                            </ul>
                        </li>

                        <li class="nav-item ">
                            <a class="nav-link  m-1 p-2 " aria-current="page" href="#">PAGES <i
                                class="fa-solid fa-angle-down icon-down"></i></a>
                            <ul class="dropdown-menu ">
                                <li><a class="dropdown-item" href="#">Pages 1</a></li>
                                <li><a class="dropdown-item" href="#">Pages 2</a></li>
                                <li><a class="dropdown-item" href="#">Pages 3</a></li>

                            </ul>
                        </li>

                        <li class="nav-item ">
                            <a class="nav-link m-1 p-2 " aria-current="page" href="#">SHOP <i
                                class="fa-solid fa-angle-down icon-down"></i></a>
                            <ul class="dropdown-menu ">
                                <li><a class="dropdown-item" href="#">Shop 1</a></li>
                                <li><a class="dropdown-item" href="#">Shop 2</a></li>
                                <li><a class="dropdown-item" href="#">Shop 3</a></li>

                            </ul>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link m-1 p-2 " aria-current="page" href="#">NEWS <i
                                class="fa-solid fa-angle-down icon-down"></i></a>
                            <ul class="dropdown-menu ">
                                <li><a class="dropdown-item" href="#">News 1</a></li>
                                <li><a class="dropdown-item" href="#">News 2</a></li>
                                <li><a class="dropdown-item" href="#">News 3</a></li>

                            </ul>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link  m-1 p-2 " aria-current="page" href="#">CONTACT </a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    )
}

export default Header;