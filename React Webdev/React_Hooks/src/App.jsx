import Counter from "./Components/Counter"
import './App.css'
import TrackMyMouse from "./Components/TrackMyMouse"
import { useState } from "react"
import AutoIncrementCount from "./Components/AutoIncrementCount";
import CompA from "./Components/CompA";
import SimpleReducerCounter from "./ReducerExample/SimpleReducerCounter";
import ComplexReducerCounter from "./ReducerExample/ComplexReducerCounter";
import ParentComp1 from "./GlobalStateDemo/ParentComp1";
import ReducerAPICallDemo from "./ReducerAPICallDemo";
import MainComp from "./CallBackHookDemo/MainComp";
import UseMemoDemo from "./UseMemoDemo";
import FocusInput from "./FocusInput";
import HookTimer from "./HookTimer";
import TitleUpdateOne from "./CustomHooks/TitleUpdateOne";
import TitleUpdateTwo from "./CustomHooks/TitleUpdateTwo";
import CounterHookOne from "./CustomHooks/CounterHookOne";
import CounterHookTwo from "./CustomHooks/CounterHookTwo";
import InputterBindOne from "./CustomHooks/InputterBindOne";
import InputterBindTwo from "./CustomHooks/InputterBindTwo";

function App() {
  //state to handle comp toggel...
  const[isCompLoaded, setIsCompLoaded] = useState(true);
  //A function to handle the toggel of the component...
  const toggelCompMount = () =>{
    setIsCompLoaded(prevState => (!prevState));
  }
  return (
    <>
      {/* <Counter /> */}

      {/* Let's have a component that we can Mount and unMount on Btn Click */}
      {/* <button onClick={toggelCompMount}>Toggel Component</button>
      {isCompLoaded && <TrackMyMouse />}  */}

      {/* UseEffect Example, where useEffect involves a state update on TimerInterval */}
      {/* <button onClick={toggelCompMount}>Toggel Component</button>
      {isCompLoaded && <AutoIncrementCount />} */}

      {/* Implementing useContex Hook */}
      {/* App -> CompA -> CompB -> CompC, this is the hirarchy, Form Comp A we will pass context to Comp B and C*/}
      {/* NOTE: In CompC -> Old way handling Context, without hooks, CompB -> handle contex using useContex Hook */}
      {/* <CompA /> */}

      {/* Implementation of useReducer hook [state management hook] */}
      
      {/* 1) Simple state and multiple useReducer */}
      {/* <SimpleReducerCounter /> */}
      
      {/* 2) useReducer with state and action as Objects [IMP] */}
      {/* <ComplexReducerCounter /> */}

      {/* useReducer + useContext for global state management i.e state sharing between various components */}
      {/* <ParentComp1 /> */}

      {/* Making API call with useReducer + useEffect */}
      {/* <ReducerAPICallDemo /> */}

      {/* Example of useCallback Hook [improve performance of components] */}
      {/* <MainComp /> */}

      {/* useMemo Demo [performance Optimization for slow functions] */}
      {/* <UseMemoDemo /> */}

      {/* useRef for Accessing DOM directly and Store value through out compomonent */}
      {/* <FocusInput /> */}
      {/* <HookTimer /> */}

      {/* Example of Creating Custom Hooks */}
      {/* <TitleUpdateOne /> */}
      {/* <TitleUpdateTwo /> */}

      {/* <CounterHookOne /> */}
      {/* <CounterHookTwo /> */}

      <h3>Input Bind without Custom Hook </h3>
      <InputterBindOne />
      <h3>Input Bind with Custom Hook </h3>
      <InputterBindTwo />

    </>
  )
}

export default App
