import React from 'react';

import './App.css';

import Playlist from './components/Playlist/Playlist';
import SearchResults from './components/SearchResults/SearchResults';

function App(){

    return (
        <div id="outer">
            <div id="app">
                <h1>The App</h1>
                <SearchResults />
                <Playlist />
            </div>
        </div>
    )

}

export default App;