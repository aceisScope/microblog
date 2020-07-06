import ActionTypes from '../Constants/ActionTypes'

const addNewPostSuccess = payload => ({
    type: ActionTypes.ADD_POST,
    payload: payload
});

const getPostsSuccess = payload => ({
    type: ActionTypes.GET_POSTS,
    payload: payload
});

export const GetPosts = () => {
    return dispatch => {
        fetch(`/posts`)
            .then( (response) => response.json() )
            .then( (data) => dispatch(getPostsSuccess(data.posts)))
            .catch( (e) => console.log(e) );
    }
}