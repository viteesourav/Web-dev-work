import React, {memo} from 'react'

//ButtonComp: have a button, Take a fun in the prop that updates the state..
function ButtonComp({setStateFun, children}) {
    console.log(`###This is Button Component - ${children}`);
  return (
    <div>
        <button onClick={setStateFun}>{children}</button>
    </div>
  )
}

export default memo(ButtonComp)