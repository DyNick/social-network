
const UPDATE_TEXT ='UPDATE-TEXT';
const ADD_POST = 'ADD-POST';

const ADD_MASSAGE = 'ADD-MASSEGE';
const UPDATE_MASSEGE = 'UPDATE-MASSEGE';

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
        if(action.type === ADD_POST){
            let newPost = {
                text: this._state.newPostText,
                id: 5,
                likesCount: 0
            }
            this._state.posts.push(newPost);
            this._rerenderEntireTree(this._state);
            this._state.newPostText = '';
        }
        
        else if(action.type === UPDATE_TEXT){
            this._state.newPostText = action.newText;
            this._rerenderEntireTree(this._state);
        }
        
        else if(action.type === ADD_MASSAGE){
            
            let newMassege = {
                text: this._state.newMassegeText,
            }
            this._state.massege.push(newMassege);
            this._rerenderEntireTree(this._state);
            this._state.newMassegeText = ' ';
        }
        
        else if(action.type === UPDATE_MASSEGE){

            this._state.newMassegeText = action.newMassege;
            this._rerenderEntireTree(this._state);
        }
    },
    subscribe(observer){
        this._rerenderEntireTree = observer;
    }
   
}

export const addPostValue = ()=>{
    return {type: ADD_POST }
}

export const updateTextValue = (text)=>{
    return {type: UPDATE_TEXT, newText: text}
}

export const addMassegeValue = ()=>{
    return {type: ADD_MASSAGE}
}

export const updateMassegeValue = (text)=>{
    return {type: UPDATE_MASSEGE, newMassege: text}
}

export default store