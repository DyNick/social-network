import React from 'react';
import NewsClasses from './News.module.css'
function News(props){
    return(
        <div className='App-news'>
            <div className={NewsClasses.AppNewsWrapper}>

                test news
            </div>
        </div>
    )
}

export default News