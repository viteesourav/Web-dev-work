import { useState } from "react"
import PassStrength from "./PassStrength";

export default function PasswordField() {
    const[textVal, setTextVal] = useState({text: "", isTextVisible: false});
    const[passState, setPassState] = useState({state: "", indicator: ""});

    const fetchPassScore = () => {
        
    }

    const handleOnTextChnage = (e) => {
        const newTextVal = e.target.value;
        setTextVal(textVal => {
            return {
                ...textVal, text: newTextVal
            }
        })
        if(newTextVal.length != 0) {
            setPassState(passState => {  
                if(!(/[A-Z]/.test(newTextVal)))
                    return {...passState ,state: "Password Must have atleast 1 UpperCase", indicator: "red"};
                else if(!(/[a-z]/.test(newTextVal)))
                    return {...passState ,state: "Password Must have atleast 1 lowercase", indicator: "red"};
                else if(!(/[0-9]/.test(newTextVal)))
                    return {...passState ,state: "Password Must have atleast 1 digit", indicator: "red"};
                else if(!(/[@*_]/.test(newTextVal)))
                    return {...passState ,state: "Password Must have atleast 1 Special Character", indicator: "red"};
                else if(newTextVal.length < 10) return {...passState ,state: "weak", indicator: "red"};
                else if(newTextVal.length >= 10 && newTextVal.length < 15) return{...passState ,state: "medium", indicator: "orange"};
                else return {...passState ,state: "strong", indicator: "green"};
            })
        }
    }
    const handleTextVisibility = () => {
        setTextVal(textVal => {
            return {...textVal, isTextVisible: !textVal.isTextVisible};
        })
    }
    const hanldeClearText = () => {
        setTextVal({text: "", isTextVisible: true});
        setPassState({state: "", indicator: ""});
    }

    return (
        <div style={{
            border: "2px solid slategrey",
            padding: "2rem",
            borderRadius: "40px"
        }}>
            <h2>Passoword Form</h2>
            <input style= {{
                fontSize: "1.2em"
            }} 
            type= {textVal.isTextVisible ? "text" : "password"} 
            name="inputField" 
            id="inputField" 
            placeholder="Enter Your Text" 
            value={textVal.text} 
            onChange={handleOnTextChnage}/>
            <section>
                <button style={{
                    fontSize: "0.9em",
                    margin: "1.2em 0"
                }}
                onClick={handleTextVisibility}
                >{textVal.isTextVisible ? "Hide" : "Show"}</button>
                <button style={{
                    fontSize: "0.9em",
                    margin: "1.2em 0.8em"
                }}
                onClick={hanldeClearText}
                >Clear</button>
            </section>
            <section style={{
                textAlign: "start"
            }}>
                <p>Password Rules: </p>
                <ul>
                    <li>Password min lenght must be 8</li>
                    <li>Passowrd must Contain atleast 1 Uppercase </li>
                    <li>Passowrd must Contain atleast 1 Lowercase</li>
                    <li>Passowrd must Contain atleast 1 SpecialChar</li>
                    <li>passowrd must contains atleast 1 number</li>
                </ul>
            </section>
            <section style={{
                textAlign:"start"
            }}>
                <PassStrength passStatus={passState} />
            </section>
        </div>
    )
}