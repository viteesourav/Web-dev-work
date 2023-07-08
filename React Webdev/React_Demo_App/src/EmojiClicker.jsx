import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

const emojiList = [":)", ";)", ":(", ":<", ";>", ":>", ":|", ":o"];
const selectRadomEmoji = () => {
    return emojiList[Math.floor(Math.random()*emojiList.length)];
}

export default function EmojiClicker(){ 
    const [emojiList, setEmojiList] = useState([{id: uuidv4(), text: selectRadomEmoji()}]);
    const handleOnClick = () => {
        setEmojiList((oldState)=>{
            return [...oldState, {id: uuidv4(), text: selectRadomEmoji()}];
        })
    }
    const handleDelete = (id) => {
        setEmojiList((oldState)=>(
            oldState.filter(e => e.id != id)
        ));        
    }
    return(
        <div>
            <p>{emojiList.map(e =>(
                <span style={{marginRight:"0.8rem", cursor: "pointer"}} 
                    key={e.id}
                    onClick={()=>{handleDelete(e.id)}} 
                >{e.text}</span>
            ))}</p>
            
            <button onClick={handleOnClick}>Click Me</button>
            
            <button style={{
                marginLeft: "1.2rem"
            }} onClick={()=>{
                setEmojiList(emojiList.map(e=>{
                    return {
                        ...e, text: ":)"
                    }
                }))
            }}>Make them Happy</button>
            
            <button style={{
                marginLeft: "1.2rem"
            }} onClick={()=>{
                setEmojiList(emojiList.filter(e=>!e));
            }}>Remove All</button>
        </div>
    )
}