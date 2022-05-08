import React from 'react';
import Login from './Login/logindex';

import LogoSpotify from './Login/img/logospotify.png';

const App = () => {
  return(
    <div className="App">

      <div className="spotify-logo">
        <img src={LogoSpotify}/>
      </div>

      <div className="broke-line-top">
        <hr className="src"></hr>
      </div>

      <Login/>
    </div>
  )
};
export default App;