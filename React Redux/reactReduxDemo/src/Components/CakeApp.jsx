import React from 'react'
import { addCake, buyCake } from '../Redux'
import { connect } from 'react-redux'  //This connects method with component

//We need to write to Function to bind the redux State and dispatch to prop of the Component

//Takes the state from the reduxStore.
const mapStateToProps = (state, ownProps) => {
    console.log('###mapStateToProps: ', ownProps);   //ownprops Keeps track of the props passing to Component from parent.
    return {
        // totalCake: state.totalCake
        totalCake: state.cake.totalCake  //Since we are using combineReducers in Redux Store.
    }
}

//Takes the dispatch method from reduxStore [implements the dispatch method + action creaters]
const mapDispatchToProps = (dispatch, ownProps) => {
    console.log('###mapDispatchToProps: ',ownProps);
    return {
        updateCakeCnt_buy: () => dispatch(buyCake()),  //Executing the redux dispatch with action-creaters
        updateCakeCnt_add: () => dispatch(addCake())
    }
}

//connect provides the state and other dispatch as props to Component
function CakeApp({totalCake, updateCakeCnt_add, updateCakeCnt_buy}) {
  return (
    <div>
        <h2>Cake Left In Bakery: {totalCake} </h2>
        <button onClick={updateCakeCnt_buy}>Buy Cake</button>
        <button onClick={updateCakeCnt_add}>Add Cake</button>
    </div>
  )
}

//connect from react-redux connects the Component with redux store through mapStateToProps and mapDispatchToProp methods...
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeApp)