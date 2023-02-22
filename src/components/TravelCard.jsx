import React from 'react'
import LocationImg from "../assets/LocationImg.png"
import LocationIcon from "../assets/LocationIcon.png"

export default function TravelCard(props) {
  return (
    <div className="travelCard">
        <img src={props.imageUrl} className="travelCard--img" />
        {/* <div style={{"background": "orange", "width": "320px", "height": "150px", "borderRadius": "5px"}}></div> */}
        <div>
            <div>
                <img src={LocationIcon} className="travelCard--location-img" />
                <span className="travelCard--location">{props.location}</span>
                <a href={props.googleMapsUrl} className="travelCard--google-map">View on Google Maps</a>
            </div>
            <h2 className="travelCard--title">{props.title}</h2>
            <h4 className="travelCard--date">
                <span className="travelCard--start-date">{props.startDate}</span> - 
                <span className="travelCard--end-date">{props.endDate}</span>
            </h4>
            <p className="travelCard--description">{props.description}</p>
        </div>
    </div>
  )
}
