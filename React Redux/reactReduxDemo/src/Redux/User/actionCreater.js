import { FETCHING_DATA, FETCHING_ERROR, FETCH_SUCESS, RESET } from "./actionType"
import axios from 'axios'

//This update the loading indicator as the call Triggers..
const fetchUsers = () => {
    return {
        type: FETCHING_DATA
    }
}

//This updates the state with resp Data after a successful Call..
const fetchSucess = resp => {
    return {
        type: FETCH_SUCESS,
        payload: resp
    }
}

//This updates the state with proper err msg...
const fetchError = err => {
    return {
        type: FETCHING_ERROR,
        payload: err
    }
}

const resetData = () => {
    return {
        type: RESET
    }
}

//Async Action Creater for fetching the data and dispatching calling...
const makeCall = () => {
    //Returns a async function, Takes dispatch to trigger State update based on action Creaters...
    return async (dispatch) => {
        try {
            dispatch(fetchUsers()); //Disable the loading indicator...
            const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
            const payload = resp.data.map(item => item.username);
            dispatch(fetchSucess(payload)); //Update the state with usernames...
        } catch (err) {
            dispatch(fetchError(err.message));  //update the state with proper errMsg...
        }
    }
}

export {fetchUsers, fetchSucess, fetchError, makeCall, resetData}