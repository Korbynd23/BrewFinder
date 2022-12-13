import "../styles/app.css"
import React, { useState, useEffect } from 'react'


function Home() {
    // api function calls here maybe or in seperate folder?? Im thinking seperate folder

    useEffect(() => {
        fetch(`https://api.openbrewerydb.org/breweries?by_city=columbus&per_page=3`)
        .then(response => {
            if (response.ok) {
                console.log(response.json())
            }
            throw response;
        })
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