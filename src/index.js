import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./Redux/redux_store";



function rerenderEntireTree() {
    ReactDOM.render(
        <React.StrictMode>
            <App State = {store.getState()} dispatch = {store.dispatch.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

store.subscribe(rerenderEntireTree);

rerenderEntireTree();

reportWebVitals();
