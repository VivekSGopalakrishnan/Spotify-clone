import { useEffect , useState} from 'react';
import './App.css';
import Login from './Login/Login';
import { getTokenFromUrl } from "./Spotify/Spotify"
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player/Player';
import { DataLayerValue } from './Datalayer/DataLayer';

const spotify= new SpotifyWebApi();
function App() {

  const[token , setToken] = useState(null);
  const[{},dispatch] = DataLayerValue();

  useEffect(() => { 
const hash = getTokenFromUrl();
window.location.hash="";
const _token = hash.access_token
if(_token){
  setToken(_token)
  spotify.setAccessToken(_token)

  spotify.getMe().then(user => {
    console.log('a',user)
  })
}

console.log("I HAVE",token);
   });
  return (
    <div className='app'>
      {
        token ?(
          <Player/>
        ):(
          <Login/>
        )
      }
      
      </div>
  );
}

export default App;
