import "../styles/app.css";
// import React, {useState, useEffect} from 'react'
import SearchResultsContainer from "./SearchResultContainer";


function App() {
    // const filterBrew = value.replace(/^[0-9a-zA-Z]*$/, "")
    // const [brewery, setBrewery] = useState([]);
    // // api function calls here maybe or in seperate folder?? Im thinking seperate folder
 
    // useEffect(() => {
    //     url('https://api.openbrewerydb.org')
    // }, [])

    // const url = async () => {
    //     const r = await fetch('https://api.openbrewerydb.org/breweries?by_state=ohio&by_city=columbus&per_page=10')
    //     setBrewery(await r.json())
    // }

    // return(
    //     <div className="Home">
    //         <div>
    //     {brewery.map((data) => {
    //         return(
    //             <li className="Name" key={data.name}> {data.name} | {data.street}</li>
    //         )
    //     })}
    //     </div>
    //     </div>
    // );
return(
    <div>
        <h1>HERE ARE SOME BREWERIES</h1>
        <SearchResultsContainer/>
    </div>
)
    }

export default App;