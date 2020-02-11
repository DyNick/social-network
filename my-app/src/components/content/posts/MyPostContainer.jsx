import React from 'react';
import {addPostValue,updateTextValue} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts';

function MyPostsContainer(props){
    let addPost = ()=>{
        props.dispatch(addPostValue());
    };
    let onPostChange = (text)=>{   
        props.dispatch(updateTextValue(text))
    }
    return (
        <MyPosts newPostText={props.newPostText} addPost ={addPost} updateText={onPostChange} dispatch = {props.dispatch}/>
    )
}

export default MyPostsContainer