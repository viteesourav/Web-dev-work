import { useState } from "react";
import AddShoppingItem from "./AddShoppingItem";
import {v4 as uuid} from 'uuid';

export default function ShoppingList() {
    const[myList, setMyList] = useState([]);
    const updateMyList = (newProduct) => {
        setMyList((myList)=> {
            return [...myList, {...newProduct, id: uuid()}]
        })
    }
    const markAllDone = () => {
        setMyList([]);
    }
    return (
        <main>
            <div style={{
                margin: "1rem 3rem",
                border: "2px solid slategrey",
                borderRadius: "20px",
                padding: "0 2rem",
                textAlign:"center"
            }}>
                <h2>My Shopping List</h2>
                <ol>
                    {
                        myList.length != 0 ? myList.map((item)=>(
                            <li key={item.id}>{item.productName} - {item.qty}</li>
                        )) : <h3> All Done &#128512; </h3>
                    }
                </ol>
            </div>
            {myList.length != 0 && <button onClick={markAllDone}>All Items Done</button> }
            <div>
                <h3> Add Items to Shopping List </h3>
                <AddShoppingItem onSubmitClick = {updateMyList}/>
            </div>
        </main>
    )
}