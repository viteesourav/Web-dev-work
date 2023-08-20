import React, { Component } from 'react'

export default class CheckCompLifeCycle extends Component {
    
    //handles the props and state related to the component....
    constructor(props) {
      super(props);   //This has to there, this only brings `this.state`
    
      this.state = {
        count : 0
      }

      //bind the event handlers...
      this.handleOnClick = this.handleOnClick.bind(this);

      console.log('Component props', props);
      console.log('constructor Triggered');
    }

    //rarely used.....
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps method is triggered');
        return null;
    }

    //It triggers only after the component finsih Rendering...
    componentDidMount() {
        console.log('componentDidMount is triggered');
    }

    //Methods for update Component....

    handleOnClick () {
        this.setState((prevState) => ({
            count: prevState.count+1
        }))
    } 

    //rarely used...
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate method is triggered');
        return true;
    }

    //rearly used....
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate method is triggered');
        return null;
    }

    componentDidUpdate() {
        console.log('componentDidUpdate method is triggered');
    }

    //Renders the content....
    render() {
    return (
      <div>
        {console.log('render Method triggered')}
        <p>{`Count: ${this.state.count}`}</p>
        <button onClick={this.handleOnClick}>Click To Trigger Update Life-cycle methods </button>
      </div>
    )
  }
}
