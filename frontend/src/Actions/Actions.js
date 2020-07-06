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
        var fakePostsItems = [{
            id: '1',
            title: 'Mad owl chases car 1',
            body: `Morecambe - Tuesday 8th August 2017

            Yesterday evening motorists were left running for their lives as a mad owl began a campaign of terror on rush traffic. 
            Eye Witness, Eric Barnes said "When I heard it Squawk in the sky above me, I thought I was done for"`
        }, {
            id: '2',
            title: 'Mad owl chases car 2',
            body: `Morecambe - Tuesday 8th August 2019

            Yesterday evening motorists were left running for their lives as a mad owl began a campaign of terror on rush traffic. 
            Eye Witness, Eric Barnes said "When I heard it Squawk in the sky above me, I thought I was done for"`
        }];
        dispatch(getPostsSuccess(fakePostsItems))
    }
}