import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCake, buyCake } from '../Redux';

//This functional Component shows how with work with react-redux hooks and Redux store
function CakeHookApp() {

    //The selector hooks, enables you to pick a particular state from the Redux Store..
    const cakeCnt = useSelector(state => state.cake.totalCake); //Since we are using combineReducers in Redux Store.

    //This gives access to the dispatch methods of the Redux Store...
    const dispatch = useDispatch();

    //NOTE: The dispatch method takes the action returned by the action creater and pass it to the store's reducer..
    return (
        <div>
            <h2>Total Cake Count: {cakeCnt}</h2>
            <button onClick={()=> dispatch(buyCake())}>Buy Cake</button>
            <button onClick={()=> dispatch(addCake())}>New Cake</button>
        </div>
    )
}

export default CakeHookApp