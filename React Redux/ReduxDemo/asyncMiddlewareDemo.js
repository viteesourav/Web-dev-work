//This shows how to implement Redux-thunk/Async API calls with Redux and middleware [***VIMP***]
const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware  = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

//Declaring Action_constants...
const FETCH_DATA = 'FETCH_DATA';
const FETCH_SUCESS = 'FETCH_SUCCESS';
const FETCH_ERROR = 'FETCH_ERROR';

//declaring action creater functions..
const fetchData = () => {   //Action to trigger the API call
    return {
        type: FETCH_DATA
    }
}
const fetchSucess = data => {  //If sucess, send the data in action
    return {
        type: FETCH_SUCESS,
        payload: data
    }
}
const fetchError = err => { //If error, send the err in action
    return {
        type: FETCH_ERROR,
        payload: err
    }
}

//Application state... [Holds the fetching status, response and errormsg]
const userState = {
    isLoading: true,
    dataResp : [],
    errMsg: ''
}

//Reducer Fucntion to bind state and action.
const userReducer = (state = userState, action) => {
    switch(action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isLoading: false
            }
            break;
        case FETCH_SUCESS:
            return {
                ...state,
                dataResp: action.payload,
                errMsg: ''
            }
            break;
        case FETCH_ERROR:
            return {
                ...state,
                dataResp: [],
                errMsg: action.payload
            }
            break;
        default:
            return state;
    }
}

//Defining an action creater for async operation...
const makeCall = () => {
    //takes the dispatch method as param, and can be async for handling API calls..
    return async dispatch => {   
        dispatch(fetchData());  //calling the fetchData action creater for loading indicator disable..
        try {
            const resp = await axios('https://jsonplaceholder.typicode.com/users');
            const userNameList = resp.data.map(record => record.username);
            dispatch(fetchSucess(userNameList)); //calls the action creater for sucess
        }
        catch(err) {
            dispatch(fetchError(err.message)); //calls the action creater for error msg
        }
    }
} 

//store takes the reducer and the applyMiddleware with thunkMiddleware for async action craeter...
const store = createStore(userReducer, applyMiddleware(thunkMiddleware));
console.log('Intitial userState: ', store.getState());
const unsubscribe = store.subscribe(()=> console.log(`Updated App State:`, store.getState()));
store.dispatch(makeCall()); //calls the action creater for API Call..
