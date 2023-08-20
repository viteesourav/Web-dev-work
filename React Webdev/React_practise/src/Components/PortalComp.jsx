import React from 'react'
import ReactDOM from 'react-dom'

function PortalComp() {
//For Rendering the content in the portal-root DOM NODE...
return ReactDOM.createPortal(
    <h1>This is a Rendered using Portal</h1>,
    document.querySelector('#portal-root')
    )
}

export default PortalComp;