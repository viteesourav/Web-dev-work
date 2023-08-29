import React from 'react'
import { userContex, sessionContex } from './CompA'

// This implements the context consumer in old ways without hooks, Looks pretty bulky just for 2 context...
function CompC() {
  return (
    <div>
        <h3>This is nested Child 2 [Doesn't uses hooks]</h3>
        <userContex.Consumer >
            {(valcontext) => (
                <div>
                <h3>{`The userContext Value is: ${valcontext}`}</h3>
                <sessionContex.Consumer>
                    {(value2) => (
                            <h3>{`This is second ContextValue: ${value2}`}</h3>
                        )
                    }
                </sessionContex.Consumer>
                </div>
            )}
        </userContex.Consumer>
    </div>
  )
}

export default CompC