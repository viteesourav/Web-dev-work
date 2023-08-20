import React, { Component } from 'react'

class CounterClassComp extends Component {
  //handles the props and state for this component
  constructor() {
    super();
  
    this.state = {
       count: 0
    }

    //bind the event Handlers Methods [since this behaves different]
    this.handleOnClick = this.handleOnClick.bind(this);
  };

  //Handles OnClick Event from the button...[using callBack since i am updating state based on previous values]
  handleOnClick () {
      this.setState((prevState) => {
        return { 
          count: prevState.count + 1 
        } 
      });
  }

  render() {
    return (
      <div>
        <h2>{`The Count is: ${this.state.count}`}</h2>
        <button onClick={this.handleOnClick}>Increment</button>
      </div>
    )
  }
}

export default CounterClassComp;
