const UN_FOLLOW = 'UN-FOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING' 

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 50,
    currentPage: 1,
    isFetching: false

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

            return {
                ...state,
                users: [...action.users]
            };

        }
        case SET_CURRENT_PAGE: {

            return {
                ...state,
                currentPage: action.currentPage
            };

        }

        case TOGGLE_IS_FETCHING : {

            return {
                ...state,
                isFetching: action.isFetching
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
    return { type: SET_USERS, users }
}
export const setCurrentPageActionCreator = ( currentPage) => {
    return { type: SET_CURRENT_PAGE,  currentPage: currentPage}
}

export const isFetchingActionCreator = ( isFetching) => {
    return { type: TOGGLE_IS_FETCHING,  isFetching}
}
export default userReducer