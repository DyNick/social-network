import React from 'react';
import {addPostValue,updateTextValue} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let  mapStateToProps= (state) =>{

    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
    
}
let  dispatchToProps = (dispatch) =>{;
    return {
        addPost: ()=>{
            dispatch(addPostValue());
        },
        postChange: (text)=>{   
            dispatch(updateTextValue(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, dispatchToProps)(MyPosts);
// export default MyPostsContainer
export default MyPostsContainer 