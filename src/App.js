import React from 'react';

import './App.css';

import Header from "./Header";
import Nav from "./Nav_bar";
import Profile from "./Profile";


function App() {
  return (
      <div className='app_wrapper'>

          <Header/>
          <Nav/>
          <Profile/>

      </div>
  );
}

export default App;
