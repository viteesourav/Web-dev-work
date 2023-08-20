import React, { Component } from 'react'

export default class RenderPropsComponent extends Component {
    
    // This is the commong functionality
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    incrementCount = () => {
        this.setState(prevState => (
            {
                count: prevState.count+1
            }
        ))
    }

    render() {
    return (
      <div>
        {this.props.render(this.state.count, this.incrementCount)}  
      </div>
    )
  }
}
