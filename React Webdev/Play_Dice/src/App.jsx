import './App.css'
import {getSum, allSameDie, allLessDice} from './utils'
import LuckyN from './LuckyN'

function App() {

  return (
    <>
     <h1> Dice Game !</h1>
    <LuckyN title="Get Sum to Target Value to Win" numDice={2} winChecker={getSum} targetGoal={5} />
    <LuckyN title="Get All Dice Same to Win" numDice={2} winChecker={allSameDie} />
    <LuckyN title="Get All Dice below target" numDice={2} winChecker={allLessDice} targetGoal={3}/>
    </>
  )
}

export default App
