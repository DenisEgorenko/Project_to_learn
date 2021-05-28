import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {addPost, updateNewPostText} from "./Redux/State";


export function renderEntireTree(state) {
    ReactDOM.render(
        <React.StrictMode>
            <App State = {state} addPost = {addPost} updateNewPostText = {updateNewPostText} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}