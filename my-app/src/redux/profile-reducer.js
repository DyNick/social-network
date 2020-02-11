const UPDATE_TEXT ='UPDATE-TEXT';
const ADD_POST = 'ADD-POST';
let intialState = {
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
     newPostText: 'Some Post Text'
}
const profileReducer = (state = intialState, action) =>{
    if(action.type === ADD_POST){
        let newPost = {
            text:state.newPostText,
            id: 5,
            likesCount: 0
        }
        state.posts.push(newPost);
        state.newPostText = '';
    }
    
    else if(action.type === UPDATE_TEXT){
        console.log(action);
        state.newPostText = action.newText;
    }
    //console.log(state)
    
    return state
    
}

export const addPostValue = ()=>{
    return {type: ADD_POST }
}

export const updateTextValue = (text)=>{
    return {type: UPDATE_TEXT, newText: text}
}

export default profileReducer