import React from 'react';
import DialogClasses from './Dialog.module.css';
import DialogUsers from './dialog-users/DialogUsers';
//import Massege from './massege/Massege';
import MassegeContainer from './massege/massegeContainer';


function Dialog(props) {
   //debugger;

    return (
        <div className={`${DialogClasses.wrapper} App-dialog`}>
            {/* <DialogUsers users={props.users}/> */}
            {/* <Massege massege={props.massege} dispatch = {props.dispatch} newMassegeText={props.newMassegeText}/> */}
            {/* <MassegeContainer massege={props.massege} dispatch = {props.dispatch} newMassegeText={props.newMassegeText}/> */}
            <DialogUsers />
            <MassegeContainer/>
        </div>
    )
}

export default Dialog