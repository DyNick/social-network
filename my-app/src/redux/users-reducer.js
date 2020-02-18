const UN_FOLLOW = 'UN-FOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: []

}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                       
                        return {
                            ...u, follow: false
                        }
                    }else{
                        return {...u}
                    }
                })

            };


        }
        case UN_FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        console.log(action.userId)
                        return {
                            ...u, follow: true
                        }
                    }
                    else{
                        return {...u}
                    }
                })
            };

        }

        case SET_USERS: {
            console.log(action.users);
            console.log(state)
            return {
                ...state,
                users: [...state.users,...action.users]
            };

        }
        default :{
            return state;
        }
    }

  
}
export const followActionCreator = (userId) => {
    return { type: FOLLOW ,userId}
}

export const unFollowActionCreator = (userId) => {
    return { type: UN_FOLLOW, userId }
}
export const setUsersActionCreator = (users) => {
    console.log(users)
    return { type: SET_USERS, users }
}

export default userReducer