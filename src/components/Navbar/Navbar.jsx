import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand text-light" href="#">
                        <span className="k-brand">K</span>erja<span className="r-brand">R</span>odi.com
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="menu-left">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        About us
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Featured
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Testimonial
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="menu-right">
                            <form className="d-flex" role="search">
                                <button className="btn btn-sign-in me-3" type="submit">
                                    Sign in
                                </button>
                                <button className="btn btn-sign-up" type="submit">
                                    Sign up
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar