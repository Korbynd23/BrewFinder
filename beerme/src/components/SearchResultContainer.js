import React, { useState, useEffect } from 'react'

const SearchResultsContainer = () => {

    const [brewery, setBrewery] = useState([]);
    // api function calls here maybe or in seperate folder?? Im thinking seperate folder

    useEffect(() => {
        url('https://api.openbrewerydb.org')
    }, [])

    const url = async () => {
        const r = await fetch('https://api.openbrewerydb.org/breweries?by_state=ohio&by_city=columbus&per_page=10')
        setBrewery(await r.json())
    }

    return (
        <div className="Home">
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

export default SearchResultsContainer;



useEffect(() => {
    // Fetches breweries by state and city
    // TODO: integrate location access to allow latitude and longitude searches (future development)
    API.search
        .then(response => {
            if (response.ok) {
                console.log(response.json())
            }
            throw response;
        })
        // type: cors pertains to securtiy measure from the site that hosts the fetch calls
        .catch(error => {
            console.error("Error fetching data: ", error)
        }, [])
})