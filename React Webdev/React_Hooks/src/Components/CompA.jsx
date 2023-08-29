import React from 'react'
import CompB from './CompB'

export const userContex = React.createContext();
export const sessionContex = React.createContext();

function CompA() {

  return (
    <div>
        <h3>This is compA, My parent component</h3>
        <userContex.Provider value={"TestuserName"}>
            <sessionContex.Provider value={"sessionData"}>
            <CompB />
            </sessionContex.Provider>
        </userContex.Provider>
    </div>
  )
}

export default CompA