import React from 'react';
import PostClasses from'./Post.module.css';
function Post(props){

    return (

    <div className={PostClasses.newPost}><p>{props.posts}</p></div>
    )
}

export default Post