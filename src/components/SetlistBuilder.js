import React, { useEffect, useState } from 'react'
import SongList from './SongList';
import Setlist from './Setlist';

function SetlistBuilder() {
    const [tracks, setTracks] = useState([]);
    const [playlist, setPlaylist] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3110/tracks')
            .then(resp => resp.json())
            .then(tracksData => {
                setTracks(tracksData);
            })
    }, [])

    function handleTrackClick(clickedTrack) {
        // console.log('from builder: ', clickedTrack);
        if (playlist.find(track => track.id === clickedTrack.id)) {
            console.log('Already Here!');
        } else {
            setPlaylist([...playlist, clickedTrack]);
        }
    }

    function handleDeleteClick(deletedTrack) {
        // console.log('builder: ', deletedTrack);
        fetch(`http://localhost:3110/tracks/${deletedTrack.id}`, {
            method: "DELETE",
        })
        const updatedTracks = tracks.filter(track => track.id !== deletedTrack.id)
        setTracks(updatedTracks);
        const updatedPlaylist = playlist.filter(track => track.id !== deletedTrack.id)
        setPlaylist(updatedPlaylist);
    }

    function removeFromPlaylist(deletedPlaylistTrack) {
        const updatedPlaylist = playlist.filter(track => track.id !== deletedPlaylistTrack.id)
        setPlaylist(updatedPlaylist);
    }

    return(
        <div className="builder">
            <SongList tracks={tracks} handleTrackClick={handleTrackClick} handleDeleteClick={handleDeleteClick}/>
            <div className="vl"></div>
            <Setlist playlist={playlist} removeFromPlaylist={removeFromPlaylist}/>
        </div>
    );
}

export default SetlistBuilder;