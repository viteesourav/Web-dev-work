import React, { Component } from 'react'

//This class compoennent particularly handles to display the fallback Screen for any error..
export default class ErrorHandling extends Component {

    constructor(props) {
      super(props)

      this.state = {
        isError: false   
      }
    }

    //Now need to implement the method that catch the error and triggers the error...
    static getDerivedStateFromError(error) {
        return {
            isError: true
        }
    }

    //Renders the error msg if error encounterd or Render the childeren of ErrorHandling..
  render() {
    return (
      <div>
        {this.state.isError ? <h2 style={{
            color: 'red'
        }}>Some Error occured !! Fix it </h2> : this.props.children}
      </div>
    )
  }
}
