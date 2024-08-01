import { Component } from "react";
import "./index.css"



class Checkout extends Component {

    state = {
        contactInformation : {
            name:"", 
            email:"",
            phone :""
        }, 
        paymentDetails : {
            cardNumber:"",
            expiry:"",
            cvv : ""
        }
    }

    onSubmitForm = (event)=> {
        event.preventDefault()
    }


    render(){

        const {cartDetails} = this.props 

        const total = cartDetails.reduce((total,item)=> total + item.price * item.quantity , 0);
        return (
            <form className="checkout-main-page" onSubmit = {this.onSubmitForm}>
                <h2>Checkout</h2>
                <div>
                    <h3>Contact Information</h3>
                    <div className="enter-inputs">
                        <label className="labeling">Name</label>
                        <input type ="text" placeholder="Enter Your Name" className="enter-checkout-data" required />
                    </div>

                    <br/>
                    
                    <div className="enter-inputs">
                        <label className="labeling">Email</label>
                        <input type ="email" placeholder="Enter Your Email " className="enter-checkout-data" required/>
                    
                    </div>
                    <br/>
                    <div className="enter-inputs">
                        <label className="labeling">Phone Number</label>
                        <input type ="number" placeholder="Enter your phone Number" className="enter-checkout-data" required/>
                    </div>
                </div>
                <div>
                    <h3>Payment Details</h3>
                    <div className="enter-inputs">
                        <label className="labeling">Card Number</label>
                        <input type ="number" placeholder="Enter Card Number" className="enter-checkout-data" required />
                    </div>
                    <br/>
                    <div className="enter-inputs">                    
                        <label className="labeling">Valid through</label>
                        <input type = "text" placeholder="Enter expiration Date" className="enter-checkout-data" required/>
                    </div>
                    <br/>
                    <div className="enter-inputs">

                        <label className="labeling">CVV</label>
                        <input type ="number" placeholder="Enter CVV" className="enter-checkout-data" required />
                    </div>

                </div>
                <br/>
                <br/>
                <p>Total amount to be paid <b>${total}/month  </b></p>
                <button className="place-order-button">Place Order</button>

            </form>
            
        )
    }
}


export default Checkout