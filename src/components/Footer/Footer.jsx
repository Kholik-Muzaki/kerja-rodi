import './Footer.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div data-aos="fade-up" data-aos-duration="3000">
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-3">
                            <h2 className='h2-footer mb-3'><span className="k-brand-footer">K</span>erja<span className="r-brand-footer">R</span>odi.com </h2>
                            <p className='p-footer-brand'>Over 8,912,000 Satisfied
                                with our appearance
                            </p>
                            <div className="sosial-media">
                                <i className='bx bxl-facebook-square bx-tada-hover bx-md'></i>
                                <i className='bx bxl-twitter bx-tada-hover bx-md'></i>
                                <i className='bx bxl-linkedin-square bx-tada-hover bx-md' ></i>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-2">
                            <h3 className='h3-footer mb-3'>Resource</h3>
                            <p className='p-footer-link'>Knowledgebase</p>
                            <p className='p-footer-link'>Online Doc</p>
                            <p className='p-footer-link'>Redundant</p>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-2">
                            <h3 className='h3-footer mb-3'>About Us</h3>
                            <p className='p-footer-link'>Knowledgebase</p>
                            <p className='p-footer-link'>Online Doc</p>
                            <p className='p-footer-link'>Redundant</p>
                        </div>
                        <div className="col-sm-12 col-md-5 col-lg-5">
                            <h3 className='h3-footer mb-3'>Subscribe to new Newsletter</h3>
                            <p className='p-footer-brand'>
                                What are you waiting for? Subscribe and follow our progress!
                            </p>
                            <div className="row">
                                <div className="col-8">
                                    <input type="text" className="form-control" placeholder="Enter your email" />
                                </div>
                                <div className="col-4">
                                    <button type="submit" className="btn btn-sub">Subscribe Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="text-center mt-5">
                            <p> &copy; Copyright 2022
                                <span className="k-brand-footer"> K</span>erja<span className="r-brand-footer">R</span>odi.com
                            </p>
                        </div>
                    </div>
                </div>
            </footer >
        </div>

    )
}

export default Footer