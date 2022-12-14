import axios from 'axios';

// Using axios, we create a search method that is specific to our use case and export it at the bottom
const search = () => 
    axios.get(`https://api.openbrewerydb.org/breweries?by_state=ohio&by_city=columbus&per_page=10`)

export default { search };