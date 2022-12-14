import "../styles/app.css";
// import React, {useState, useEffect} from 'react'
import SearchResultsContainer from "./SearchResultContainer";
import SearchForm from "./SearchForm";


function App() {

return(
    <div>
        <h1>HERE ARE SOME BREWERIES</h1>
        <SearchForm />
        <SearchResultsContainer/>
    </div>
)
    }

export default App;