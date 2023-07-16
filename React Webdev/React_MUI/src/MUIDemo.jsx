import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function MUIDemo() {
    const[volume, setVolume] = useState(50);
    const[userName, setUserName] = useState("");

    const handleOnVolumeChange = (e, newVolume) => {
        setVolume(newVolume);
    }

    const handleTextChange = (e) => {
        setUserName(e.target.value);
    }

    const checkInput = (field) => (field.length ==0 ? false : true);

    return (
        <div>
            <Button variant="outlined" onClick={()=>alert('Hi')}
            color= "error"
            >Just a Button</Button>

            <h1>Volume is: {volume} </h1>
            <Slider aria-label="Volume" value={volume} onChange={handleOnVolumeChange} /> 

            <TextField id="username" label="UserName" variant="standard" />
            
            {/* This field here, dynamically validates if the field is empty or not, based on the state Value */}
            <TextField
                error={!checkInput(userName)}
                id="usernameField"
                label="Enter Name"
                variant="standard"
                helperText={!checkInput(userName) && "This Field Mandatory"}
                onChange={handleTextChange}
            />
        </div>
    )
}