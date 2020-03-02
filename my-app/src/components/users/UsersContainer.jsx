import React from 'react';
import Users from './Users'
import * as axios from 'axios'
import { connect } from 'react-redux';
import PreloaderImg from '../../assets/image/preloader.gif';
import Preloader from '../preloader/Preloader';
import {usersAPI} from '../../api/api'
import {
    following,
    unFollowing,
    setUsers,
    setCurrentPage,
    toggleFetching,
    toggleFollowingInProgress,
    setTotalUsersCount
} from '../../redux/users-reducer';


class UsersContent extends React.Component {
   
    constructor (props){
        super (props);
       
    }
    
    componentDidMount(){
        this.props.toggleFetching(true);
        

        usersAPI.getUsers(this.props.currentPage,this.props.pageSize)
        .then(response=>{
            this.props.toggleFetching(false);
            this.props.setUsers(response.items);
            this.props.setTotalUsersCount(response.totalCount);
        });
    }
    onPageChanged = (pageNumber)=>{
        this.props.toggleFetching(true);
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize)
        .then(response=>{
            this.props.toggleFetching(false);
            this.props.setUsers(response.items);
            this.props.setTotalUsersCount(response.totalCount);
        });
    }
    render (){
       
        return <>
                {this.props.isFetching ? <Preloader/> : 
                <Users 
                    users = { this.props.users}
                    pageSize = { this.props.pageSize}
                    totalUsersCount= { this.props.totalUsersCount}
                    currentPage = { this.props.currentPage}
                    onPageChanged = {this.onPageChanged}
                    following = {this.props.following}
                    unFollowing = {this.props.unFollowing}
                    toggleFollowingInProgress = {this.props.toggleFollowingInProgress}
                    followingInProgress = {this.props.followingInProgress}
                />
                }
            </>
        
    }
}



let  mapStateToProps= (state) =>{
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
    
}




const UsersContainer = connect(mapStateToProps,{
                                following,
                                unFollowing,
                                setUsers,
                                setCurrentPage,
                                toggleFetching,
                                toggleFollowingInProgress,
                                setTotalUsersCount
                            } )(UsersContent)
                           


export default UsersContainer
