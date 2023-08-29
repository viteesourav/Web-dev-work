import React, { useContext } from 'react'
import { GlobalStateContext } from './ParentComp1'

//Parent has a global State Count, Here i should be able to access the count and update it....
function ChildCompA() {
    //we need to use the context data here...
    const{gCounter, gdispatch} = useContext(GlobalStateContext);
  return (
    <div>
        <h3>ChildCompA State: <label>{`${gCounter.count}`}</label></h3>
        <button onClick={()=>gdispatch({type: 'increment', counterStep: 1})}>Increment</button>
    </div>
  )
}

export default ChildCompA