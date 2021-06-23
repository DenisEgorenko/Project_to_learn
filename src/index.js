import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state from "./Redux/State";
import {addMessage, addPost, updateNewMessageText, updateNewPostText, subscribe} from "./Redux/State";
import ReactDOM from "react-dom";
import App from "./App";



function rerenderEntireTree(state) {
    ReactDOM.render(
        <React.StrictMode>
            <App State = {state} addPost = {addPost} updateNewPostText = {updateNewPostText} addMessage = {addMessage} updateNewMessageText = {updateNewMessageText} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

subscribe(rerenderEntireTree);

rerenderEntireTree(state);

reportWebVitals();
