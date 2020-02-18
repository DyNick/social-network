import React from 'react';
import MassegeClasses from './Massege.module.css';
import DialogUserClasses from '../dialog-users/DialogUsers.module.css';
import { NavLink } from 'react-router-dom';
//import {addMassegeValue,updateMassegeValue} from '../../../redux/dialog-reducer'

const MassegeItem = (props)=>{
    //console.log(props);
    return(
    <div className={MassegeClasses.massege}>
        {props.text}
    </div>
    )
}
const DialogItems = (props) => {
    //console.log(props);
    return(
        <li className={DialogUserClasses.item + ' ' + DialogUserClasses.active}> <NavLink to={/dialogs/ + props.id}>{props.name}</NavLink></li>
    )
}

function Massege(props) {
    console.log(props);
    let newMassegeElement = React.createRef()
    let addMassege = ()=>{
        // props.dispatch(addMassegeValue());
        props.addMassege()
    };
    let onMassegeChange = ()=>{
         let text = newMassegeElement.current.value;    
        // props.dispatch(updateMassegeValue(text))
        props.massegeChange(text)
    }
    return (
        <div className={MassegeClasses.wrapper}>
        <ul className={DialogUserClasses.list}>
                    {props.users.map((item,index)=>(
                                <DialogItems key={index} name={item.name} id={item.id}/> 
                            )
                    )}
                </ul>
            <div className={`  mb-3`}>
                <textarea className="form-control" placeholder="Recipient's username" ref={newMassegeElement} onChange={onMassegeChange} value={props.newMassegeText}></textarea>
                <div className="">
                    <button className="btn btn-outline-secondary" type="button" onClick={addMassege}>Button</button>
                </div>
            </div>
            {props.massege.map((item,index)=>{
                return(
                    <MassegeItem key = {index} text={item.text}/>
                )
            })}
        </div>
    )
}


export default Massege