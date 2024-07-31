
import "./index.css"

const BookingCard =(props)=> {
    const {propertyDetails,onDecrease,onIncrease} = props 
    console.log(propertyDetails.quantity)
    console.log(propertyDetails.id)

    return (
        <div className="cart-card">
            
            <img src = {propertyDetails.image} alt = "booking property" className="booking-images" />
            <div  className="each-cart-item">
            <h5>{propertyDetails.title}</h5>
            
            
            <p>Price : ${propertyDetails.price} </p>  
            <div className="quantity-buttons-container">
                <button className="quantity-button-reduce" onClick={()=>onDecrease(propertyDetails)}>-</button>  
                                                 {propertyDetails.quantity} 
                <button className="quantity-button-increase" onClick={()=>onIncrease(propertyDetails)}>+</button>
                                                </div>
            </div>
        </div>
    )
}


export default BookingCard