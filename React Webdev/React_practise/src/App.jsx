import './App.css'
import CounterClassComp from './Components/CounterClassComp'
import CheckCompLifeCycle from './Components/checkCompLifeCycle'
import PureClassComponent from './Components/PureClassComponent'
import RefComponent from './Components/refComponent'
import ParentRefComp from './Components/parentRefComp'
import PortalComp from './Components/portalComp'
import ErrComp from './Components/ErrComp'
import ErrorHandling from './Components/ErrorHandling'
import CountClick from './Components/CountClick'
import CountHover from './Components/CountHover'
import RenderPropsComponent from './Components/RenderPropsComponent'
import CompA from './ContextDemo/compA'
import { UserContextProvider } from './ContextDemo/compContext'
import FetchComp from './ReactHTTP/FetchComp'
import PostComp from './ReactHTTP/PostComp'

function App() {
  return (
    <>
      {/* <CounterClassComp /> */}
      {/* <CheckCompLifeCycle isthisProp = {true} /> */}
      {/* <PureClassComponent /> */}

      {/* React ref keyword to access DOM Directly */}
      {/* <RefComponent /> */}
      {/* <ParentRefComp /> */}
      
      {/* React-Portals to render Outside root DOM Node */}
      {/* <PortalComp /> */}
      
      {/* Error handling to catch and Handle Errors in React */}
      {/* <ErrorHandling>
        <ErrComp />
      </ErrorHandling>
      <ErrorHandling>
        <ErrComp isShowError={true} />
      </ErrorHandling> */}

      {/* HOC Implementation */}
      {/* <CountClick />
      <CountHover /> */}

      {/* Render using props */}
      {/* <RenderPropsComponent 
        render={ (countState, incrementCountState) => (
            <CountClick counter={countState} incrementCount={incrementCountState} />
          )} 
      />
      <RenderPropsComponent 
        render={ (countState, incrementCountState) => (
            <CountHover counter={countState} incrementCount={incrementCountState} />
          )} 
      /> */}
      
      {/* Context Demo: Nested Components: App -> CompA -> CompB -> CompC */}
      {/* We sent a value from App to CompC with prop drilling using React context */}
      {/* NOTE: If UserContextProvider Not included, userContextConsumer will use the default val passed to React.createContext */}
      {/* <UserContextProvider value="contextVal from App component">  
          <CompA />
      </UserContextProvider> */}

      {/* React with HTTP GET and POST */}
      <PostComp />
      <FetchComp />
    </>
  )
}

export default App
