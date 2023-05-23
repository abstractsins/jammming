import React from 'react';

import './Playlist.module.css';

import Tracklist from '../Tracklist/Tracklist'
function Playlist(){
    
    const saveToSpotify = <button 
        id="playlist-submit" 
        type="submit" 
        name="save-to-spotify" 
        onClick={playlistSave}>
            Save to Spotfiy </button>;

    const playlistField = <input 
        id="playlist-name-field"
        type='form' 
        placeholder="Save Playlist as..."
        onKeyUp={autoEnter}
        onSubmit={playlistSave}></input>;
        
    function playlistSave(){
        let playlistTitle = document.getElementById('playlist-name-field').value;
        console.log(playlistTitle);
        alert('Playlist has been saved!')
    }

    function autoEnter(event){
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById('playlist-submit').click();
        }
    };
        
    // console.log(tracks)
    return (
        <div id="playlist">
            <h2>Playlist</h2>
            {playlistField}
            {saveToSpotify}
            {/* <h2>{playListTitle}</h2> */}
            <Tracklist />
        </div>
    )

}

export default Playlist;