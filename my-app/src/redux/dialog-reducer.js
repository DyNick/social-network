const ADD_MASSAGE = 'ADD-MASSEGE';
const UPDATE_MASSEGE = 'UPDATE-MASSEGE';

const dialogReducer = (state, action) =>{
    if(action.type === ADD_MASSAGE){
            
            let newMassege = {
                text: state.newMassegeText,
            }
            state.massege.push(newMassege);
            state.newMassegeText = ' ';
        }
        
        else if(action.type === UPDATE_MASSEGE){
            state.newMassegeText = action.newMassege;
        }

    return state
}
export default dialogReducer