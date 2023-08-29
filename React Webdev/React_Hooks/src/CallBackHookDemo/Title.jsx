import React, {memo} from 'react'

//Title Comp takes no prop, Just renders a h1...
function Title() {
    console.log('###This is Title Comp');
  return (
    <div>
        <h3>This is callback Demo</h3>
    </div>
  )
}

export default memo(Title)