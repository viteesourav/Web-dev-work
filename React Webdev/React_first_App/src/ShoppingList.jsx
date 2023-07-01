import ShoppingListItems from "./ShoppingListItems";

export default function ShoppingList({itemList}) {
    return (
        <div>
            <h2>This is My shopping List Items: </h2>
            <ul>
                {itemList.map((ele)=>(
                    <ShoppingListItems itemDetails={ele} key={ele.id} />
                ))}
            </ul>
        </div>
    )
}