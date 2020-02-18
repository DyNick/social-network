const UPDATE_TEXT = 'UPDATE-TEXT';
const ADD_POST = 'ADD-POST';
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
    newPostText: 'Some Post Text'
}
const profileReducer = (state = intialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                text: state.newPostText,
                id: 5,
                likesCount: 0
            }
            // let stateCopy = {...state};
            // stateCopy.posts = [...state.posts];
            // stateCopy.posts.push(newPost);
            // stateCopy.newPostText = '';
            // return stateCopy

            return {
                ...state,
                posts: [...state.posts,newPost],
                newPostText: ''
            }
        }
        case UPDATE_TEXT: {
            // let stateCopy = {...state};
            // stateCopy.newPostText = action.newText;
            // return stateCopy

            return {
                ...state,
                newPostText: action.newText
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

export default profileReducer