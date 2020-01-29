import React from 'react';
import MusicClasses from './Music.module.css';


function Music(props) {
    return (
        <div className='App-music'>
            <div className={MusicClasses.AppMusicWrapper}>
                <h2>Music</h2>
            </div>
        </div>

    )
}
export default Music