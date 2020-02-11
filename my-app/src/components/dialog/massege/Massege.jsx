import React from 'react';
import MassegeClasses from './Massege.module.css';
//import {addMassegeValue,updateMassegeValue} from '../../../redux/dialog-reducer'

const MassegeItem = (props)=>{
    return(
    <div className={MassegeClasses.massege}>
        {props.text}
    </div>
    )
}


function Massege(props) {
    let newMassegeElement = React.createRef()
    let addMassege = ()=>{
        // props.dispatch(addMassegeValue());
        props.addMassege()
    };
    let onMassegeChange = ()=>{
         let text = newMassegeElement.current.value;    
        // props.dispatch(updateMassegeValue(text))
        props.onMassegeChange(text)
    }
    return (
        <div className={MassegeClasses.wrapper}>

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