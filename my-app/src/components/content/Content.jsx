import React from 'react';
import './../../App.css';
//import classes from './Content.module.css';
import ProfileContainer from './profile/ProfileContainer';
import MyPostsContainer from './posts/MyPostContainer'
import Post from './posts/post/Post'
function Content(props){
    //debugger;
    return (
        <div className="App-content">
           <ProfileContainer userProfile={props.userProfile}/>
            <MyPostsContainer />     
       
      </div>
    )
}

export default Content