import "../styles/app.css";
import React, { useState } from 'react'
// import SearchResultsContainer from "./SearchResultContainer";
import SearchForm from "./SearchForm";

function Home() {

    // Set state for the search result and the search query

    // Handler for input changes to the search form

    // Handler for what happens when the search form is submitted

    return (
        <div>
            <h1 className="home">Lets Build This App!</h1>
            <SearchForm />
        </div>
    );
}

export default Home;