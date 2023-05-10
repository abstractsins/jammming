import React from 'react';

import './Playlist.module.css';

import Tracklist from '../Tracklist/Tracklist'

const saveToSpotify = <button>Save to Spotfiy</button>;
const playlistField = <input type='form'></input>;

function Playlist(){

    // console.log(tracks)
    return (
        <div id="playlist">
            <h2>Playlist</h2>
            {playlistField}
            {saveToSpotify}
            <Tracklist />
        </div>
    )

}

export default Playlist;