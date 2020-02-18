import {createStore, combineReducers} from 'redux';
import profileReducer from './profile-reducer';
import dialogReducer from './dialog-reducer';
import usersReducer from './users-reducer';
import sidebarReducer from './sidebar-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer
    //sidebar: sidebarReducer
});

let store = createStore(reducers);
window.store= store;
export default store;