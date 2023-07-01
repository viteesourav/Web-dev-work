import './App.css'
import ColorList from './ColorList'
import DoubleDice from './DoubleDice'
import Greeter from './Greeter'
import TestComponent from './TestComponent'
import ShoppingList from './ShoppingList'
import PropertyList from './PropertyList'
import Clicker from './Clicker'
import MakeButtonEvt from './MakeButtonEvt'
import IncrementCount from './IncrementCount'
import TogglerBtn from './TogglerBtn'
import MagicColorBox from './MagicColorBox'

const shoppingData = [
  {id: 1, item: "potato", qty: 6, isPicked: true},
  {id: 2, item: "garlic", qty: 7, isPicked: false},
  {id: 3, item: "meat", qty: 5, isPicked: false},
  {id: 4, item: "oil", qty: 2, isPicked: true}
];

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

function App() {
  return (
    <>
    <MagicColorBox rows={5}/> 
    {/* <TogglerBtn /> */}
    {/* <IncrementCount /> */}
    {/* <MakeButtonEvt msg="This Button" btnText="click Me" /> */}
    {/* <Clicker /> */}
    {/* <PropertyList lists={properties} /> */}
    {/* <ShoppingList itemList={shoppingData} /> */}
    {/* <TestComponent /> */}
    {/* <Greeter name="Sourav" age={22} />
    <Greeter name="Teddy" age={34} /> */}
    {/* <h2>Double Dice Rolled ! If they Match You win &#128526; </h2>
    <DoubleDice />
    <DoubleDice />
    <DoubleDice /> */}
    {/* <ColorList list={["red", "pink", "black", "grey"]} /> */}
    </>
  )
}

export default App
