import React, { Component } from 'react'
import counterHOC from './counterHOC'

// export default class CountHover extends Component {
    
//     constructor(props) {
//       super(props)
    
//       this.state = {
//         hoverCount: 0
//       }
//     }

//     handleHoverCount = () => {
//         this.setState((prevState) => (
//             {
//               hoverCount: prevState.hoverCount+1
//             }
//         ))
//     }

//     render() {
//     return (
//       <div>
//         <p onMouseOver={this.handleHoverCount}>{`This para is hovered ${this.state.hoverCount} times`}</p>
//       </div>
//     )
//   }
// }

function CountHover({counter, incrementCount}) {
  return (
    <p onMouseOver={incrementCount}>{`This para is hovered ${counter} times`}</p>
  )
}

// export default counterHOC(CountHover);  //For HOC
export default CountHover;  //For RenderPropComponent
