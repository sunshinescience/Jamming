import React from 'react';
import './SearchResults.css';
import TrackList from '../Tracklist/Tracklist';

class SearchResults extends React.Component {
    render() {
        return (
            <div className="SearchResults">
            <h2>Results</h2>
            <TrackList tracks={this.props.SearchResults}/> {/* Passing the search results from the SearchResults component to the TrackList component.*/}
            </div>
        )
    }
}

export default SearchResults;