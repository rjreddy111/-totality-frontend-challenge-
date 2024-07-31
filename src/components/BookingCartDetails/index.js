import { Component } from "react";
import { useNavigate } from "react-router-dom";
import BookingCard from "../BookingCard"



import "./index.css"


const withNavigate = (WrappedComponent) => {
    return (props) => {
      const navigate = useNavigate();
      return <WrappedComponent navigate={navigate} {...props} />;
    };
  };



class BookingCartDetails extends Component {
    
  onClickCheckput =()=> {
    this.props.navigate("/checkout")
  }

    

    render(){
        const {cartDetails,onDecrease,onIncrease} = this.props
        console.log(cartDetails)

        const totalCost = cartDetails.reduce((total,eachItem)=> total  + eachItem.price * eachItem.quantity , 0)
        return (
            <div className="main-booking-cart">
                <h1>Your Booking</h1>
                <ul className="booking-cart-containers">
                    {cartDetails.map((eachProperty)=> (
                        <BookingCard key = {eachProperty.id} propertyDetails = {eachProperty} onDecrease = {onDecrease} onIncrease={onIncrease} />

                    ))}
                    
                </ul>
                <p className="total-cost">Totol cost : <b>${totalCost} </b></p>
                <button className="checkout-button" onClick={this.onClickCheckput}>Checkout</button>
            

            </div>
        )
    }
}



export default withNavigate(BookingCartDetails)