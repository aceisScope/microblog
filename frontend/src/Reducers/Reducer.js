import ActionTypes from '../Constants/ActionTypes'

const initialState = {
    posts: []
  }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_POST:
            return Object.assign({}, state, {
                posts: state.posts.concat(action.payload)
              })
        case ActionTypes.GET_POSTS:
            return {...state, blogs: action.payload}
        default:
            return state;
    }
}

export default reducer;