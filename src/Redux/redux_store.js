import {combineReducers, createStore} from "redux";
import {Dialogs_reducer} from "./Dialogs_reducer";
import {Profile_reducer} from "./Profile_reducer";

let reducers = combineReducers({
    messengerPage : Dialogs_reducer,
    profilePage : Profile_reducer
});


let store = createStore(reducers);


export default store;