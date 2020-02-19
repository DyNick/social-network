import React from 'react';
import Users from './Users'
import {followActionCreator,unFollowActionCreator,setUsersActionCreator,setCurrentPageActionCreator} from '../../redux/users-reducer';
import * as axios from 'axios'
import { connect } from 'react-redux';


class UsersContent extends React.Component {
    constructor (props){
        super (props);
       
    }
    
    componentDidMount(){
        axios.get(`https://api.github.com/users?since=${this.props.currentPage}&per_page=${this.props.pageSize}`)
        .then(response=>{
            this.props.setUsers(response.data)
        });
    }
    onPageChanged = (pageNumber)=>{
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://api.github.com/users?since=${pageNumber}&per_page=${this.props.pageSize}`)
        .then(response=>{
            this.props.setUsers(response.data)
        });
    }
    render (){
        return <Users 
                    users = { this.props.users}
                    pageSize = { this.props.pageSize}
                    totalUsersCount= { this.props.totalUsersCount}
                    currentPage = { this.props.currentPage}
                    onPageChanged = {this.onPageChanged}
                    following = {this.props.following}
                    unFollowing = {this.props.unFollowing}
                />
        
    }
}



let  mapStateToProps= (state) =>{
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
        },
        setCurrentPage : (pageNumber) =>{
            dispatch(setCurrentPageActionCreator(pageNumber));
        }
    }
}

const UsersContainer = connect(mapStateToProps,dispatchToProps)(UsersContent)


export default UsersContainer
