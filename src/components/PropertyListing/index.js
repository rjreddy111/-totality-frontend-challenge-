import {Component} from "react"

import PropertyCards from "../PropertyCards"

import "./index.css"
import FilterOption from "../FilterOption"

class PropertyListing extends Component {

    

    render(){
        const {allProperties,onBookNowButton,filter} = this.props 
        console.log(allProperties)
        return (
            <>   
            <FilterOption filter = {filter}/>
            <div className="property-list-main-page">
                <ul className="unorder-property-list">
                {allProperties.map((eachProperties)=> (
                    <PropertyCards key = {eachProperties.id} property = {eachProperties} onBookNowButton={onBookNowButton} />

                ))}
                </ul>

            </div>
            </>

        )
    }
}


export default PropertyListing