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

  onClickHome = ()=> {
    this.props.navigate("/")
  }
    

    render(){
        const {cartDetails,onDecrease,onIncrease} = this.props
        console.log(cartDetails,onIncrease)

        const totalCost = cartDetails.reduce((total,eachItem)=> total  + eachItem.price * eachItem.quantity , 0)
        return (

          <>
         
          {cartDetails.length ===0 ? (
            
            
            <div className="no-item-cart">
              <h4>No items present in the cart  </h4>
              <img src = "https://blogzine.webestica.com/assets/images/icon/empty-cart.svg" alt ="no items" className="no-cart"/>
              <buttton className="home-button" onClick={this.onClickHome}>Go To Home</buttton>
            </div>
            ): 
          
          
          <div className="main-booking-cart">    
            <h1>Your Booking</h1>
            <ul className="booking-cart-containers">
                {cartDetails.map((eachProperty)=> (
                    <BookingCard key = {eachProperty.id} propertyDetails = {eachProperty} onDecrease = {onDecrease} onIncrease={onIncrease} />

                ))}
                
            </ul>
            <p className="total-cost">Totol cost : <b>${totalCost}/month </b></p>
            <button className="checkout-button" onClick={this.onClickCheckput}>Checkout</button>
            </div>
        

         }
        </>
          
        
          

         
           
        )
    }
}



export default withNavigate(BookingCartDetails)