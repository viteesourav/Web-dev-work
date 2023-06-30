export default function ColorList({list}) {
    return (
        <div>
            <h1>Listing All the Colors</h1>
            <ul>
                {list.map((c)=>(<li style={{color: c}}><h2>{c}</h2></li>))}
            </ul>
        </div>
    );
}