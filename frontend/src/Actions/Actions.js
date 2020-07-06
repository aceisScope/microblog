import ActionTypes from '../Constants/ActionTypes'

export const AddNewPostSuccess = payload => ({
    type: ActionTypes.ADD_POST,
    payload: payload
});

export const GetPostsSuccess = payload => ({
    type: ActionTypes.GET_POSTS,
    payload: payload
});