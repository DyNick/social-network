import React from 'react';
import UsersClasses from './Users.module.css';
import userPhoto from '../../assets/image/avatar.png';
import * as axios from 'axios'
import { NavLink } from 'react-router-dom';


const Users = (props) => {
    
    let pagesCount =  Math.ceil(props.totalUsersCount /props.pageSize)  ;
    let pages = [];
    for( let i = 1; i<pagesCount; i++){
        pages.push(i);

    }
    return (
        <div className={UsersClasses.hello}>
            <div>
                {pages.map((item, index) => {
                    return <span key={index} className={props.currentPage === item ? UsersClasses.active : UsersClasses.normal} onClick={(e) => { props.onPageChanged(item) }}>
                        {/* {item} */}
                        {item<=5?item:null}
                    </span>
                })}
            </div>
            {props.users.map((item, index) => {
                //console.log(item);
                return (
                    <div key={index}>
                        <NavLink  to={`/profile/${item.id}`} >
                        <img src={item.photos.small != null?item.photos.small:userPhoto} alt="" className= {UsersClasses.avatar}/>
                        </NavLink>
                        <p>{item.name}</p>
                        <div>
                            {
                                item.follow
                                    ? <button className={`btn btn-primary`} onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${item.id}`,{},{
                                            withCredentials: true,
                                            headers: {'API-KEY':'6340ef45-39c8-4ddd-af1f-909b6c112888'}
                                        })
                                        .then(response=>{
                                            if(response.data.resultCode == 0){
                                                
                                                props.following(item.id)
                                            };
                                        }) .catch((error) => {
                                            debugger;
                                          });
                                       
                                    }
                                    
                                    }>Follow</button>

                                    : <button className={`btn btn-primary`} onClick={() => {

                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${item.id}`,{},{
                                            withCredentials: true,
                                            headers: {'API-KEY':'6340ef45-39c8-4ddd-af1f-909b6c112888'}
                                        })
                                        .then(response=>{
                                            if(response.data.resultCode == 0){
                                                props.unFollowing(item.id)
                                            };
                                        })
                                        .catch((error) => {
                                            debugger;
                                          });

                                        

                                    }
                                }>Un-follow</button>

                            }
                        </div>

                    </div>
                )
            })}

        </div>
    )
}

// class Users extends React.Component {
//     constructor (props){
//         super (props);

//     }

//     componentDidMount(){
//         axios.get(`https://api.github.com/users?since=${this.props.currentPage}&per_page=${this.props.pageSize}`)
//         .then(response=>{
//             this.props.setUsers(response.data)
//         });
//     }
//     onPageChanged = (pageNumber)=>{
//         this.props.setCurrentPage(pageNumber);
//         axios.get(`https://api.github.com/users?since=${pageNumber}&per_page=${this.props.pageSize}`)
//         .then(response=>{
//             this.props.setUsers(response.data)
//         });
//     }
//     render (){
//         let pagesCount =  Math.ceil(this.props.totalUsersCount /this.props.pageSize)  ;
//         let pages = [];
//         for( let i = 1; i<pagesCount; i++){
//             pages.push(i);

//         }
//         return <div className ={UsersClasses.hello}>
//              <div>
//                  {pages.map((item,index)=>{
//                      return <span key ={index} className ={this.props.currentPage === item ? UsersClasses.active:UsersClasses.normal} onClick ={(e)=>{this.onPageChanged(item) }}>
//                          {item}
//                     </span>
//                  })}
//              </div>
//              {this.props.users.map((item,index)=>{
//                 return(
//                     <div key={index}>
//                         <img src={item.avatar_url} alt=""/>
//                         <p>{item.login}</p>
//                         <div>
//                         {
//                             item.follow 
//                                 ? <button className={`btn btn-primary`} onClick = {() =>  this.props.following(item.id)}>Follow</button>
//                                 :  <button className={`btn btn-primary`} onClick = {() => this.props.unFollowing(item.id)}>Un-follow</button>
//                         }
//                         </div>

//                     </div>
//                 )
//             })}

//         </div>
//     }
// }
export default Users;