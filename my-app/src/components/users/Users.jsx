import React from 'react';
import UsersClasses from './Users.module.css';
import userPhoto from '../../assets/image/avatar.png';
import * as axios from 'axios'



// const Users = (props)=>{
//     let getUsers = ()=>{
//         if (props.users.length === 0){
//             axios.get('https://api.github.com/users')
//                 .then(response=>{
//                    props.setUsers(response.data)
//                 });
        
//         }
//     }
  


//     return(
//         <div className ={UsersClasses.hello}>
//              <button className={`btn btn-primary`} onClick = { getUsers}>Get Users</button>
//              {props.users.map((item,index)=>{
//                 return(
//                     <div key={index}>
//                         <img src={item.avatar_url} alt=""/>
//                         <p>{item.login}</p>
//                         <div>
//                         {
//                             item.follow 
//                                 ? <button className={`btn btn-primary`} onClick = {() =>  props.following(item.id)}>Follow</button>
//                                 :  <button className={`btn btn-primary`} onClick = {() => props.unFollowing(item.id)}>Un-follow</button>
//                         }
//                         </div>
                       
//                     </div>
//                 )
//             })}

//         </div>
//     )
// }

class Users extends React.Component {
    constructor (props){
        super (props);
        axios.get('https://api.github.com/users')
            .then(response=>{
                this.props.setUsers(response.data)
            });
    }
    
    // getUsers (){
    //     axios.get('https://api.github.com/users')
    //         .then(response=>{
    //             this.props.setUsers(response.data)
    //         });
    // }

    render (){
       return <div className ={UsersClasses.hello}>
             {/* <button className={`btn btn-primary`} onClick = { this.getUsers}>Get Users</button> */}
             {this.props.users.map((item,index)=>{
                return(
                    <div key={index}>
                        <img src={item.avatar_url} alt=""/>
                        <p>{item.login}</p>
                        <div>
                        {
                            item.follow 
                                ? <button className={`btn btn-primary`} onClick = {() =>  this.props.following(item.id)}>Follow</button>
                                :  <button className={`btn btn-primary`} onClick = {() => this.props.unFollowing(item.id)}>Un-follow</button>
                        }
                        </div>
                       
                    </div>
                )
            })}

        </div>
    }
}
export default Users;