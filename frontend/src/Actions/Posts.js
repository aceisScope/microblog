import ActionTypes from '../Constants/ActionTypes'

const getPosts = () => ({
    type: ActionTypes.GET_POST
  });

const getPostsSuccess = payload => ({
    type: ActionTypes.GET_POSTS_SUCCESS,
    payload: payload
});

export const GetPosts = () => {
    return dispatch => {
        dispatch(getPosts());

        fetch(`/posts`)
            .then( (response) => response.json() )
            .then( (data) => dispatch(getPostsSuccess(data.posts)))
            .catch( (e) => console.log(e) );
    }
}