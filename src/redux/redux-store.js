import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users_reducer";

let reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   sidebarReducer: sidebarReducer,
   usersPage: usersReducer

});

let store = createStore(reducers);




export default store;


//?  combineReducers - эта функция   //объединяеее наши редюсеры
//?  combineReducers - эта функция   //объединяеее наши редюсеры

// change this code