import React from 'react';

function Track(props){

    return (
        <div key={props.key}>
            <h3>{props.title}</h3>
            <h4>{props.artist}</h4>
            <h4>{props.album}</h4>
        </div>
    )

}

export default Track;