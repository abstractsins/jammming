import React from 'react';

import './App.css';

import Playlist from './components/Playlist/Playlist';
import SearchArea from './components/SearchArea/SearchArea';

function App(){

    return (
        <div id="outer">
            <div id="app">
                <Playlist />
                <SearchArea />
            </div>
        </div>
    )

}

export default App;