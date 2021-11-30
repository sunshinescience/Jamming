import React from 'react';
import './App.css';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

// Add a SearchBar component 
  
// Add a SearchResults component 
// Add a Playlist component 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{name: 'name1', artist: 'artist1', album: 'album1', id: 1},
      {name: 'name2', artist: 'artist2', album: 'album2', id: 2},
      {name: 'name3', artist: 'artist3', album: 'album3', id: 3}]
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {/* <SearchBar /> */}
          <div className="App-playlist">
           <SearchResults searchResults={this.state.searchResults}/> {/* Passing the state of the App component’s searchResults to the SearchResults component */}
           {/* <Playlist playlist={this.state.searchResults} tracks={this.state.tracks}/> */}
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
