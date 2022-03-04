import React from 'react'
import Song from './Song';

function SongList({ tracks, handleTrackClick, handleDeleteClick }) {

    return(
        <>
        <h2>Song List</h2>
        <div className="song-list">
            {
                tracks.map(track => {
                    return <Song key={track.id} track={track} handleTrackClick={handleTrackClick} handleDeleteClick={handleDeleteClick}/>
                })
            }
        </div>
        </>
    );
}

export default SongList;