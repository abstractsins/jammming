import React from 'react';

import './Playlist.module.css';

import Tracklist from '../Tracklist/Tracklist'


function Playlist(){

    // console.log(tracks)
    return (
        <div id="playlist">
            <h2>Playlist</h2>
            <Tracklist />
        </div>
    )

}

export default Playlist;