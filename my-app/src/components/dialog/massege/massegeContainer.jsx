import React from 'react';
import {addMassegeValue,updateMassegeValue} from '../../../redux/dialog-reducer'
import Massege from './Massege'

function MassegeContainer(props) {
    let addMassege = ()=>{
        props.dispatch(addMassegeValue());
    };
    let onMassegeChange = (text)=>{
        props.dispatch(updateMassegeValue(text))
    }
    return (
         <Massege onMassegeChange = {onMassegeChange} addMassege ={addMassege} massege={props.massege} newMassegeText={props.newMassegeText}/>
        )
} 


export default MassegeContainer