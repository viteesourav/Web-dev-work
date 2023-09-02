//Shows Example of implementing a simple Buy Cake Application State using Redux...
const redux = require('redux');
const createStore = redux.createStore;  //NOTE: createStore is from redux package, it's depricated but it works..

//defining the action Type constant [better than using String in action.type directly]
const BUY_CAKE = 'BUY_CAKE';
const NEW_CAKE = 'NEW_CAKE';


//A Action creater: Returns a action obj with mandatory type property...
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
const store = createStore(reducer); //takes the reducer function as parameter..

//will use the methods exposed by redux Store..
console.log('Current State Of Cake App: ', store.getState()); //Fetch the current State for Store...

//subsrcibe to the redux Store, takes callback that runs after successful update and return a function that unscribe from the store.
const unsubscribe = store.subscribe(() => console.log('Updated State of APP', store.getState()));

//Perform actions and update the store state accordingly...
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(addCake());

//unsubscribe from the redux Store. 
unsubscribe();