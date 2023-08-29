import React, {memo} from 'react'

//ShowCountComp, Takes a count Prop and show it...
function ShowCountComp({title, count}) {
    console.log(`###This is ShowCount Component - ${title}`);
    return (
        <div>
            <h4>{`${title} - ${count}`}</h4>
        </div>
    )
}

export default memo(ShowCountComp)