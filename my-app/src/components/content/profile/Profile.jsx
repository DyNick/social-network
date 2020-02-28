import React from 'react';
import profileClasses from '../profile/Profile.module.css';
import Preloader from '../../preloader/Preloader';
import userPhoto from '../../../assets/image/avatar.png';


const Profile = (props)=>{
console.log(props.userProfile);
if(!props.userProfile){
    return <Preloader/>
}
    return (
        <div>
             <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsam744YmpYIA5XM28ePYOOpR4tFlMZRdWpqLG6NGgZXFU9vRh&s' className={profileClasses.backgroundImage}/>

                <div className='user-profile-box'>
                    
                <img src={   props.userProfile.photos.small != null?props.userProfile.photos.small:userPhoto} className={profileClasses.userProfileBox__image}/>
                    <div className='user-profile-box__description'>
                        <p className ='name'> {props.userProfile.fullName}</p>
                        {/* <p className ='birthday'>{props.userProfile.repos_url}</p>
                        <p className ='education'>{props.userProfile.organizations_url}</p> */}
                    </div>
                </div>
        </div>
    )
}

export default Profile