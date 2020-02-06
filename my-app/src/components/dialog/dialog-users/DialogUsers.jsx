import React from 'react';
import DialogUserClasses from './DialogUsers.module.css';
import { NavLink } from 'react-router-dom';

const DialogItems = (props) => {
    return(
        <li className={DialogUserClasses.item + ' ' + DialogUserClasses.active}> <NavLink to={/dialogs/ + props.id}>{props.name}</NavLink></li>
    )
}


function DialogUsers(props) {
    return (
        <ul className={DialogUserClasses.list}>
            {props.users.map((item,index)=>(
                        <DialogItems key={index} name={item.name} id={item.id}/> 
                    )
            )}
        </ul>
    )
}

export default DialogUsers