import React from 'react';
import './Tracklist.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
        {/* Step 44: Passing onAdd from the TrackList component to the Track component*/}
        {this.props.tracks && this.props.tracks.map((track) =>{
                return <Track track={track}
                    key={track.id}
                    onAdd={this.props.onAdd}
                    onRemove={this.props.onRemove}
                    isRemoval={this.props.isRemoval} /> 
            })
        }
        </div>
        )
    }
}

export default TrackList;