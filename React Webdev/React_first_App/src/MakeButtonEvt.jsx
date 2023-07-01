export default function MakeButtonEvt({msg, btnText}) {
    return (
        <div>
            <button onClick={()=>alert(msg)}>{btnText}</button>
        </div>
    )
}