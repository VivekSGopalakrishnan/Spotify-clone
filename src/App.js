import { useEffect , useState} from 'react';
import './App.css';
import Login from './Login/Login';
import { getTokenFromUrl } from "./Spotify/Spotify"
function App() {
  const[token , setToken] = useState(null);
  useEffect(() => { 
const hash = getTokenFromUrl();
window.location.hash="";
const _token = hash.access_token
if(_token){
  setToken(_token)
}
console.log("I HAVE",token);
   });
  return (
    <div className='app'>
      {
        token ?(
          <h1>I am logged in</h1>
        ):(
          <Login/>
        )
      }
      
      </div>
  );
}

export default App;
