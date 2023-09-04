//This implements the State and the export the reducer Function to be used by the store...
import { ADD_CAKE, BUY_CAKE } from "./actionTypes";

//state for my cake application
const cakeState = {
    totalCake: 20
};

//cake Reducer handles Buy_cake and add_cake actions.
const cakeReducer = (state=cakeState, action) => {
    const val = action.payload ? action.payload : 1; //additonal Feature where bulk cake can be bought
    switch(action.type) {
        case BUY_CAKE:
            return {
                ...state,
                totalCake: state.totalCake-val
            }
            break;
        case ADD_CAKE:
            return {
                ...state,
                totalCake: state.totalCake+1
            }
            break;
        default:
            return state;
    }
}

export default cakeReducer