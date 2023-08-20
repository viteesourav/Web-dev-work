import React from 'react'

//This implements refForwarding concept: ref is passed from parent To directly access the child's DOM
const RefForwardComp = React.forwardRef((props, ref)=> {
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
      )
})

export default RefForwardComp;
