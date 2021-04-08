import React from 'react';

import './App.css';

import Header from "./Components/Header";
import Nav from "./Components/Nav_bar";
import Profile from "./Components/Profile";


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
