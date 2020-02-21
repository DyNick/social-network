import React from 'react';
import Users from './Users'
import * as axios from 'axios'
import { connect } from 'react-redux';
import PreloaderImg from '../../assets/image/preloader.gif';
import Preloader from '../preloader/Preloader';
import {
    following,
    unFollowing,
    setUsers,
    setCurrentPage,
    toggleFetching
} from '../../redux/users-reducer';


class UsersContent extends React.Component {
    constructor (props){
        super (props);
       
    }
    
    componentDidMount(){
        this.props.toggleFetching(true);
        axios.get(`https://api.github.com/users?since=${this.props.currentPage}&per_page=${this.props.pageSize}`)
        .then(response=>{
            this.props.toggleFetching(false);
            this.props.setUsers(response.data)
        });
    }
    onPageChanged = (pageNumber)=>{
        this.props.toggleFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://api.github.com/users?since=${pageNumber}&per_page=${this.props.pageSize}`)
        .then(response=>{
            this.props.toggleFetching(false);
            this.props.setUsers(response.data);
        });
    }
    render (){
        return <>
                {/* {this.props.isFetching ? <Preloader/> : null} */}
                {this.props.isFetching ? <Preloader/> : 
                <Users 
                    users = { this.props.users}
                    pageSize = { this.props.pageSize}
                    totalUsersCount= { this.props.totalUsersCount}
                    currentPage = { this.props.currentPage}
                    onPageChanged = {this.onPageChanged}
                    following = {this.props.following}
                    unFollowing = {this.props.unFollowing}
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
    }
    
}




const UsersContainer = connect(mapStateToProps,{
                                following,
                                unFollowing,
                                setUsers,
                                setCurrentPage,
                                toggleFetching
                            } )(UsersContent)
                           


export default UsersContainer
