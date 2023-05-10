import React from 'react';

const search = <button>Search</button>;
const searchField = <input type='form'></input>

function SearchBar(){

    return (
        <div id="search-bar">
            {searchField}
            {search}
        </div>
    )

}

export default SearchBar;