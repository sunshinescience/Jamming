import React from 'react';
import './Track.css';

class Track extends React.Component {
    constructor(props) {
        super(props);

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    /* On the button element that has a plus symbol, add an onClick property with the value set to this.addTrack. So it should be: onClick={this.addTrack} so that whenever there is a clock on this button we will call this.addTrack*/
    renderAction() {
        if (this.props.isRemoval) {
            return <button className="Track-action" onClick={this.removeTrack}>-</button>
        } else {
            return <button className="Track-action" onClick={this.addTrack}>+</button>
        }
    }

    /* Step 45: Create an .addTrack() method in the Track component. Use it to add this.props.track to the playlist. 
    We'll do that by first writing this.props.onAdd (this is that method that we created and passed down), 
    and this.props.track (remember, that's going to check if this track that we're trying to add has an id that already 
    exists within our current playlist. If it does it won't be added, but if it doesn't then it will be added and pushed onto our playlist and our state will be updated)
    */

    addTrack() {
        this.props.onAdd(this.props.track);
    }

    removeTrack() {
        this.props.onRemove(this.props.track);
    }

     render() {
        return (
            <div className="Track">
            <div className="Track-information">
                <h3>{this.props.track.name}</h3>
                <p>{this.props.track.artist} | {this.props.track.album} </p>
            </div>
            {this.renderAction()}
            </div>
        )
    }
}

export default Track;