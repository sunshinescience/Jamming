import React from 'react';
import './Tracklist.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
        {this.props.tracks && this.props.tracks.map((track) =>{
                return <Track 
                key = {track.id}
                track = {track}
                />
            })
        }
        </div>
        )
    }
}

export default TrackList;