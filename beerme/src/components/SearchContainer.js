import React, { useState } from 'react';

const SearchContainer = () => {

    // UseState for input city search
    const [citySearch, setCitySearch] = useState('');

    // Handle submit for submitting citySearch text value 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(citySearch)
    }

    return (
        <div className="Home">
            <form onSubmit={handleSubmit}>
                <label>Search by City:</label>
                <input type="text" value={citySearch} required onChange={(e) => setCitySearch(e.target.value)} />
                <input type="submit" value="searchCity" />
            </form>
            {/* <div>
                {brewery.map((data) => {
                    console.log(data)
                    return (
                        <li className="Name" key={data.name}> <a href="{data.website_url}">{data.name} | {data.street} | {data.brewery_type}</a></li>
                    )
                })}
            </div> */}
        </div>
    );
}

export default SearchContainer;
