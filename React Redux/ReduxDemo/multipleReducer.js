//Shows Example of implementing multiple Reducer with individual Glbal State in one Redux store...
const Redux = require('redux');
const createStore = Redux.createStore;  //NOTE: createStore is from redux package, it's depricated but it works..
const combineReducers = Redux.combineReducers;

//defining the action Type constant [better than using String in action directly]
const BUY_CAKE = 'BUY_CAKE';
const NEW_CAKE = 'NEW_CAKE';
const NEW_ICE = 'NEW_ICE';
const BUY_ICE = 'BUY_ICE';

//Hadles Cake...

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
const initialCake = {
    totalCake: 10
}

//A reducer function, Handles updating the state based on action Type.
const cakeReducer = (state= initialCake, action) => {
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

//handles Ice...

const buyIce = () => {
    return {
        type: BUY_ICE,
        info: 'Buying a IceCream'
    }
}
const addIce = () => {
    return {
        type: NEW_ICE,
        info: 'Adding a new IceCream'
    }
}

//An initializer state For Buy Cake Application.
const initialIce = {
    totalIce: 10
}

//A reducer function, Handles updating the state based on action Type.
const iceReducer = (state= initialIce, action) => {
    const {type} = action;
    switch(type) {
        case BUY_ICE:
            return {
                ...state,
                totalIce: state.totalIce-1
            }
            break;
        case NEW_ICE:
            return {
                ...state,
                totalIce: state.totalIce+1
            }
            break;
        default:
            return state;
    }
}

/*
So we have:
    1) Cake:
        -- we have a cakestate to keep track of State, We have a action Creater fucntion, generates a action Obj.
        -- we have a reducer that handles the Cake action.
    2) Ice:
        -- we have a icestate to keep track of State, We have a action Creater fucntion, generates a action Obj.
        -- we have a reducer that handles the Ice action.
    -- WE can have many more global State if the application scales....
    -- Now we can combine all this into a single store and use it..
*/

//Generates a rootReducer for the Redux Store using the individual Reducer functions...
//NOTE: the store dispatch sends same action to all the reducers in the combineReducer param's object.
const rootReducer = combineReducers({
    cake: cakeReducer,
    ice: iceReducer
})

const store = createStore(rootReducer); //takes the combined rootReducerfunction as parameter..

//will use the methods exposed by redux Store..
console.log('Current State Of App: ', store.getState()); //Fetch the current State for cake and ice-cream...

//subsrcibe to the redux Store, takes callback that runs after successful update and return a function that unscribe from the store.
const unsubscribe = store.subscribe(() => console.log('Updated State of APP', store.getState()));

//Perform actions and update the store state accordingly...
store.dispatch(buyCake()); //buy a cake
store.dispatch(buyCake()); //buy another cake
store.dispatch(addCake()); //a new cake is added
store.dispatch(buyIce()); //buy an ice-cream
store.dispatch(buyIce()); //buy another ice-cream
store.dispatch(addIce()); //add a new iceCream

//unsubscribe from the redux Store. 
unsubscribe();