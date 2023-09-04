import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeCall, resetData } from '../Redux';

//This component has buttons to fetch Data from API and store in Redux Store and then Clear it..
function FetchUsers() {

    //Fetching the data of the state from the Redux Store...
    const {isLoading, userData, errMsg} = useSelector(state => state.user);

    //Taking the dispatch method from the Redux Store to dispatch actions...
    const dispatch = useDispatch();

    //AS soon as the component Mounts, we want to load the userData...
    useEffect(()=>{
        dispatch(makeCall());  //makes the API call as soon as the component Mounts
    }, []);

    return (
        <div>
            {isLoading && <h1>Fetching Data....</h1>}
            <div>
                <button onClick={() => dispatch(makeCall())}>Fetch UserNames</button>
                <button onClick={() => dispatch(resetData())}>Reset</button>
            </div>
            {(errMsg != '') ? 
                (<div>   
                    <h3>Somthing Worng with Fetching UserData:</h3>
                    <p>{errMsg}</p> 
                </div>) :
                <ul>
                    {userData.map((userName, index) => <li key={index}> {userName}</li>)}
                </ul>
            }

        </div>
    )
}

export default FetchUsers