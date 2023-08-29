import React, { useEffect, useState } from 'react'

function TrackMyMouse() {
    // state to store the mouse current pos..
    const[pos, setPos] = useState({xpos: 0, ypos: 0});
    
    const listenToMouse = (evt) => {
        console.log('Tracking current Mouse Post');
        setPos(prevState => ({
            ...pos,
            xpos: evt.clientX,
            ypos: evt.clientY
        }))
    }

    //Effect Runs only once when the rendered, and registered an event and a listener to that event...
    useEffect(()=> {
        document.addEventListener('mousemove', listenToMouse);

        //lets a return a function that is executed everytime, comp is unmounted...
        //[NOTE: In dev Mode, In consolem it might log but the functionality works, It does the cleanup job on component unmounting]
        return () => {
            console.log('Comp is getting unMounted');
            document.removeEventListener('mousemove', listenToMouse);  //This will remove the eventListner on document DOM Obj.
        }
    }, []);

    return (
    <div>
        <h4>{`Mouse Postion: ${pos.xpos}, ${pos.ypos}`}</h4>
    </div>
  )
}

export default TrackMyMouse