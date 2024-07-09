import './Card.css'
const Card = ({ img, title, description }) => {
    return (
        <div className="card mb-4">
            <div className="card-body">
                <div className="border-img">
                    <img src={img} alt="" className="card-img-top" />
                </div>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    )
}

export default Card