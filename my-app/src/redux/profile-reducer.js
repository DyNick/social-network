const UPDATE_TEXT ='UPDATE-TEXT';
const ADD_POST = 'ADD-POST';
 const profileReducer = (state, action) =>{
//debugger;
    if(action.type === ADD_POST){
        let newPost = {
            text: state.newPostText,
            id: 5,
            likesCount: 0
        }
        console.log(state.newPostText)
        state.posts.push(newPost);
        state.newPostText = '';
       // state._rerenderEntireTree(state);
    }
    
    else if(action.type === UPDATE_TEXT){
        state.newPostText = action.newText;
        return state;
        //state._rerenderEntireTree(state);
    }
    return state
}

export default profileReducer