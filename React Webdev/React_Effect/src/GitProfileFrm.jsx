import { useState } from "react"

export default function GitProfileFrm({onProfileIdUpdate}) {
    const[userName, setUserName] = useState("");
    const [isError, setIsError] = useState(false);
    const handleFrmOnChange = (e) => {
        setUserName(e.target.value);
    }
    const handleFrmSubmit = (e) => {
        e.preventDefault();
        if(userName.length != 0) {
            isError && setIsError(false)
            console.log(userName);
            onProfileIdUpdate(userName);
            setUserName("");
        } else {
            setIsError(true);
        }
    }
    return (
        <form onSubmit={handleFrmSubmit}>
            <div style={{display: "inline-block"}}>
            <input type="text" name="userName" 
            placeholder="Your Git Profile Name"
            value={userName}
            onChange={handleFrmOnChange} />
            {isError && <span style={{color: "red", display: "block", fontSize: "0.7rem"}}>UserName cannot be empty</span>}
            </div>
            <button style={{
                margin: "1.3rem",
                fontSize: "0.8rem"
            }}>Fetch</button>
        </form>
    )
}