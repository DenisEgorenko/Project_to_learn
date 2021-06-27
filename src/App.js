import React from 'react';
import styles from "./App.module.css";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav_bar/Nav_bar";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom"
import MessengerContainer from "./Components/Messenger/MessengerContainer";
import UsersContainer from "./Components/Users/UsersContainer";


function App(props) {
  return (

      <BrowserRouter>
          <div className = {styles.app_wrapper}>

              <Header/>
              <Nav/>

              <div className ={styles.app_wrapper_content}>

                  <Route path='/Profile' render={ () => <Profile/> }/>
                  <Route path='/Messenger' render={ () => <MessengerContainer/> }/>
                  <Route path='/Users' render={ () => <UsersContainer/>}/>

              </div>

          </div>
      </BrowserRouter>
  );
}

export default App;
