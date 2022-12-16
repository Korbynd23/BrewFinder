import React, { useState, useEffect } from 'react'
// import API from '../utils/API'     ** still want to nest this API call in a seperate folder


const SearchContainer = () => {

    // UseState for input city search
    const [citySearch, setCitySearch] = useState('');
    const [brewery, setBrewery] = useState([]); 

    // Handle submit for submitting citySearch text value 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(citySearch)
        fetchBreweries();
    }

    // api function calls here maybe or in seperate folder?? Im thinking seperate folder
    // Fetch that sends call for breweries based off users city input
    const fetchBreweries = async () => {
        const r = await fetch(`https://api.openbrewerydb.org/breweries?by_city=${citySearch}&per_page=10`)
        setBrewery(await r.json())
    }

    return (
        <div className="Home">
            <form onSubmit={handleSubmit}>
                <label>Search by City:</label>
                <input type="text" value={citySearch} required onChange={(e) => setCitySearch(e.target.value)} />
                <input type="submit" value="searchCity" />
            </form>
            <div>
                {brewery.map((data) => {
                    console.log(data)
                    return (
                        <li className="Name" key={data.name}> <a href="{data.website_url}">{data.name} | {data.street} | {data.brewery_type}</a></li>
                    )
                })}
            </div>
        </div>
    );
}

export default SearchContainer;