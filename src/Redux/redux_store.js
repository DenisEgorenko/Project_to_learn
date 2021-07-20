import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import {Dialogs_reducer} from "./Dialogs_reducer";
import {Profile_reducer} from "./Profile_reducer";
import {Users_reducer} from "./Users_reducer";
import {auth_reducer} from "./Auth_reducer";
import thunkMiddleware from "redux-thunk"
import {app_reducer} from "./App_reducer";

let reducers = combineReducers({
    messengerPage : Dialogs_reducer,
    profilePage : Profile_reducer,
    usersPage: Users_reducer,
    auth: auth_reducer,
    app: app_reducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
