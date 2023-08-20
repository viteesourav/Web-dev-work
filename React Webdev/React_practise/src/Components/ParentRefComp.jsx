import React, { Component } from 'react'
import RefComponent from './refComponent'
import RefForwardComp from './RefForwardComp';

export default class ParentRefComp extends Component {
  
    constructor(props) {
      super(props)
        
      this.childCompRef = React.createRef();
      this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        console.log('Parent OnClick Triggered');
        console.log(this.childCompRef);
        //calling the enableFocus function from the DOM of the child Component...
        this.childCompRef.current.enableFocus();

        //For RefForwarding we can directly access the RefForwardComp input directly...
        // this.childCompRef.current.focus();
    }

    render() {
    return (
      <div>
        <RefComponent ref={this.childCompRef}/>
        {/* <RefForwardComp ref={this.childCompRef} /> */}
        <button onClick={this.handleOnClick}> Btn From Parent to Enable Focus </button>
      </div>
    )
  }
}
