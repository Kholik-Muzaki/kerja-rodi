import { useEffect } from "react"
import Navbar from "../Navbar/Navbar"
import "./Header.css"
import AOS from "aos"
import "aos/dist/aos.css"

const Header = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <header>
            <Navbar />
            <div data-aos="fade-up" data-aos-duration="2000">
                <div className="content-header">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-sm-12 col-md-12 col-lg-6 col-header">
                                <h2>
                                    Easy to find a <span className="job-title">Job</span> and <br />
                                    <span className="worker-title"> Worker </span> with Us
                                </h2>
                                <p>
                                    We help you find the right job or worker for you. Don't worry, we provide
                                    satisfactory service for you. Let's try it now!
                                </p>
                                <button className="btn btn-get-started d-flex flex-row justify-content-around  align-items-center">
                                    <span>Get Started</span>
                                    <i className="bx bx-right-arrow-alt bx-sm" />
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header