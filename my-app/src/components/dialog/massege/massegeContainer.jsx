import React from 'react';
import {addMassegeValue,updateMassegeValue} from '../../../redux/dialog-reducer'
import Massege from './Massege';
import DialogUsers from '../dialog-users/DialogUsers';
import { connect } from 'react-redux';

// function MassegeContainer(props) {
//     //debugger;
//     let addMassege = ()=>{
//         props.dispatch(addMassegeValue());
//     };
//     let onMassegeChange = (text)=>{
//         props.dispatch(updateMassegeValue(text))
//     }
//     return (
//          <Massege onMassegeChange = {onMassegeChange} addMassege ={addMassege} massege={props.massege} newMassegeText={props.newMassegeText}/>
//         )
// } 

let  mapStateToProps= (state) =>{
    console.log(state)
    return {
        newMassegeText: state.dialogsPage.newMassegeText,
        massege: state.dialogsPage.massege,
        users: state.dialogsPage.users,
    }
    
}
let  dispatchToProps = (dispatch) =>{;
    return {
        addMassege: ()=>{
            dispatch(addMassegeValue());
        },
        massegeChange : (text)=>{   
            dispatch(updateMassegeValue(text));
        }
    }
}

const MassegeContainer = connect(mapStateToProps, dispatchToProps)(Massege,DialogUsers);
// export const UsersContainer = connect(mapStateToProps)(DialogUsers);
export default MassegeContainer 
