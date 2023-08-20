import React from 'react'
import { UserContextConsumer } from './compContext'

export default function CompC() {
  return (
    <div>
        <p>This is 3rd Child: CompC</p>
        <UserContextConsumer>
            {(contextVal) => {
                return (<p>{contextVal}</p>)
                }
            }
        </UserContextConsumer>
    </div>
  )
}
