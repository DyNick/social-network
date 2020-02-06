import React from 'react';
import MyPostClasses from'./MyPosts.module.css';
import {addPostValue,updateTextValue} from '../../../redux/state'


function MyPosts(props){
    let newPostElement = React.createRef()
    let addPost = ()=>{
        props.dispatch(addPostValue());
    };
    let onPostChange = ()=>{
        let text = newPostElement.current.value;    
        
        props.dispatch(updateTextValue(text))
    }
    return (
        <div className={`${MyPostClasses.myPostBox}  mb-3`}>
            <p  className='my-post__header'></p>
            <textarea className="form-control" placeholder="Recipient's username" ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
            <div className="">
                <button className="btn btn-outline-secondary" type="button" onClick={addPost}>Button</button>
            </div>
        </div>
    )
}

export default MyPosts