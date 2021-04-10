import React from 'react';

import './App.css';

import Header from "./Components/Header/Header";
import Nav from "./Components/Nav_bar/Nav_bar";
import Profile from "./Components/Profile/Profile";
import Messenger from "./Components/Messenger/Messenger";
import {BrowserRouter, Route} from "react-router-dom"


function App() {
  return (
      <BrowserRouter>
          <div className='app_wrapper'>

              <Header/>
              <Nav/>

              <div className = 'app_wrapper_content'>

                  <Route path='/Profile' component={Profile}/>
                  <Route path='/Messenger' component={Messenger}/>

              </div>

          </div>
      </BrowserRouter>
  );
}

export default App;
