
import { Component } from 'react';
import {v4 as uuidv4} from "uuid"
import {BrowserRouter ,Routes,Route,} from "react-router-dom"

import './App.css';


import PropertyListing from "./components/PropertyListing"
import FilterOption from './components/FilterOption';
import BookingCartDetails from "./components/BookingCartDetails"
import Checkout from "./components/Checkout"
import Header from "./components/Header"


const allProperties = [
  {
    "id": uuidv4(),
    "title": "Luxury Apartment in Downtown",
    "description": "A beautiful and spacious luxury apartment located in the heart of downtown. Close to all amenities.",
    "price": 250,
    "location": "Downtown",
    "image": "https://commoncdn.entrata.com/images/thumbNailer.php?src=/media_library/3156/54985bf6749b1668.jpg&w=2048&h=1352",
    "bedrooms": 3,
    "bathrooms": 2,
    "quantity" :1,
    "amenities": ["Wi-Fi", "Air Conditioning", "Pool", "Gym"]
  },
  {
    "id": uuidv4(),
    "title": "Cozy Cottage Near Beach",
    "description": "A charming cottage near the beach, perfect for a relaxing getaway. Enjoy the sea breeze and beautiful sunsets.",
    "price": 150,
    "location": "Beachside",
    "image": "https://i.pinimg.com/originals/ed/0e/37/ed0e3756496c832a11019658e69a0d43.jpg",
    "bedrooms": 2,
    "bathrooms": 1,
    "quantity" :1,
    "amenities": ["Wi-Fi", "Free Parking", "Pet Friendly"]
  },
  {
    "id": uuidv4(),
    "title": "Modern Loft with City View",
    "description": "A stylish loft with modern furnishings and a stunning city view. Ideal for urban explorers.",
    "price": 180,
    "location": "City Center",
    "image": "https://www.renedekker.co.uk/blog/wp-content/uploads/2015/09/Loft-Apartment.jpg",
    "bedrooms": 1,
    "bathrooms": 1,
    "quantity" :1,
    "amenities": ["Wi-Fi", "Elevator", "Kitchen"]
  },
  {
    "id": uuidv4(),
    "title": "Spacious Villa with Private Pool",
    "description": "A spacious villa with a private pool and garden. Perfect for family vacations or group stays.",
    "price": 400,
    "location": "Suburbs",
    "image": "https://media-cdn.tripadvisor.com/media/vr-splice-j/04/ca/fc/5e.jpg",
    "bedrooms": 4,
    "bathrooms": 3,
    "quantity" :1,
    "amenities": ["Wi-Fi", "Private Pool", "BBQ Grill", "Garage"]
  },
  {
    "id": uuidv4(),
    "title": "Chic Studio in Historic District",
    "description": "A chic studio located in the historic district. Close to museums, restaurants, and shops.",
    "price": 120,
    "location": "Historic District",
    "image": "https://img1.10bestmedia.com/Images/Photos/348518/FLWPlayroomMural_55_660x440.jpg",
    "bedrooms": 1,
    "bathrooms": 1,
    "quantity" :1,
    "amenities": ["Wi-Fi", "Air Conditioning", "Laundry"]
  },
  {
    "id": uuidv4(),
    "title": "Mountain Cabin Retreat",
    "description": "A cozy cabin in the mountains, perfect for a quiet retreat surrounded by nature.",
    "price": 220,
    "location": "Mountain",
    "image": "https://i.pinimg.com/originals/71/e8/ca/71e8ca1201091308f765c9c0e644a13e.jpg",
    "bedrooms": 3,
    "bathrooms": 2,
    "quantity" :1,
    "amenities": ["Fireplace", "Hot Tub", "Mountain View", "Wi-Fi"]
  },
  {
    "id": uuidv4(),
    "title": "Urban Condo with Rooftop Deck",
    "description": "A modern condo with a rooftop deck offering stunning city views. Close to nightlife and shopping.",
    "price": 200,
    "location": "Uptown",
    "image": "https://i.pinimg.com/originals/0d/cd/ee/0dcdee283a046c87f07eb9715803c993.jpg",
    "bedrooms": 2,
    "bathrooms": 1.5,
    "quantity" :1,
    "amenities": ["Wi-Fi", "Rooftop Deck", "Gym", "Garage"]
  },
  {
    "id": uuidv4(),
    "title": "Beachfront Bungalow",
    "description": "A quaint bungalow right on the beach. Wake up to the sound of waves and enjoy direct beach access.",
    "price": 300,
    "location": "Beachfront",
    "image": "https://www.phiphiholidayresort.com/wp-content/uploads/2020/12/Beach-Front-Bungalow3.jpg",
    "bedrooms": 3,
    "bathrooms": 2,
    "quantity" :1,
    "amenities": ["Wi-Fi", "Beach Access", "Pet Friendly", "Outdoor Shower"]
  },
  {
    "id": uuidv4(),
    "title": "Country House with Large Garden",
    "description": "A spacious country house with a large garden and beautiful rural views. Ideal for a peaceful retreat.",
    "price": 180,
    "location": "Countryside",
    "image": "https://i.pinimg.com/originals/1a/07/a1/1a07a17b9915fa21867fbc2efa7bb5b6.jpg",
    "bedrooms": 4,
    "bathrooms": 2,
    "quantity" :1,
    "amenities": ["Wi-Fi", "Garden", "Fireplace", "Pet Friendly"]
  },
  {
    "id": uuidv4(),
    "title": "Penthouse Suite with Skyline View",
    "description": "A luxurious penthouse suite with panoramic skyline views. Perfect for a high-end urban experience.",
    "price": 500,
    "location": "Downtown",
    "image": "https://c8.staticflickr.com/9/8827/27929620863_dea876eb45_c.jpg",
    "bedrooms": 3,
    "bathrooms": 3,
    "quantity" :1,
    "amenities": ["Wi-Fi", "Elevator", "Balcony", "Concierge"]
  },
  {
    "id": uuidv4(),
    "title": "Rustic Barn House",
    "description": "A unique barn house with rustic charm and modern amenities. A great choice for a country experience.",
    "price": 160,
    "location": "Rural Area",
    "image": "https://www.mymove.com/wp-content/uploads/2020/07/rustic-barn-conversion-outdoors.jpg",
    "bedrooms": 2,
    "bathrooms": 1,
    "quantity" :1,
    "amenities": ["Wi-Fi", "Fireplace", "Pet Friendly", "Garden"]
  },
  {
    "id": uuidv4(),
    "title": "Elegant Mansion with Tennis Court",
    "description": "An elegant mansion featuring a private tennis court and extensive grounds. Ideal for large gatherings.",
    "price": 800,
    "location": "Exclusive Suburb",
    "image": "https://i.pinimg.com/736x/15/ef/17/15ef176516f46094457b76e02a848fa8.jpg",
    "bedrooms": 6,
    "bathrooms": 5,
    "quantity" :1,
    "amenities": ["Wi-Fi", "Tennis Court", "Pool", "Garage"]
  },
  {
    "id": uuidv4(),
    "title": "Secluded Cottage in Woods",
    "description": "A peaceful cottage nestled in the woods, offering privacy and tranquility. Perfect for nature lovers.",
    "price": 140,
    "location": "Forest",
    "image": "https://i.pinimg.com/originals/f4/b7/d8/f4b7d8cc6e7a6452549bfdc941e0a881.jpg",
    "bedrooms": 2,
    "bathrooms": 1,
    "quantity" :1,
    "amenities": ["Fireplace", "Hiking Trails", "Pet Friendly", "Wi-Fi"]
  },
  {
    "id": uuidv4(),
    "title": "Modern Houseboat on Lake",
    "description": "A unique houseboat experience with all modern comforts, located on a scenic lake.",
    "price": 260,
    "location": "Lakeside",
    "image": "https://i.pinimg.com/originals/c7/f3/b9/c7f3b901e6161dddaa513874aad04457.jpg",
    "bedrooms": 2,
    "bathrooms": 2,
     "quantity" :1,
    "amenities": ["Wi-Fi", "Waterfront", "Fishing", "Kayaking"]
  },
  {
    "id": uuidv4(),
    "title": "Historic Townhouse with Garden",
    "description": "A beautifully restored townhouse with a private garden. Close to historic landmarks and cultural sites.",
    "price": 220,
    "location": "Historic District",
    "image": "https://i.pinimg.com/originals/95/17/ae/9517ae560df7c1fcc347e58133c55c23.jpg",
    "bedrooms": 3,
    "bathrooms": 2,
    "quantity" :1,
    "amenities": ["Wi-Fi", "Garden", "Historic Charm", "Pet Friendly"]
  }
]




class App extends Component{
 state = {
  allProperties :allProperties,
   
  cartDetails : [] 

 }

 handleBookingProperty = (property)=> {
  this.setState((prevState)=> {
    const existingCartItem = prevState.cartDetails.find(item=> item.id ===property.id);
    if (existingCartItem) {
      return {
        cartDetails: prevState.cartDetails.map(item => item.id ===property.id ? {...item, quantity:item.quantity+1} : item) 
      };
    }
      else {
        return {
          cartDetails: [...prevState.cartDetails,{...property,quantity:1}]
        };
      } 
  });
 };

 onDecreaseQuantity = (property)=> {
  this.setState((prevState)=> ({
    cartDetails:prevState.cartDetails.map((eachItem)=> eachItem.id===property.id && eachItem.quantity>1 ? {...eachItem.quantity-1} : eachItem)
  }))
 }

 onIncreaseQuantity = (property)=> {
  this.setState((prevState)=> ({
    cartDetails:prevState.cartDetails.map((eachItem)=> eachItem.id ===property.id ? {...eachItem.quantity+1}: eachItem),
  }));
 }


 onfilterProperty = (name,value)=> {
  const {allProperties} = this.state 
   

  
    const getResults = allProperties.filter((eachPropperty)=> eachPropperty.location.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
    
  
  
  this.setState({allProperties:getResults})
 }



  render (){
    const {cartDetails,allProperties} = this.state
    console.log(allProperties)
    return(
     
      <>
      <Header />
      
        
        
        
       
          <Routes>
            <Route   path = "/"  element={
              <PropertyListing
                allProperties={allProperties}
                onBookNowButton={this.handleBookingProperty} 
                filter = {this.onfilterProperty}
              />
            } /> 

             <Route path = "/cart"  element={
              <BookingCartDetails
                cartDetails={cartDetails}
                onDecrease={this.onDecreaseQuantity}
                onIncrease={this.onIncreaseQuantity}
              />
            }
          />
             <Route path = "/checkout" element={
              <Checkout
                cartDetails={cartDetails}
              />
            }
          />
            
          
        </Routes>
        
     
      </>

    )
  }
}
 


export default App