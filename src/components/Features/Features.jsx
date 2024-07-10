import Card from '../Cards/Card'
import './Features.css'
import work from '../../assets/Work.png'
import moon from '../../assets/moon.png'
import search from '../../assets/Search.png'
import send from '../../assets/Send2.png'

const Features = () => {
    return (
        <div className="features">
            <div className="container">
                <div className="row row-features">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <h2 className="text-left">
                            We <span className="provide-title">provide</span> excellent <br />
                            <span className="features-title"> Features</span> from us
                        </h2>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 d-flex align-items-center">
                        <p className='title-text'>
                            We shall never deny a guest, even the most ridiculous
                            request. We provide excellent features from us
                        </p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <Card
                            img={work}
                            title="Job Search"
                            description="Kerjarodi.com is an application for job seekers and workers who prioritize user comfort and the quality of services provided by our team" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <Card
                            img={search}
                            title="Worker Search"
                            description="Kerjarodi.com is an application for job seekers and workers who prioritize user comfort and the quality of services provided by our team" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <Card
                            img={send}
                            title="Message"
                            description="Kerjarodi.com is an application for job seekers and workers who prioritize user comfort and the quality of services provided by our team" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <Card
                            img={moon}
                            title="Dark mode theme"
                            description="Kerjarodi.com is an application for job seekers and workers who prioritize user comfort and the quality of services provided by our team" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features