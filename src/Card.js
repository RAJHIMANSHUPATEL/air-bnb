
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab)

function Card(props) {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    }
    else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={props.img} alt="img1" className="card-img" />
            <div className="card-stats">
                <FontAwesomeIcon icon="fa-solid fa-star" className='star-icon' />
                <span>{ props.rating}</span>
                <span className='grey'>{props.reviewCount }</span>
                <span className='grey'>{props.location}</span>
            </div>
            <p>{props.title }</p>
            <p><span className='bold'>From {props.price }</span> / person</p>
        </div>
    )
}

export default Card;