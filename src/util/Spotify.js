import { clientId } from '../env.js';
const redirectUri = 'http://localhost:3000/';

let accessToken ;
const Spotify = {
    getAccessToken(){
        if(accessToken ){
            return accessToken ;
        }

        //check for an access token match
        const accessTokenMatch= window.location.href.match(/access_token=([^&]*)/);
        const expiresInmatch = window.location.href.match(/expires_in=([^&]*)/);

        //if token and expires exists in url 
        if(accessTokenMatch && expiresInmatch){
            accessToken  = accessTokenMatch[1];
            let expiresIn = Number(expiresInmatch[1]);

            // This clears the parameters, allowing us to grab a new access token when it expries.
            window.setTimeout(()=> accessToken  = '', expiresIn *1000);
            window.history.pushState('Access Token', null,'/');
            return accessToken;
        }else{
            window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
        }
    },

    search(term){
        let accessToken = Spotify.getAccessToken();

        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, { 
            headers:{
                Authorization: `Bearer ${accessToken}`
            }
        })
        .then(response => 
            {
                return response.json();
            })
        .then(jsonResponse=>{
            if(!jsonResponse.tracks){
                return [];
            }
            return jsonResponse.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
            }));
        });
    },

    savePlaylist(name, trackURIs){
        if(!name || !trackURIs.length){
            return;
        }

        const accessToken = Spotify.getAccessToken();
        const headers = {Authorization: `Bearer ${accessToken}`};
        let userID;

        return fetch('https://api.spotify.com/v1/me', {headers: headers}
        ).then(response=>{
            response.json();
            }
        ).then(jsonResponse => {
            userID = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`,{
                method: 'POST',
                headers: headers,
                body: JSON.stringify({name: name}),
                }
            ).then(response => {
                response.json();
                }
            ).then(jsonResponse=>{
                const playlistID = jsonResponse.id;
                return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`), {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify({uris: trackURIs})
                }
            })
        })
    }
};
export default Spotify;