import ActionTypes from '../Constants/ActionTypes'
import auth0Client from '../Auth/Auth';

const addNewPost = () => ({
    type: ActionTypes.ADD_POST
  });

const addNewPostSuccess = payload => ({
    type: ActionTypes.ADD_POST,
    payload: payload
});

export const AddPost = (newPost, history) => {
    return dispatch => {
        dispatch(addNewPost());

        fetch(`/posts`, {body: JSON.stringify(newPost), 
            headers: {'content-type': 'application/json', 
                     'Authorization': 'Bearer '+ auth0Client.getAccessToken() }, method: 'POST'})
            .then( (response) => response.json() )
            .then( (data) => {
                dispatch(addNewPostSuccess(data.newPost))
                history.push('/')
            })
            .catch( (e) => console.log(e) );
    }
}