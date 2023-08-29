import React, { useContext } from 'react'
import CompC from './CompC'
import { userContex, sessionContex } from './CompA'

//uses Hooks to access context Data, Easy and fast way to access parent data..
function CompB() {

    //implementing Contex using hooks...
    const userContextVal = useContext(userContex);
    const sessionContextVal = useContext(sessionContex);

    return (
        <div>
            <h3>This is nested Child 1 [uses Hooks To access context Data]</h3>
            <h3>{`The First context is: ${userContextVal} and second contex is: ${sessionContextVal}`}</h3>
            <CompC />
        </div>
    )
}

export default CompB