import React from 'react';
import MyPostClasses from'./MyPosts.module.css';
import PostClasses from'./post/Post.module.css';
//import Post from './posts/post/Post'
//import {addPostValue,updateTextValue} from '../../../redux/profile-reducer'
function MyPosts(props){
    //debugger;
    // console.log(props)
    let newPostElement = React.createRef()
    let onAddPost = ()=>{
        //props.dispatch(addPostValue());
       props.addPost();
    };
    let onPostChange = ()=>{
        let text = newPostElement.current.value;    
        // console.log(text);
         //props.dispatch(updateTextValue(text))
        //props.newPostText(text);
        props.postChange(text)
    }
    
    return (
        <div className={`${MyPostClasses.myPostBox}  mb-3`}>
            <p  className='my-post__header'></p>
            <textarea className="form-control" placeholder="Recipient's username" ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
            <div className="">
                <button className="btn btn-outline-secondary" type="button" onClick={onAddPost}>Button</button>
            </div>
            {props.posts.map((item,index)=>{
                return(
                    <div className={PostClasses.newPost}  key={index}><p>{item.text}</p></div>
                )
            })}
            
        </div>
       
    )
}

export default MyPosts