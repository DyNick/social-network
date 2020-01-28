import React from 'react';
import './../App.css';
function Content(){
    return (
        <div className="App-content">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsam744YmpYIA5XM28ePYOOpR4tFlMZRdWpqLG6NGgZXFU9vRh&s' className='backgroundImage'/>

            <div className='user-profile-box'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-XcaqVmrkP66z07hHOL0kSLJrIDGijksGIotXONHQtVckqxW&s' className='user-profile-box__image'/>
                <div className='user-profile-box__description'>
                    <p className ='name'> SOME Name</p>
                    <p className ='birthday'><span>Date of birthday</span>23 april 1904</p>
                    <p className ='education'><span>Education</span> SOME education</p>
                </div>
            </div>

            <div className='my-post input-group mb-3'>
                <p  className='my-post__header'></p>
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button">Button</button>
                </div>
            </div>
            <div className='new-post'><p>New post</p></div>
       
      </div>
    )
}

export default Content