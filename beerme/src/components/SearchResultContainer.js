import React, { useEffect } from 'react';
import API from '../utils/API'
import { useEffect } from 'react';

const SearchResultsContainer = () => {
    
}

export default SearchResultsContainer;



useEffect(() => {
    // Fetches breweries by state and city
    // TODO: integrate location access to allow latitude and longitude searches (future development)
    API.search
    .then(response => {
        if(response.ok) {
            console.log(response.json())
        }
        throw response;
    })
    // type: cors pertains to securtiy measure from the site that hosts the fetch calls
    .catch(error => {
        console.error("Error fetching data: ", error)
    }, [])
})