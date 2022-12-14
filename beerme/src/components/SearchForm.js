import React, {useState} from 'react';

function SearchForm() {
    
    // UseState for input city search
    const [search, setSearch] = useState('');
    
    // Handle submit for submitting search text value 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Search by City:</label>
            <input type="text" value={search} required onChange={(e) => setSearch(e.target.value)} />
            <input type="submit" value="searchCity" />
        </form>
    )
}

export default SearchForm;