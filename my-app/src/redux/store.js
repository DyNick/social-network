import profileReducer from './profile-reducer';
import  dialogReducer from './dialog-reducer'
// const UPDATE_TEXT ='UPDATE-TEXT';
// const ADD_POST = 'ADD-POST';

// const ADD_MASSAGE = 'ADD-MASSEGE';
// const UPDATE_MASSEGE = 'UPDATE-MASSEGE';

let store = {
    _state: {
        users: [
            {
                name: 'User1',
                id: '1'
            },
            {
                name: 'User2',
                id: '2'
            },
            {
                name: 'User3',
                id: '3'
            },
            {
                name: 'User3',
                id: '4'
            },
        
        ],
        massege: [
            {text: 'Some massege from user1'},
            {text: 'Some massege from user2'},
            {text: 'Some massege from user3'},
            {text: 'Some massege from user4'}
        ],
    
        posts: [
            {
                text: 'First post',
                id: 1
            },
            {
                text: 'Second post',
                id: 2
            },
            {
                text: 'Third post',
                id: 3
            },
            {
                text: 'Fourth post',
                id: 4
            },
         ],
    
         newPostText: 'Some Post Text',
         newMassegeText : 'Some new  massege'
    },
    getState (){
        return this._state
    },
   
    dispatch(action){
        this._state = profileReducer(this._state, action);
        this._state = dialogReducer(this._state, action);
        this._rerenderEntireTree(this._state);
    },
    subscribe(observer){
        this._rerenderEntireTree = observer;
    }
   
}

// export const addPostValue = ()=>{
//     return {type: ADD_POST }
// }

// export const updateTextValue = (text)=>{
//     return {type: UPDATE_TEXT, newText: text}
// }

// export const addMassegeValue = ()=>{
//     return {type: ADD_MASSAGE}
// }

// export const updateMassegeValue = (text)=>{
//     return {type: UPDATE_MASSEGE, newMassege: text}
// }

export default store