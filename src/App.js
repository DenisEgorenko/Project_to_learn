import React from 'react';
import styles from "./App.module.css";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav_bar/Nav_bar";
import Profile from "./Components/Profile/Profile";
import Messenger from "./Components/Messenger/Messenger";
import {BrowserRouter, Route} from "react-router-dom"


function App(props) {
  return (

      <BrowserRouter>
          <div className = {styles.app_wrapper}>

              <Header/>
              <Nav/>

              <div className ={styles.app_wrapper_content}>

                  <Route path='/Profile' render={ () => <Profile dispatch = {props.dispatch} profilePage = {props.State.profilePage.PostsData} newPostText = {props.State.profilePage.newPostText}/> }/>
                  <Route path='/Messenger' render={ () => <Messenger dispatch = {props.dispatch} MessagesData = {props.State.messengerPage.MessagesData} DialogsData = {props.State.messengerPage.DialogsData} newMessageText = {props.State.messengerPage.newMessageText}/> }/>

              </div>

          </div>
      </BrowserRouter>
  );
}

export default App;
