import React, {useState} from 'react';

function SearchForm() {
    const [search, setSearch] = useState('');
    return (
        <form onSubmit={}>
            <label>Search by City:</label>
            <input type="text" required onChange={() => setSearch(e.target.value)} />
            <input type="submit" value="searchCity" />
        </form>
    )
}

export default SearchForm;