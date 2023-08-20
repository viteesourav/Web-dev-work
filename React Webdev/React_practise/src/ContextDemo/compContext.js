import React from "react"

const userContext = React.createContext('dummy'); //Default context val..

const UserContextProvider = userContext.Provider;
const UserContextConsumer = userContext.Consumer;

export {UserContextProvider, UserContextConsumer}   //exporting the context provider and consumer...