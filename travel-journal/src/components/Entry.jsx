export default function Entry(props) {
    return (
        <article className="trip-panel">
            <div className="img-box">
                <img src={props.mainImage.src} alt={props.mainImage.alt} />
            </div>
            { /* Content Panel */ }
            <div className="content-box">
                <div className="location-box">
                    <img src="/images/map-icon.png" className="map-icon" alt="" />
                    <p>{props.country}</p>
                    <a href={props.googleMap} target="_blank" >View on Google Map </a>

                </div>

                <div className="trip-detail-box">
                    <h3>{props.location}</h3>
                    <p><span>{props.startDate}</span> -<span>{props.endDate}</span> </p>
                    <div className="trip-description">
                        <p>{props.tripDetails}</p>
                    </div>
                </div>


            </div>
        </article>
    )
}