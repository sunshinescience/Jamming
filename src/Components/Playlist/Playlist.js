import React from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';


class Playlist extends React.Component {
    render() {
        return (
            <div className="Playlist">
            <input defaultValue={'New Playlist'}/>
            {/* Passing the playlistTracks from the Playlist component to the TrackList component.*/}
            <Tracklist tracks={this.props.playlistTracks} 
                onRemove={this.props.onRemove}
                isRemoval={true} /> 
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist;