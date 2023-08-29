import React, { useEffect, useReducer } from 'react'

const initialState = {
    isLoadingIndicator: true, //till the service call it will show loading...
    responseData: {}, //Stores the response data...
    isError: false //Check for any error...
}

const reduce = (state, action) => {
    const{type, payload = {}} = action;
    switch(type) {
        case 'fetchSuccessful':
            return {
                ...initialState,
                isLoadingIndicator: false,
                responseData: payload,
                isError: false
            }
            break;
        case 'errorFetching':
            return {
                ...initialState,
                isLoadingIndicator: false,
                responseData: {},
                isError: true
            }
            break;
        default:
            return state;
    }
}

//This function shows how to use state Management useReducer with useEffect's API call...
function ReducerAPICallDemo() {
    
    //Lets have a state to load and render a post from jsonplaceHolder free test API website...
    const[postData, dispatch]=useReducer(reduce, initialState);

    //make the service call in useEffect and pass the dispatch method.[Making service call once, i.e ComponentDidMount]
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(resp => resp.json())
        .then(data => {
            dispatch({type: 'fetchSuccessful', payload: data});
        })
        .catch(err=>{
            dispatch({type: 'errorFetching'});
        })
    }, []);

    const {isLoadingIndicator, responseData, isError} = postData;

    return (
        <div>
            { isLoadingIndicator ? <h2>Loading....</h2>: 
              (responseData.title !== undefined ? <h2>{responseData.title}</h2> : <h2>No response</h2>) }
            {isError ? <h2>Something went wrong...</h2>: ''}
        </div>
    )
}

export default ReducerAPICallDemo