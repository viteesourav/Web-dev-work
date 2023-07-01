export default function ShoppingListItems({itemDetails}){
    return (
        <>
            <li style={
                {
                color: itemDetails.isPicked ? "red":"green",
                textDecoration: itemDetails.isPicked ? "line-through": "none",
                fontSize: "2.1em", fontWeight: "700"
                }
            }>{itemDetails.item}-{itemDetails.qty}</li>
        </>
    )
}