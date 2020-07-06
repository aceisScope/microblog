import ActionTypes from '../Constants/ActionTypes'

const initialState = {}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_POST:
            return {...state,
                    posts: state.posts.concat(action.payload)
                }
        case ActionTypes.GET_POSTS:
            return {...state, 
                    posts: action.payload
                }
        default:
            return state;
    }
}

export default reducer;