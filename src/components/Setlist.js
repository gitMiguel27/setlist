import React from 'react'
import Song from './Song';

function Setlist({ playlist, removeFromPlaylist }) {

    return(
        <>
        <h2>Setlist</h2>
        <div className="setlist">
            {
                playlist.map(track => {
                    return <Song key={track.id} track={track} handleTrackClick={removeFromPlaylist} handleDeleteClick={removeFromPlaylist}/>
                })
            }
        </div>
        </>
    );
}

export default Setlist;