import { useEffect } from 'react'
import './Card.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Card = ({ img, title, description }) => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div data-aos="fade-up" data-aos-duration="3000">
            <div className="card mb-4">
                <div className="card-body">
                    <div className="border-img">
                        <img src={img} alt="" className="card-img-top" />
                    </div>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card