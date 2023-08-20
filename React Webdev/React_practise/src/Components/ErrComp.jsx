import React from 'react'

//This component take a bool prop, if true, we need to render the fallback Error Screen.
export default function ErrComp({isShowError}) {
    if(isShowError) {
        throw new Error('Hey Error occured, Fix it !');
    }
  return (
    <div>
        <h1>This component Runs perfectly fine</h1>
    </div>
  )
}
