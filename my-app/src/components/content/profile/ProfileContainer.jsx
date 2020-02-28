import React from 'react';
import Profile from './Profile'
import * as axios from 'axios'
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import {setUserProfile} from '../../../redux/profile-reducer';



class UsersProfileContent extends React.Component {
    constructor (props){
        super (props);

    }
    

    componentDidMount(){
        //debugger;
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(response=>{
            
            this.props.setUserProfile(response.data);
        });
    }
    render (){
        // console.log(this.props);
        return <>
                <Profile
                    { ...this.props}
                    userProfile = { this.props.userProfile}
                />
              
            </>
        
    }
}



let  mapStateToProps= (state) =>{
    return {
        userProfile: state.profilePage.userProfile,
    }
    
}



let WithUrlDataContainerComponent = withRouter(UsersProfileContent);
const UsersProfileContainer = connect(mapStateToProps,{setUserProfile} )(WithUrlDataContainerComponent)
                           


export default UsersProfileContainer