import React from 'react';
import MyPostClasses from'./MyPosts.module.css';

function MyPosts(){
    return (
        <div className={`${MyPostClasses.myPostBox} input-group mb-3`}>
            <p  className='my-post__header'></p>
            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">Button</button>
            </div>
        </div>
    )
}

export default MyPosts