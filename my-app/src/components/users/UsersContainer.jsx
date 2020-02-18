import React from 'react';
import Users from './Users'
import {followActionCreator,unFollowActionCreator,setUsersActionCreator} from '../../redux/users-reducer';
import { connect } from 'react-redux';

let  mapStateToProps= (state) =>{
    return {
        users: state.usersPage.users
    }
    
}

let  dispatchToProps = (dispatch) =>{
    return {
        following: (userId)=>{
            dispatch(followActionCreator(userId));
        },
        unFollowing: (userId)=>{
            console.log(userId);
            dispatch(unFollowActionCreator(userId));
        },
        setUsers : (users) =>{
            dispatch(setUsersActionCreator(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps,dispatchToProps)(Users)


export default UsersContainer
