import PropertyListItems from "./PropertyListItems";

export default function PropertyList({lists}) {
    return (
        <div style={{
            display: "flex"
        }}> {lists.map((ele)=>(
            <PropertyListItems key={ele.id} property={ele}/>
        ))}
        </div>
    )
}