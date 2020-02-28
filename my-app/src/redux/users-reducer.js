const UN_FOLLOW = 'UN-FOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING' ;
const TOTAL_COUNT = 'TOTAL-COUNT';

let initialState = {
    users: [],
    pageSize: 15,
    totalUsersCount: 0,
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

        
        case TOTAL_COUNT : {

            return {
                ...state,
                totalUsersCount: action.count
            };
        }

        default :{
            return state;
        }
    }

  
}
export const following = (userId) => {
    return { type: FOLLOW ,userId}
}

export const unFollowing = (userId) => {
    return { type: UN_FOLLOW, userId }
}
export const  setUsers = (users) => {
    return { type: SET_USERS, users }
}
export const setCurrentPage = ( currentPage) => {
    return { type: SET_CURRENT_PAGE,  currentPage: currentPage}
}

export const toggleFetching = ( isFetching) => {
    return { type: TOGGLE_IS_FETCHING,  isFetching}
}
export const setTotalUsersCount = (count) =>{
    return { type: TOTAL_COUNT,  count}
}
export default userReducer