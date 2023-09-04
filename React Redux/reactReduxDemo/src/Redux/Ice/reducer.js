import { ADD_ICE, BUY_ICE } from "./actionType"

const iceIntialState = {
    totalIce: 15
}

const iceReducer = (state=iceIntialState, action) => {
    switch(action.type) {
        case BUY_ICE:
            return {
                ...state,
                totalIce: state.totalIce - 1
            }
            break;
        case ADD_ICE:
            return {
                ...state,
                totalIce: state.totalIce + 1
            }
            break;
        default:
            return state;
    }
}

export default iceReducer