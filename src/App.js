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

                  <Route path='/Profile' render={ () => <Profile profilePage = {props.State.profilePage.PostsData} addPost = {props.addPost} newPostText = {props.State.profilePage.newPostText} updateNewPostText = {props.updateNewPostText}/> }/>
                  <Route path='/Messenger' render={ () => <Messenger MessagesData = {props.State.messengerPage.MessagesData} DialogsData = {props.State.messengerPage.DialogsData} newMessageText = {props.State.messengerPage.newMessageText} updateNewMessageText = {props.updateNewMessageText} addMessage = {props.addMessage}/> }/>

              </div>

          </div>
      </BrowserRouter>
  );
}

export default App;
