import "../styles/app.css"
import React, { useState, useEffect } from 'react'


function Home() {

    useEffect(() => {
        fetch(`https://api.openbrewerydb.org/breweries?by_state=ohio&by_city=columbus&per_page=5`)
        .then(response => {
            if (response.ok) {
                console.log(response.json())
            }
            throw response;
        })
        // type: cors pertains to securtiy measure from the site that hosts the fetch calls
        .catch(error => {
            console.error("Error fetching data: ", error)
        })
    }, [])

    return (
        <div>
            <h1 className="home">Lets Build This App!</h1>
        </div>
    );
}

export default Home;