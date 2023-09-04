//This file implements the reducer and provides access to the Redux Store...
import {createStore, applyMiddleware} from 'redux' //Note: createStore is depricated, we can go with legacy_createStore
import reducer from './Cake/reducer'
import rootReducer from './rootReducer';
import {composeWithDevTools} from '@redux-devtools/extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

//1. applying the logger middleware also...
//2. adding the redux-dev-tool
//3. adding the thunk from redux-thunk, enables writing us async action creaters for fetching API data...
export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(logger, thunk)
    ));


