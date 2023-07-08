export default function LuckyNBtn({title, execOnClick, bgColor="slateGrey"}) {
    return <button onClick={execOnClick} style={{
        backgroundColor: bgColor,
        padding: "0.6rem",
        textAlign:"center"
    }}>{title}</button>
}