import './App.css'
import Counter from './Counter'
import EmojiClicker from './EmojiClicker'
import ScoreKepper from './ScoreKepper'
import ScoreTracker from './ScoreTracker'

function App() {
  return (
    <>
    <ScoreTracker NoOfPlayers={3} winPoint = {10} />
    {/* <EmojiClicker /> */}
    {/* <ScoreKepper /> */}
    {/* <Counter /> */}
    </>
  )
}

export default App
