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
      {name: 'name3', artist: 'artist3', album: 'album3', id: 3}],
      playlistName: 'My Playlist',
      playlistTracks: [{name: 'playlistName1', artist: 'playlistArtist1', album: 'playlistAlbum1', id: 4},
      {name: 'playlistName2', artist: 'playlistArtist2', album: 'playlistAlbum2', id: 5},
      {name: 'playlistName3', artist: 'playlistArtist3', album: 'playlistAlbum3', id: 6}]
    };
    this.addTrack = this.addTrack.bind(this); /* step 42, we went to our constructor function here, and after this.state we bind addTrack */
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this); /* step 58: After we created the method below, called 'updatePlaylistName', so in the App constructor method, bind this to .updatePlaylistName() */
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({ playlistTracks: tracks });
  }

  /* step 57: set the state and change the state of playlistName to the value that's passed in. */
  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {/* <SearchBar /> */}
          <div className="App-playlist">
           <SearchResults searchResults={this.state.searchResults}
           onAdd={this.addTrack}/> {/* Step 42: Passing the state of the App component’s searchResults to the SearchResults component */}
           {/* Passing the playlist name and tracks from the app component to the plyalist component. */}
           <Playlist playlistName={this.state.playlistName} 
            playlistTracks={this.state.playlistTracks} 
            onRemove={this.removeTrack} 
            onNameChange={this.updatePlaylistName}/> 
            {/* step 58: Pass updatePlaylistName to the Playlist component as an attribute named onNameChange */}
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
