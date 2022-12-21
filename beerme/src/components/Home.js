import React from "react";
import { useState, useEffect } from "react";
import "../styles/app.css";
import NavBar from "./NavBar";
import BrewPicOne from "./BrewPicOne";
import ResultsContainer from "./ResultsContainer";
import API from "../utils/API";
import axios from "axios";

function App() {

    // Set state for the search result and the search query
    // Im using our osu folder 20(react).20(fetching_data).Solved.components.OmbdContainer as reference for passing the api data from a parent component down to child components
    const [brewData, setBrewData] = useState([]);

    const searchBrewery = async (query) => {
        const response = await axios.get(`https://api.openbrewerydb.org/breweries?by_city=${query}&per_page=5`)

        if(response) {
            const result = response.data
            console.log(result)
        }
    }

    useEffect(() => {
        searchBrewery('columbus');
    }, []);

    const {
        Name = '',
        Street = '',
    } = brewData

    return (
        <div>
            <NavBar />
            <BrewPicOne />
            <ResultsContainer />
            <footer>Footer</footer>
        </div>
    )
}

export default App;