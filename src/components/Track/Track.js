import React from 'react';

function Track(props){

    return (
        <li className='track'>
            <h3>{props.title}</h3>
            <h4>{props.artist} <span className='album'>({props.album})</span></h4>
        </li>
    )

}

export default Track;