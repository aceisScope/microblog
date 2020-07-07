import ActionTypes from '../Constants/ActionTypes'

const initialState = {}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_POST:
            return {...state,
                fetchingPosts: true
            }
        case ActionTypes.GET_POST:
            return {...state,
                fetchingPosts: true
            }
        case ActionTypes.ADD_POSTS_SUCCESS:
            return {...state,
                    posts: state.posts.concat(action.payload),
                    fetchingPosts: false
                }
        case ActionTypes.GET_POSTS_SUCCESS:
            return {...state, 
                    posts: action.payload,
                    fetchingPosts: false
                }
        default:
            return state;
    }
}

export default reducer;