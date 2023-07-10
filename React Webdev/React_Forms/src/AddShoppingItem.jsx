import { useState } from "react"

export default function AddShoppingItem({onSubmitClick}) {
    //state taking care of form Data..
    const[items, setItems] = useState({productName: "", qty: 0}); 
    //state taking care of frm input tag validations. [field by field validation]
    const[errorFlag, setErrorFlag] = useState({errProdName: false, errProdQty:false});
    
    //Function to validate a input field based on input tag name and its value...
    const validateFrmData = (fieldName, fieldValue) => {
        
        if(fieldName === 'productName') {
            errorFlag.errProdName = fieldValue === undefined || fieldValue.length === 0 ? true : false; 
        }
        if(fieldName === 'qty') {
            errorFlag.errProdQty = fieldValue === undefined || parseInt(fieldValue) > 50 || parseInt(fieldValue) <= 0 ? true : false; 
        }
        return {...errorFlag};
    }

    //Function that handles when something changes in the input tag....
    const handleOnFrmChange = (e) => {
        //Validate and Referesh the page if any validation fails...
        setErrorFlag(validateFrmData(e.target.name, e.target.value));
        //This keeps the state and form value in sync...
        setItems((items)=>{
            return {
                ...items,
                [e.target.name]: e.target.value
            }
        })
    }

    //Function handles When we submit the form...
    const handleOnSubmit = (e) => {
        e.preventDefault(); //prevent the form from refreshing...
        //This is a check if you are directly submitting the form without any data...
        let isFrmEmpty = false;
        if(items.productName === "" && items.qty === 0) {
            isFrmEmpty = true;
            setErrorFlag({errProdName: true, errProdQty:true}); //Update and refresh the error flags...
        }
        //check if the form is submitted empty or not ? and check if frm is not empty but some validation didn't meet...
        if(!isFrmEmpty && isValidAllFields()) {
            onSubmitClick(items);
            setItems({productName: "", qty: 0}); 
        }
    }

    //Function that iterates through all the keys of the errorFlag and check if all are false or not ?
    const isValidAllFields = () => {
        let isValid = Object.entries(errorFlag).map((isValidEntry) => (isValidEntry[1])); //Converts the JSON Obj to array of keys and values i.e [[key1, value1], [key2, value2]]
        return isValid.every((entry) => (entry === false));
    } 

    return (
        <form onSubmit={handleOnSubmit}>
            <div>
                <input type="text" name="productName" id="name"
                placeholder="Product Name" 
                value={items.productName}
                onChange={handleOnFrmChange} />
                {errorFlag.errProdName &&
                <span style={{
                    color: "red",
                    display: "block",
                    fontSize: "0.7em"
                }}>Product Name cannot be Empty</span> }
            </div>
            <div>
                <input type="number" name="qty" id="qty"
                placeholder="product Qty" 
                value={items.qty} 
                onChange={handleOnFrmChange} />
                {errorFlag.errProdQty &&
                <span style={{
                    color: "red",
                    display: "block",
                    fontSize: "0.7em"
                }}>Product Qty Should be between 0 and 50 </span> }
            </div>
            <button>Add Item</button>
        </form>
    )
}