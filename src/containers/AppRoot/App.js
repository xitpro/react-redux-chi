import React, { Component } from 'react';
import './App.css';

import Profiles from '../Profiles/profiles';

class App extends Component {
 
  render() { 
    return ( 
      <div className="main-container">
      {/* /********************** mic ****************/}

      {/* <Header></Header>
      <Main></Main>
      <Name_Bar></Name_Bar> */}

      {/* /********************** eq ****************/}
      <div className="thx-wrapper flex">
        <Profiles />
      </div>
    </div>
     );
  }
}

export default App;
