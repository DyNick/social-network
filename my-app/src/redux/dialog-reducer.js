const ADD_MASSAGE = 'ADD-MASSEGE';
const UPDATE_MASSEGE = 'UPDATE-MASSEGE';
let intialState = {
    massege: [
        {text: 'Some massege from user1'},
        {text: 'Some massege from user2'},
        {text: 'Some massege from user3'},
        {text: 'Some massege from user4'}
    ],
    users: [
        {
            name: 'User1',
            id: '1'
        },
        {
            name: 'User2',
            id: '2'
        },
        {
            name: 'User3',
            id: '3'
        },
        {
            name: 'User3',
            id: '4'
        },
    
    ],
    newMassegeText : 'Some new  massege'
}
const dialogReducer = (state = intialState, action) =>{
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
export const addMassegeValue = ()=>{
    return {type: ADD_MASSAGE}
}

export const updateMassegeValue = (text)=>{
    return {type: UPDATE_MASSEGE, newMassege: text}
}


export default dialogReducer