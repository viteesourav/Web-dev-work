import { FETCHING_DATA, FETCHING_ERROR, FETCH_SUCESS, RESET } from "./actionType";

//Defining State For our User fetch Component...
const initialUserState = {
    isLoading: true,
    userData: [],
    errMsg: ''
}

const userReducer = (state=initialUserState, action) => {
    const val  = (action.payload) ? action.payload : ''
    switch(action.type) {
        case FETCHING_DATA:
            return {
                ...state,
                isLoading: false
            }
            break;
        case FETCH_SUCESS:
            return {
                ...state,
                userData: val,
                errMsg: ''
            }
            break;
        case FETCHING_ERROR:
            return {
                ...state,
                userData: [],
                errMsg: val
            }
            break;
        case RESET:
            return {
                ...initialUserState
            }
            break;
        default:
            return state;
    }
}

export default userReducer;