import { ADD_ICE, BUY_ICE } from "./actionType"

const buyIce = () => {
    return {
        type: BUY_ICE
    }
}

const addIce = () => {
    return {
        type: ADD_ICE
    }
}

export {buyIce, addIce}