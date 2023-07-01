export default function PropertyListItems({property}){
    return (
        <div>
            <h2>{property.name}</h2>
            <h4>${property.price} per night</h4>
            <h5>{property.rating} &#9733; </h5>
        </div>
    )
}