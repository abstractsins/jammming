import React from 'react';

import Track from '../Track/Track';

// Dummy data
import tracks from '../../tracks';

function Tracklist(props){

    let trackListing = Object.entries(tracks).map(track=>
        <Track 
            key={track[1].key}
            title={track[1].name} 
            artist={track[1].artist} 
            album={track[1].album}
        />
    );
    
    return (
        <ul>
            {trackListing}
        </ul>
    )

}

export default Tracklist;