import * as React from 'react';
import List from '@mui/material/List';
import ToDoItems from './ToDoItems';
import { TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import RemoveCircleTwoToneIcon from '@mui/icons-material/RemoveCircleTwoTone';

//Test Data for the component... 
// const testObj = [
//     {id: 1, message: "Take the Trash Out", isCompleted: true},
//     {id: 2, message: "Take the Trash Out", isCompleted: false},
//     {id: 3, message: "Take the Trash Out", isCompleted: false},
//     {id: 4, message: "Take the Trash Out", isCompleted: true},
// ]

//Handle the dataStorage in localStorage in browser....
const fetchToDoListFromStorage = () => {
    const resp =  JSON.parse(localStorage.getItem("toDoItemsList"));
    return !resp ? [] : resp;
}

export default function ToDoMain() {
    const[listData, setListData] = React.useState(() => fetchToDoListFromStorage());
    const[inputText, setInputText] = React.useState("");
    const[isValid, setIsValid] = React.useState(true);

    //Effect hook to handle storing of the listData whenever listData is updated...
    React.useEffect(()=> {
        localStorage.setItem("toDoItemsList", JSON.stringify(listData));
    }, [listData]);
    
    //This method handles the click events form the ListItem Components...
    const OnListItemClick = (id, event) => {
        console.log(`The item selected is ${id} for the event ${event}`);

        if(event === "OnCheckBoxClick") {
            setListData(listData => (
                listData.map(ele => (ele.id === id ? {...ele, isCompleted: !ele.isCompleted} : ele))
            ))
        }
        else if(event === "OnDeleteIconClick") {
            setListData(listData => (
                listData.filter(data => (data.id != id))
            ))
        }
    }
    //handles the sync between state and form data...
    const handleOnChangeText = (e) => {
        setIsValid(true);
        setInputText(e.target.value);
    }

    //handles addition of new Items to the TO DO List...[By clicking the Add button]
    const handleAddItem = () => {
        if(inputText.length != 0) {
            setListData(listData => (
                [...listData, {id: crypto.randomUUID(), message: inputText, isCompleted:false}]
            ));
        } else {
            setIsValid(false);
        }
        setInputText("");
    }

    //handle submission of new Items by Form Submit event...
    const handleOnFormSubmit = (e) => {
        e.preventDefault();
        handleAddItem();
    }

    return (
        <div>
            <h1>My ToDO List</h1>
            {
            listData.length != 0 ?
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {listData.map((data) => (
                    <ToDoItems listData={data} key={data.id} handleOnClick={OnListItemClick} />
                ))}
            </List> : <Typography sx={{
                color: 'slategray'
            }} variant="h5" gutterBottom>Add New Items</Typography>
            }
           <form onSubmit={handleOnFormSubmit}>
                <TextField id="to-do-input" label="Add New Items" 
                    required
                    value={inputText}
                    variant="standard" 
                    onChange={handleOnChangeText} 
                    error = {!isValid}
                    helperText = {!isValid && "This Field is Mandatory"}
                />
                <Button variant="outlined" size="medium" color="success" endIcon= {<AddBoxIcon />}
                    sx = {{m:2}}
                    onClick={handleAddItem}
                >Add</Button>
           </form>
           <Button variant="outlined" size="small" 
                color="error" 
                endIcon= {<RemoveCircleTwoToneIcon />}
                sx = {{m:2, p:1.2}}
                onClick={() => setListData([])}
                >Remove All Items</Button>
        </div>
    )
}