import "../styles/app.css";
import React, {useState, useEffect} from 'react'

function Home() {
    // api function calls here maybe or in seperate folder?? Im thinking seperate folder
    // const 
    
    useEffect(() => {
        // Fetches breweries by state and city
        // TODO: integrate location access to allow latitude and longitude searches
        fetch('https://api.openbrewerydb.org/breweries?by_state=ohio&by_city=columbus&per_page=10')
        .then(response => {
            if(response.ok) {
                console.log(response.json())
            }
            throw response;
        })
        .catch(error => {
            console.error("Error fetching data: ", error)
        }, [])
    })

    return (
        <div>
            <h1 className="home">Lets Build This App!</h1>
        </div>
    );
}

export default Home;