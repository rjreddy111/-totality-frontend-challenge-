


import "./index.css"


const PropertyCards = (props)=> {
    const {property,onBookNowButton} = props 
    


    
    return (
        <div className="each-card">
            <img src = {property.image} alt = "Not loading" className="each-image "/>
            <div className="content-container">
                <h3>{property.title}</h3>
                <p>{property.description}</p>
                <p className="location">Location : <b>{property.location}</b></p>
                <div className="price-button-container">
                    <div className="left-sontainer">
                        <p className="bedrooms">Bedrooms : <b>{property.bedrooms}</b></p>
                        <p>Bathroom :<b> {property.bathrooms}</b></p>
                        <h5>Amenities</h5>
                        <ul className="aminities-container">
                            {property.amenities.map((eachAmenity)=> (
                                <li className="each-emities">{eachAmenity}</li>
                            ))}
                        </ul>
                    <p className="price-color">Price : <b>${property.price}/month </b></p>
                    </div>
                    <button className="book-now-button" onClick = {()=>onBookNowButton(property)}>Book Now</button>
                </div>
            </div>
        
        </div>
    )
}



export default PropertyCards