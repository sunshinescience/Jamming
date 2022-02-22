import React from 'react';
import './SearchResults.css';
import TrackList from '../Tracklist/Tracklist';

class SearchResults extends React.Component {
    render() {
        return (
            <div className="SearchResults">
            <h2>Results</h2>
            {/* Passing the search results from the SearchResults component to the TrackList component*/}
            {/* also step 43: pass the onAdd method to the SearchResults component as an onAdd attribute, see below onAdd attribute being passed. An attribute called isRemoval is also passed.*/}
            <TrackList tracks={this.props.searchResults} 
                       onAdd={this.props.onAdd} 
                       isRemoval={false}/> 
            </div>
        )
    }
}

export default SearchResults;