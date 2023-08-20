import React, { Component } from 'react'
import { PureComponent } from 'react';

export default class PureClassComponent extends PureComponent {
  
    constructor(props) {
      super(props)
    
      this.state = {
        name: 'sourav'
      }
      this.handleOnClick = this.handleOnClick.bind(this);
    }
    /* NOTE: 
        -- Here inCase of extends Component, Even if the the newState and oldState are same, Component will re-render.
        -- Here inCase of extends PureComponent, Since both value is same, Component will not re-render. 
    */
    handleOnClick() {
        console.log('Update Event is triggered !!');
        this.setState((prevState) => (
            {
                name: 'ram'
            }
        ))
    }

    //Implementing life-cycle method to track the component load and wethere updated or not ?
    componentDidMount() {
        console.log('The Component is successfully Mounted');
    }

    componentDidUpdate() {
        console.log('The Component is updated');
    }

    render() {
    return (
      <div>
        <p>{`The Name is: ${this.state.name}`}</p>
        <button onClick={this.handleOnClick}>Click to Update Name </button>
      </div>
    )
  }
}
