import React from 'react';
import './../../App.css';
import classes from './Content.module.css';
import MyPosts from './posts/MyPosts'
import PostItem from './posts/post/Post'
function Content(){
    return (
        <div className="App-content">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsam744YmpYIA5XM28ePYOOpR4tFlMZRdWpqLG6NGgZXFU9vRh&s' className={classes.backgroundImage}/>

            <div className='user-profile-box'>
               <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-XcaqVmrkP66z07hHOL0kSLJrIDGijksGIotXONHQtVckqxW&s' className={classes.userProfileBox__image}/>
                <div className='user-profile-box__description'>
                    <p className ='name'> SOME Name</p>
                    <p className ='birthday'><span>Date of birthday</span>23 april 1904</p>
                    <p className ='education'><span>Education</span> SOME education</p>
                </div>
            </div>
            <MyPosts/>
            <PostItem massege='First post'/>
            <PostItem massege='Second post'/>
            <PostItem massege='Third post'/>
       
      </div>
    )
}

export default Content