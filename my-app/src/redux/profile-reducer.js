const UPDATE_TEXT ='UPDATE-TEXT';
const ADD_POST = 'ADD-POST';
const profileReducer = (state, action) =>{
  //  console.log(state);
    if(action.type === ADD_POST){
        let newPost = {
            text:state.newPostText,
            id: 5,
            likesCount: 0
        }
        state.posts.push(newPost);
        state.newPostText = '';
        console.log(state.newPostText)
    }
    
    else if(action.type === UPDATE_TEXT){
        console.log(action);
        state.newPostText = action.newText;
    }
    //console.log(state)
    
    return state
    
}

export default profileReducer