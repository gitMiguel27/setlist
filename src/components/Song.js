import React from 'react'

function Song({ track, handleTrackClick, handleDeleteClick }) {

    function trackClick() {
        handleTrackClick(track);
    }

    function deleteClick() {
        handleDeleteClick(track);
    }

    return(
        <div className="song" onClick={trackClick}>
            <img src={track.image} alt={track.song}/>
            <div className="song-info">
                <h3>{track.song}</h3>
                <h4>{track.artist}</h4>
            </div>
            <button onClick={deleteClick}>X</button>
        </div>
    );
}

export default Song;