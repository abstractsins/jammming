import React from 'react';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

function SearchArea(){
    return (
        <div id="search-area">
            <SearchBar />
            <SearchResults />
        </div>
    )
}

export default SearchArea;