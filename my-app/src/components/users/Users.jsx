import React from 'react';
import UsersClasses from './Users.module.css';
//import userPhoto from '../../assets/image/avatar.png';
//import * as axios from 'axios'



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
                        {item}
                    </span>
                })}
            </div>
            {props.users.map((item, index) => {
                return (
                    <div key={index}>
                        <img src={item.avatar_url} alt="" className= {UsersClasses.avatar}/>
                        <p>{item.login}</p>
                        <div>
                            {
                                item.follow
                                    ? <button className={`btn btn-primary`} onClick={() => props.following(item.id)}>Follow</button>
                                    : <button className={`btn btn-primary`} onClick={() => props.unFollowing(item.id)}>Un-follow</button>
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