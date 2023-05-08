import React from 'react';

import Track from '../Track/Track';

// Dummy data
import tracks from '../../tracks';

function Tracklist(props){

    
    let trackListing = Object.entries(tracks).map(track=>
        <li key={track[1].key} className="track"> 
            <h3 className="title">"{track[1].name}"</h3>
            <h4>{track[1].artist} <span className="album">({track[1].album})</span></h4>
        </li>);
    
    return (
        <div>
            <ul>
                {trackListing}
            </ul>
        </div>
    )

}

export default Tracklist;