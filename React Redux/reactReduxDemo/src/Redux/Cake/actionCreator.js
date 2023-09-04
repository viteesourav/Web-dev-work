//This File defines the Action creators, That returns a action Object with type property..

import { ADD_CAKE, BUY_CAKE } from "./actionTypes"

const buyCake = () => {
    return {
        type: BUY_CAKE
    }
}

const addCake = () => {
    return {
        type: ADD_CAKE
    }
}

// A Custom action to buy some number of cakes...
const buySomeCake = (qty) => {
    return {
        type: BUY_CAKE,
        payload: qty
    }
}

export {buyCake, addCake, buySomeCake}