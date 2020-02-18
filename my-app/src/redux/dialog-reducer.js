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
    //let stateCopy;
    switch(action.type){
        case ADD_MASSAGE: {
            // let newMassege = {
            //     text: state.newMassegeText,
            // }
            let body =  state.newMassegeText
            return {
                ...state,
                newMassegeText:'',
                massege : [...state.massege,{text: body}]
            };
            
            // stateCopy.massege = [...state.massege]
            // stateCopy.massege.push(newMassege);
            // stateCopy.newMassegeText = ' ';
            //return stateCopy;
        }
        case UPDATE_MASSEGE:{
           return {
                ...state,
                newMassegeText: action.newMassege
            };
            //stateCopy.newMassegeText = action.newMassege;
            //return stateCopy;
        }
       
    }
    return state;
}
export const addMassegeValue = ()=>{
    return {type: ADD_MASSAGE}
}

export const updateMassegeValue = (text)=>{
    return {type: UPDATE_MASSEGE, newMassege: text}
}


export default dialogReducer