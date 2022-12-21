import axios from 'axios';

// Using axios, we create a search method that is specific to our use case and export it at the bottom

const getBreweryApiWithAxios = async (query) => {
    axios.get(`https://api.openbrewerydb.org/breweries?by_city=${query}&per_page=1`);
}

export default { getBreweryApiWithAxios };


    // api function calls here maybe or in seperate folder?? Im thinking seperate folder
    // Fetch that sends call for breweries based off users city input
    // const fetchBreweries = async () => {
    //     const r = await fetch(`https://api.openbrewerydb.org/breweries?by_city=${citySearch}&per_page=10`)
    //     setBrewery(await r.json())
    // }