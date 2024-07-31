
import "./index.css"

const PropertyCards = (props)=> {
    const {property,onBookNowButton} = props 
    


    
    return (
        <div className="each-card">
        <img src = {property.image} alt = "Not loading" className="each-image "/>
        <h1>{property.title}</h1>
        <p>{property.description}</p>
        <p>Location : {property.location}</p>
        <div className="price-button-container">
        <p>Price : <b>${property.price} </b></p>
        <button className="book-now-button" onClick = {()=>onBookNowButton(property)}>Book Now</button>
        </div>
        </div>
    )
}



export default PropertyCards