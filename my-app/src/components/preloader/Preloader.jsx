import React from 'react';
import PreloaderImg from '../../assets/image/preloader.gif';
import PreloaderClasses from './Preloader.module.css';

const Preloader = (props)=>{
    return (
        <div>
            <img src={PreloaderImg} className= {PreloaderClasses.preloader}/>
        </div>
    )
}

export default Preloader