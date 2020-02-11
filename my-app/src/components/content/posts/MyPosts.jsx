import React from 'react';
import MyPostClasses from'./MyPosts.module.css';
//import {addPostValue,updateTextValue} from '../../../redux/profile-reducer'


function MyPosts(props){
    //console.log(props.newPostText);
    let newPostElement = React.createRef()
    let onAddPost = ()=>{
        // props.dispatch(addPostValue());
        props.addPost();
    };
    let onPostChange = ()=>{
        let text = newPostElement.current.value;    
        // console.log(text);
        // props.dispatch(updateTextValue(text))
        props.updateText(text);
    }
    
    return (
        <div className={`${MyPostClasses.myPostBox}  mb-3`}>
            <p  className='my-post__header'></p>
            <textarea className="form-control" placeholder="Recipient's username" ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
            <div className="">
                <button className="btn btn-outline-secondary" type="button" onClick={onAddPost}>Button</button>
            </div>
        </div>
    )
}

export default MyPosts