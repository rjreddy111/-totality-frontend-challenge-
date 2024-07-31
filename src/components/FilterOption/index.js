import "./index.css"

const FilterOption = (props)=> {
    const {filter} = props 

    const filterUpdateChange = (e)=> {
        
        filter(e.target.name,e.target.value)
    }

    return (
        <div className="filter-contaienr">
        <label>Filter Option:</label>
        <div className="Filter-options-container">
        <input type ="text" name="location" placeholder="Location" className="each-filter" onChange= {filterUpdateChange}/>
        <input type ="number" name = "min price" placeholder="Min Price"  className="each-filter"  onChange= {filterUpdateChange}/>
        <input type = "number" name ="max price" placeholder="Max Price" className="each-filter"  onChange= {filterUpdateChange}/>
        <input type ="number" name ="no of bedrooms" placeholder="No of bedrooms"  className="each-filter"  onChange= {filterUpdateChange} />
        </div>

        </div>
    )
}



export default FilterOption