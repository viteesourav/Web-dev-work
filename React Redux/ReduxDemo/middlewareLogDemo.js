//Shows Example of implementation of a logger Middlware in Redux
const redux = require('redux');
const reduxLogger = require('redux-logger'); //package helps in logging info...

const createStore = redux.createStore; 
const applyMiddleware = redux.applyMiddleware;  //provides a middleware for Redux
const logger = reduxLogger.createLogger();

//Action Constants
const BUY_CAKE = 'BUY_CAKE';
const NEW_CAKE = 'NEW_CAKE';

//Action creater
const buyCake = () => {
    return {
        type: BUY_CAKE,
        info: 'Buying a Cake'
    }
}
const addCake = () => {
    return {
        type: NEW_CAKE,
        info: 'Adding a new Cake'
    }
}

//An initializer state For Buy Cake Application.
const initialState = {
    totalCake: 10
}

//A reducer function, Handles updating the state based on action Type.
const reducer = (state= initialState, action) => {
    const {type} = action;
    switch(type) {
        case BUY_CAKE:
            return {
                ...state,
                totalCake: state.totalCake-1
            }
            break;
        case NEW_CAKE:
            return {
                ...state,
                totalCake: state.totalCake+1
            }
            break;
        default:
            return state;
    }
}

//binding reducer with a store that holds and maintains it, also provide addional methods...
const store = createStore(reducer, applyMiddleware(logger)); //takes the reducer function as parameter and middleware fucntion

//get the initialState
console.log('Current State Of Cake App: ', store.getState()); //Fetch the current State for Store...

//subsrcibe to the redux Store..
const unsubscribe = store.subscribe(() => {});

//Perform actions and update the store state accordingly...
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(addCake());

//unsubscribe from the redux Store. 
unsubscribe();