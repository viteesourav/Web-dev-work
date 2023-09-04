import {combineReducers} from 'redux'
import cakeReducer from './Cake/reducer'
import iceReducer from './Ice/reducer'
import userReducer from './User/userReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    ice: iceReducer,
    user: userReducer
})

export default rootReducer