import React from 'react';
import DialogClasses from './Dialog.module.css';
import DialogUsers from './dialog-users/DialogUsers';
import Massege from './massege/Massege';


function Dialog(props) {
   


    return (
        <div className={`${DialogClasses.wrapper} App-dialog`}>
            <DialogUsers users={props.users}/>
            <Massege massege={props.massege} dispatch = {props.dispatch} newMassegeText={props.newMassegeText}/>
        </div>
    )
}

export default Dialog