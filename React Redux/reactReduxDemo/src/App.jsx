import './App.css'
import CakeApp from "./Components/CakeApp"
import {Provider} from 'react-redux' //react-redux provides `Provider` to pass store to all children
import { store } from './Redux/store' //Fetching my Redux Store
import CakeHookApp from './Components/CakeHookApp'
import CakeAndIceApp from './Components/CakeAndIceApp'
import FetchUsers from './Components/FetchUsers'

//This is the highes Level in application, Provider is used here so all children can access it...
function App() {
  return (
    <>
      <Provider store={store}>
        {/* Shows Compoent + Redux store without using Hoooks, Also shows the ownProps prop for mapStoreToProps and mapDispatchToProps */}
        {/* <CakeApp id="Testing Additonal props" /> */}

        {/* Shows Component + Redux Store using react-redux hooks */}
        {/* <CakeHookApp /> */}

        {/* Shows hanlding multiple Satet in a single Redux Store and action supporting payload */}
        {/* <CakeAndIceApp /> */}

        {/* Example for handling async API calls with Redux + redux-thunk */}
        <FetchUsers />
      </Provider>
    </>
  )
}

export default App
