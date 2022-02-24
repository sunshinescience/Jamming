import React from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';


class Playlist extends React.Component {
    constructor(props) {
        super(props);

        this.handleNameChange = this.handleNameChange.bind(this); /* After creating the method called 'handleNameChange', we create a constructor and then bind the current value of 'this' to handleNameChange here */
    }

    /* event.target.value is going to give us access to the keys that the user is typing */
    handleNameChange(event) {
        this.props.onNameChange(event.target.value);
    }

    render() {
        return (
            <div className="Playlist">
            <input defaultValue={'New Playlist'} onChange=
            {this.handleNameChange} /> {/* Step 61: In the Playlist render method, pass .handleNameChange() to an onChange property. */}
            {/* Passing the playlistTracks (below) from the Playlist component to the TrackList component.*/}
            <Tracklist tracks={this.props.playlistTracks} 
                onRemove={this.props.onRemove}
                isRemoval={true} /> 
            <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist;