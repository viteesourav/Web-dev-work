const clickEvent = () => console.log("You just clicked it !");
const onHover = ()=> console.log("You just hoverd on me !");

function handleOnSubmit(e) {
    console.log(e);
    e.preventDefault();
    console.log("Form is submitted !");
}

export default function Clicker() {
    return (
        <div>
            <p onMouseOver={onHover}>Click the Button</p>
            <button onClick={clickEvent} style={{margin: "10px"}}>Click</button>
            <form onSubmit={handleOnSubmit}>
                <button>click me to Submit</button>
            </form>
        </div>
    )
}