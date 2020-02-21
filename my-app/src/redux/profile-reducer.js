const UPDATE_TEXT = 'UPDATE-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
let intialState = {
    posts: [
        {
            text: 'First post',
            id: 1
        },
        {
            text: 'Second post',
            id: 2
        },
        {
            text: 'Third post',
            id: 3
        },
        {
            text: 'Fourth post',
            id: 4
        },
    ],
    newPostText: 'Some Post Text',
    userProfile: null
}
const profileReducer = (state = intialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                text: state.newPostText,
                id: 5,
                likesCount: 0
            }


            return {
                ...state,
                posts: [...state.posts,newPost],
                newPostText: ''
            }
        }
        case UPDATE_TEXT: {

            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                userProfile: action.userProfile
            }
        }
    }
    return state
}

export const addPostValue = () => {
    return { type: ADD_POST }
}

export const updateTextValue = (text) => {
    return { type: UPDATE_TEXT, newText: text }
}

export const setUserProfile = (userProfile) => {
    return { type: SET_USER_PROFILE,  userProfile }
}

export default profileReducer