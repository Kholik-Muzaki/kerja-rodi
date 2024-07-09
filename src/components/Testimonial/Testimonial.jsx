import React, { useState } from 'react';
import './Testimonial.css';
import kholik1 from '../../assets/kholik1.png'
import kholik2 from '../../assets/kholik2.png'
2
const Testimonial = () => {
    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const testimonials = [
        {
            name: "Cameron Williamson",
            title: "Founder Gojek Corp.",
            image: kholik1,
            text: "Kerjarodi.com is an application for job seekers and workers who prioritize user comfort and the quality of services provided by our team"
        },
        {
            name: "Kholik Muzaki",
            title: "Founder Gojek Corp.",
            image: kholik2,
            text: "Kerjarodi.com is an application for job seekers and workers who prioritize user comfort and the quality of services provided by our team"
        },
    ];

    const nextTestimonial = () => {
        setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setTestimonialIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const { name, title, image, text } = testimonials[testimonialIndex];

    return (
        <div className="container container-testimonial">
            <div className="row">
                <div className="col-4">
                    <img src={image} alt={name} className='img-testimonial' />
                </div>
                <div className="col-8">
                    <h2 className='h2-title'>What do they <span className='h2-yellow'>think about</span> <br /> <span className='h2-blue'>our App?</span></h2>
                    <h3 className='h3-title mt-5'>{name}</h3>
                    <h6 className='h6-title'>{title}</h6>
                    <div className="card-testimonial">
                        <p>{text}</p>
                    </div>
                    <div className="navigation-buttons">
                        <button onClick={prevTestimonial} className="nav-button" disabled={testimonialIndex === 0}>&lt;</button>
                        <button onClick={nextTestimonial} className="nav-button" disabled={testimonialIndex === testimonials.length - 1}>&gt;</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
