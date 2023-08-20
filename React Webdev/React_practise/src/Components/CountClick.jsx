import React, { Component } from 'react'
import counterHOC from './counterHOC'

// class CountClick extends Component {
    
    // Code is moved to the HOC function that takes care of state and functionaility...
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count: 0
    //   }
    // }

    // //using arrow function defineation. [no need to bind event handler in constructor]
    // handleOnClick = () => {
    //     this.setState((prevState) => (
    //         {
    //             count: prevState.count+1
    //         }
    //     ))
    // }
  
//     render() {
//     return (
//         <button onClick={this.handleOnClick}>{`Clicked ${this.state.count} times`}</button>
//     )
//   }
// }

const CountClick = ({counter, incrementCount}) => {
  return (
    <button onClick={incrementCount}>{`Clicked ${counter} times`}</button>
  )
}


// export default counterHOC(CountClick);   //This calls the HOC before rendering the component.
export default CountClick;  //For RenderPropComponent