import { useState } from "react"

export default function LoginFrmDemo() {
    const[frmData, setFrmData] = useState({userName: "", password: ""});
    const handleFrmData = (evt) => {
        setFrmData(frmData => {
            return {
                ...frmData,
                [evt.target.name]: evt.target.value
            }
        })
    }
    const handleFrmSubmission = () => {
        console.log(`UserName is ${frmData.userName} and Password is ${frmData.password}`);
    }
    return (
        <div>
            <p>
                <label htmlFor="userId">Enter UserName: </label>
                <input 
                type="text" id="userId" name="userName" 
                value={frmData.userName} 
                onChange={handleFrmData} />
            </p>
            <p>
                <label htmlFor="pass">Enter Password: </label>
                <input type="password" id="pass" name="password" 
                value={frmData.password} 
                onChange={handleFrmData} />
            </p>   
            <button onClick={handleFrmSubmission}> Print In Console </button>
        </div>
    )
}